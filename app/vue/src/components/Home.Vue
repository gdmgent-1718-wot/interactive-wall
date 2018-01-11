<template>
  <div id="home">
      <div class="row">
          <div class="column column-9">
              <h1>Live Stream</h1>
              <art :controls="false"></art>
          </div>
          <div class="column column-3">
                <h1>Nieuw</h1>
                <section v-for="painting in paintings" class="painting">
                    <div class="painting__image">
                        <img :src="painting.imageUrl">
                    </div>
                    <div class="painting__text">          
                        <h2>{{painting.title}}</h2>
                        <p>{{painting.artist}}</p>
                    </div>
                </section>
                <router-link to="/galerij" class="btn">Bekijk de galerij</router-link>
          </div>
      </div>    
  </div>
</template>

<script>
import axios from "axios";
import Art from './tags/Art.vue';
import { apiurl } from './../config.js';

export default {
  name: "Home",
  components: { Art },
  data() {
    return {
      paintings: []
    };
  },
  mounted() {
    axios
      .get(apiurl + "/paintings")
      .then(response => {
        console.log(response.data);
        console.log(response.data.length);
        let lastitems = response.data.slice((response.data.length - 3),response.data.length);
        this.paintings = lastitems;
      })
      .then(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
