<template>
  <div class="detail">
      <div class="content">
          <router-link class="btn smallbtn" to="/galerij"><i class="fa fa-chevron-left"></i> Terug naar galerij</router-link>
          <section class="painting__details">
              <img :src="hostingurl + '/' + painting.imageUrl">   
              <h1>{{painting.title}}</h1>
              <h3>{{painting.artist}}</h3>
          </section>
                  
      </div>         
  </div>
</template>


<script>
import axios from "axios";
import Vue from "vue";

import { apiurl, hostingurl } from "./../config.js";

export default {
  name: "PaintingDetail",
  data() {
    return {
      painting: {},
      hostingurl: hostingurl
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/paintings/" + this.$route.params.id)
      .then(response => {
        console.log(response);
        this.painting = response.data;
      });
  },
  methods: {
    onSubmit() {
      let newPainting = {
        title: this.painting.title,
        artist: this.painting.artist,
        imageUrl: this.painting.imageUrl
      };

      console.log(newPainting);
      axios
        .post("http://localhost:3000/paintings", newPainting)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav.webapp__nav,
header.webapp__header {
  display: none;
}
</style>
