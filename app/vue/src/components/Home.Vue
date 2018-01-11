<template>
  <div id="home">
      <div class="row">
          <div class="column column-sm-12 column-9">
              <h1>Live Stream</h1>
              <art :controls="false"></art>
          </div>
          <div class="column column-sm-12 column-3">
                <h1>Nieuw</h1>
                <item v-for="painting in paintings" :id="painting.id" :item="painting"></item>
                <router-link to="/galerij" class="btn">Bekijk de galerij</router-link>
          </div>
      </div>    
  </div>
</template>

<script>
import axios from "axios";
import Art from './tags/Art.vue';
import { apiurl } from './../config.js';
import Item from './tags/Item';

export default {
  name: "Home",
  components: { Art, Item },
  data() {
    return {
      paintings: []
    };
  },
  mounted() {
    axios.get(apiurl + "/paintings")
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
