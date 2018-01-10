<template>
  <div class="dashboard">
      <navigatie></navigatie>
      <div class="content">
          <h1>Dashboard</h1>
          <div class="row">
              <div class="column column-6">
                  <img :src="painting.imageUrl">
                </div>
              <div class="column column-6">
                  <h2>{{painting.title}}</h2>
                  <table class="detail__table">
                      <tr>
                          <td>Titel</td>
                          <td>{{painting.title}}</td>
                      </tr>
                      <tr>
                          <td>Artiest</td>
                          <td>{{painting.artist}}</td>
                      </tr>
                      <tr>
                          <td>URL</td>
                          <td>{{painting.imageUrl}}</td>
                      </tr>
                      <tr>
                          <td>Aangemaakt op:</td>
                          <td>{{painting.created_at}}</td>
                      </tr>
                  </table>
                  <router-link :to="'/dashboard/painting/' + painting._id + '/edit'" class="btn smallbtn"><i class="fa fa-pencil"></i> Edit</router-link>
                    <router-link :to="'/dashboard/painting/' + painting._id + '/delete'" class="btn smallbtn"><i class="fa fa-trash"></i> Delete</router-link>
              </div>
          </div>          
      </div>         
  </div>
</template>


<script>
import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'PaintingDetail',
  data () {
    return {
      painting: {},
      layout: 'dashboard'
    }
  },
  mounted () {
      axios.get('http://localhost:3000/paintings/' + this.$route.params.id)
      .then(response => {
        console.log(response)
        this.painting = response.data;
        });
    
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .webapp__nav,
    .webapp__header {
        display: none;
    }
</style>
