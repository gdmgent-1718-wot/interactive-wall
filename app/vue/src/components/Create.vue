<template>
  <div class="grid__container">
    <h1>Nieuw kunstwerk toevoegen</h1>
    <a href="">terug naar overzicht</a>
    <form method="POST" @submit.prevent="onSubmit">
      <label for="title">Titel</label>
      <input type="text" id="title" name="title" placeholder="Titel van je kunstwerk..." v-model="painting.title">
      <label for="artist">Artiest</label>
      <input type="text" id="artist" name="artist" placeholder="Je naam/pseudo..." v-model="painting.artist">
      <label for="imageUrl">URL</label>
      <input type="text" id="imageUrl" name="imageUrl" placeholder="URL..." v-model="painting.imageUrl">
      <button type="submit">Toevoegen</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Create',
  data () {
    return {
      painting: {
        title: '',
        artist: '',
        imageUrl: ''
      }
    }
  },
  methods: {
      onSubmit(){
        let newPainting = {
          title: this.painting.title,
          artist: this.painting.artist,
          imageUrl: this.painting.imageUrl
        }

        console.log(newPainting);
        axios.post('http://localhost:3000/paintings', newPainting)
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

</style>
