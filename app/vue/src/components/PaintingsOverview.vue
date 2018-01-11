<template>
  <div id="overview">
    <h1>Galerij</h1>
    <div class="row">
      <div v-for="painting in paintings" class="column column-4">
        <section class="painting">
          <div class="painting__image">
            <img :src="painting.imageUrl">
          </div>
          <div class="painting__text">          
            <h2>{{painting.title}}</h2>
            <p>{{painting.artist}}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { apiurl } from './../config.js';

export default {
  name: 'PaintingsOverview',
  data () {
    return {
      paintings: []
    }
  },
  mounted () {
    axios.get(apiurl + '/paintings')
      .then((response) => {
        console.log(response.data);
        this.paintings = response.data;
      })
      .then((error) => {
        console.log(error);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
