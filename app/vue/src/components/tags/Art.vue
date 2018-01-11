<template>
    <div class="art">
        <article v-if="controls">
            <div class="inputs">
                <input type="text" v-model="form.artname" placeholder="Naam van het kunstwerk">
                <input type="text" v-model="form.username" placeholder="Uw naam">
            </div>

            <div class="colors">
                <div v-for="(row, y_index) in colors" v-bind:class="{ row: true, active: y_index == activecolor[0] }">
                    <div v-for="(color, x_index) in row" v-bind:class="{ color: true, active: x_index == activecolor[1] }" :style="'background-color:'+color+';'"></div>
                </div>
            </div>

            <!-- <h1>Controls</h1> -->
            <table class="controls">
                <tr>
                    <td><img src="@/assets/icons/arrows.png"></td>
                    <td><p>Verander kleur</p></td>
                </tr>
                <tr>
                    <td><img src="@/assets/icons/b.png"></td>
                    <td>Teken</td>
                </tr>
                <tr>
                    <td><img src="@/assets/icons/a.png"></td>
                    <td>Verwijder</td>
                </tr>
                <tr>
                    <td><img src="@/assets/icons/plus-minus.png"></td>
                    <td>Verander lijndikte</td>
                </tr>
                <tr>
                    <td><img src="@/assets/icons/one-two.png"></td>
                    <td>Opslaan</td>
                </tr>
            </table>
        </article>

        <section id="draw_area" v-if="brush">
            <div class="cursor" :style="brush.cursorstyle"></div>
            <canvas :style="'background-color:' + canvasbackground + ';'" width="500" height="370" id="canvas"></canvas>
        </section>
    </div>
</template>

