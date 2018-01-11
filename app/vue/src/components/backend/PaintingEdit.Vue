<template>
  <div class="dashboard">
      <navigatie></navigatie>
      <div class="content">
          <h1>Dashboard</h1>
          <form method="PUT" @submit.prevent="onSubmit">
            <label for="title">Titel</label>
            <input type="text" id="title" name="title" placeholder="Titel van je kunstwerk..." v-model="painting.title">
            <label for="artist">Artiest</label>
            <input type="text" id="artist" name="artist" placeholder="Je naam/pseudo..." v-model="painting.artist">
            <label for="imageUrl">URL</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="URL..." v-model="painting.imageUrl">
            <button class="btn smallbtn" type="submit">Wijzigen</button>
            </form>        
      </div>         
  </div>
</template>


<script>
import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'PaintingEdit',
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
  },
  methods: {
    onSubmit(){
    let editpainting = this.painting

    console.log(editpainting);
    axios.put('http://localhost:3000/paintings/' + this.$route.params.id, editpainting)
        .then((response) => {
        console.log(response);
        })
        .catch((error) => {
        console.log(error);
        })
    }
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
