<template>
  <div class="detail">
      <div class="content">
          <router-link class="btn smallbtn" to="/galerij"><i class="fa fa-chevron-left"></i> Terug naar galerij</router-link>
          <section class="painting__details">
              <img :src="hostingurl + '/' + painting.imageUrl">   
              <h1>{{ painting.title }}</h1>
              <h3><span style="opacity: 0.5">door</span> {{ painting.artist }} <span style="opacity: 0.5">gemaakt op</span> {{ painting.created_at }}</h3>
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
            axios.get("http://localhost:3000/paintings/" + this.$route.params.id).then(response => {
                this.painting.created_at = this.$slugify.createDate(this.painting.created_at);
                this.painting = response.data;
            });
        }
    };
</script>

<style scoped>
    nav.webapp__nav,
    header.webapp__header {
      display: none;
    }
</style>
