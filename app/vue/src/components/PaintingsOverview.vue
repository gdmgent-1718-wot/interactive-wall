<template>
    <div id="overview">
    <h1>Galerij</h1>
        <div class="row">
            <div v-for="painting in paintings"  class="column column-4">
                <item :id="painting.id" :item="painting"></item>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { apiurl } from './../config.js';
    import Item from './tags/Item';

    export default {
        name: 'PaintingsOverview',
        components: { Item },
        data () {
          return {
              paintings: []
          }
        },
        mounted () {
          axios.get(apiurl + '/paintings').then((response) => {
                console.log(response.data);
                this.paintings = response.data;
            })
            .then((error) => {
                console.log(error);
            })
        }
    }
</script>