<script>
    import axios from 'axios';
    import { apiurl } from './../../config.js';

    export default {
        name: 'Art',
        props: ['controls'],
        data() {
            return {
                form: {
                    username: '',
                    artname: '',
                },
                controller: {},
                activecolor: [3, 4],
                prevcoords: null,
                canvassize: {
                    width: 500,
                    height: 370,
                },
                scaling: 1.00,
                savedimages: [],
                alreadysaved: false,
                canvasbackground: '#ffffff',
                colors: [
                    ['#ff0000', '#aa0000', '#990000', '#550000', '#110000'],
                    ['#00ff00', '#00aa00', '#009900', '#005500', '#001100'],
                    ['#0000ff', '#0000aa', '#000099', '#000055', '#000011'],
                    ['#ffffff', '#888888', '#555555', '#222222', '#000000'],
                ],
                brush: {
                    position: [0, 0],
                    cursorstyle: {
                        'width': '10px',
                        'height': '10px',
                        'left': '0px',
                        'top': '0px',
                        'margin-top': '0px',
                        'margin-left': '0px',
                    },
                    size: 10,
                }
            }
        },
        created() {
            this.pubnub.load();
        },
        mounted() {
            // ========== scaling ==========
            // Raspberry: 500 * 370 
            // 500 -> 100%
            // 5   -> 1%
            // 370 -> 74% (-> 370 / 5)

            var canvasWidth = document.getElementById('canvas').clientWidth;
            this.scaling = (((canvasWidth - this.canvassize.width) / 5) / 100) + 1;

            // Make it happen when people resize
            window.addEventListener('resize', () => {
                var canvasWidth = document.getElementById('canvas').clientWidth;
                this.scaling = (((canvasWidth - this.canvassize.width) / 5) / 100) + 1;
            });

            // Mavigation width issues
            setInterval(() => {
                if (document.getElementById('canvas'))
                {   
                    var canvasWidth = document.getElementById('canvas').clientWidth;
                    this.scaling = (((canvasWidth - this.canvassize.width) / 5) / 100) + 1;
                }
            }, 1000);

            // ============================

            this.$pubnub.subscribe({
                channels: ['canvas-data', 'controller-data'] 
            });

            this.$pubnub.addListener({
                message: message => {
                    if (message.channel == 'controller-data')
                    {
                        this.controller = message.message;

                        if (this.controller.drawing && this.controller.erasing)
                        {
                            // Not allowed
                            this.controller.drawing = null;
                            this.controller.erasing = null;
                        }

                        if (this.controller.direction != null)
                        {
                            switch(this.controller.direction)
                            {
                                case 'up':
                                    if (this.activecolor[0] != 0)
                                        this.activecolor[0] = this.activecolor[0] - 1;
                                    else this.activecolor[0] = this.colors.length - 1;
                                    break;
                                case 'down':
                                    if (this.activecolor[0] != this.colors.length - 1)
                                        this.activecolor[0] = this.activecolor[0] + 1;
                                    else this.activecolor[0] = 0;
                                    break;
                                case 'right':
                                    if (this.activecolor[1] != this.colors[0].length - 1)
                                        this.activecolor[1] = this.activecolor[1] + 1;
                                    else this.activecolor[1] = 0;
                                    break;
                                case 'left':
                                    if (this.activecolor[1] != 0)
                                        this.activecolor[1] = this.activecolor[1] - 1;
                                    else this.activecolor[1] = this.colors[0].length - 1;
                                    break;
                            }
                        }

                        if (this.controller.minus != null)
                        {
                            if (this.brush.size != 1)
                            {
                                this.brush.size--;
                            }
                        }

                        if (this.controller.plus != null)
                        {
                            if (this.brush.size != 100)
                            {
                                this.brush.size++;
                            }
                        }

                        if (this.controller.drawing == null) { this.prevcoords = null; }

                        if (this.controller.stop && this.controller.stopconfirm)
                        {
                            if (this.alreadysaved == false)
                            {
                                this.saveImage();
                            }
                        }
                        else
                        {
                            this.alreadysaved = false;
                        }
                    }
                    else if (message.channel == 'canvas-data')
                    {
                        var canvas = document.getElementById('canvas');
                        var context = canvas.getContext('2d');

                        // Show the position of the balloon on canvas for references sake
                        this.brush.position = [this.reverse(message.message[0][0]), message.message[0][1]];
                        this.brush.cursorstyle = {
                            'width': ((this.brush.size * 1.5) * this.scaling) + 'px',
                            'height': ((this.brush.size * 1.5) * this.scaling) + 'px',
                            'left': (this.brush.position[0] * this.scaling) + 'px',
                            'top': (this.brush.position[1] * this.scaling) + 'px',
                            'margin-top': '-' + (((this.brush.size * 1.5) / 2) * this.scaling) + 'px',
                            'margin-left': '-' + (((this.brush.size * 1.5) / 2) * this.scaling) + 'px',
                        };

                        // If drawing or erasing, draw the line
                        if (this.controller.drawing || this.controller.erasing)
                        {
                            var coords1 = [this.reverse(message.message[0][0]), message.message[0][1]];
                            var coords2 = [this.reverse(message.message[1][0]), message.message[1][1]];

                            context.beginPath();
                            context.strokeStyle = this.colors[this.activecolor[0]][this.activecolor[1]];
                            context.lineWidth = this.brush.size;

                            if (this.controller.erasing)
                            {
                                context.strokeStyle = this.canvasbackground;
                            }

                            if (this.prevcoords != null)
                            {
                                context.moveTo(this.prevcoords[0], this.prevcoords[1]);
                                context.lineTo(coords1[0], coords1[1]);
                            }

                            context.moveTo(coords1[0], coords1[1]);
                            context.lineTo(coords2[0], coords2[1]);
                            
                            context.lineCap = 'round';
                            context.stroke();

                            this.prevcoords = coords2;
                        }
                    }
                },
            });
        },
        methods: {
            uploadToDatabase(artURL) {
                let newPainting = {
                    title: this.form.artname,
                    artist: this.form.username,
                    imageUrl: artURL
                }

                console.log(newPainting);
                axios.post(apiurl + 'paintings', newPainting).then((response) => {
                    // Reset
                    var context = canvas.getContext('2d');
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    this.form.artname = '';
                    this.form.username = '';
                }).catch((error) => {
                    console.log(error);
                })
            },
            reverse(x) {
                var newcoord = this.canvassize.width - x;
                return newcoord;
            },
            saveImage() {
                // if (this.controls)
                {
                    this.alreadysaved = true;

                    var dataURL = document.getElementById('canvas').toDataURL('image/jpeg');
                    var url = 'http://www.angry-moustache.com/wall/save.php';
                    var name = this.$slugify.string(40);

                    let params = new FormData();
                    params.append('file', dataURL);
                    params.append('name', name);

                    const config = { headers: { 'content-type': 'multipart/form-data' } };

                    axios.post(url, params, config).then(response => { this.uploadToDatabase(name + '.jpg'); });
                }
            }
        },
        beforeDestroy() {
            window.clearInterval();
        }
    }
</script>
