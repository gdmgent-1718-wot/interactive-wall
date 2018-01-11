<template>
    <div>
        <section class="painting">
            <div class="painting__image">
                <div :class="'image upload_' + item_random_id" style="background-image: url(http://angry-moustache.com/loading.gif)"> </div>
            </div>
            <div class="painting__text">          
                <h2>{{ item.title }}</h2>
                <p>{{ item.artist }}</p>
            </div>
        </section>
      </div>
</template>

<script>
    import { apiurl, hostingurl } from './../../config.js';

    export default {
        props: ['id', 'item'],
        data() {
            return {
                item_random_id: this.$slugify.string(30),
                url: this.$slugify.slugify(this.item.title.split(' ').join('-').toLowerCase() + '-' + this.item.id),
                loaded: false,
            }
        },
        mounted() {
            var img = new Image();
            img.src = hostingurl + '/' + this.item.imageUrl;
            img.onload = () => {
                this.loaded = true;
                document.querySelector('.upload_' + this.item_random_id).style.backgroundImage = 'url(' + img.src + ')';
            };
        }
    }
</script>
