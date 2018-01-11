<template>
  <div class="dashboard">
      <navigatie></navigatie>
      <div class="content">
          <h1>Dashboard</h1>
          <h2>Tekeningen</h2>
          <table class="overview__table">
              <thead>
                  <th>thumbnail</th>
                  <th>titel</th>
                  <th>artiest</th>
                  <th>aangemaakt op</th>
                  <th></th>
              </thead>
              <tr v-for="painting in paintings">
                <td class="cell__image"><img :src="hostingurl + '/' + painting.imageUrl"></td>       
                <td>{{painting.title}}</td>
                <td>{{painting.artist}}</td>
                <td>{{painting.created_at}}</td>
                <td>
                    <router-link :to="'/dashboard/painting/' + painting._id" class="fa fa-eye"></router-link>
                    <router-link :to="'/dashboard/painting/' + painting._id + '/edit'" class="fa fa-pencil"></router-link>
                    <router-link :to="'/dashboard/painting/' + painting._id + '/delete'" class="fa fa-trash"></router-link>
                </td>
            </tr>  
          </table>            
      </div>         
  </div>
</template>

<script>
import axios from "axios";
import Vue from 'vue';

import Navigatie from './components/Navigatie.vue';
Vue.component( 'navigatie', Navigatie );

export default {
  name: "Paintings",
  data() {
    return {
      paintings: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/paintings")
      .then(response => {
        this.paintings = response.data
      })
      .then(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .webapp__nav,
    .webapp__header {
        display: none;
    }
</style>
