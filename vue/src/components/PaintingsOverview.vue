<template>
  <div>
    <h1>Kunstwerken</h1>
    <div class="grid__row">
      <div v-for="painting in paintings" class="grid__column-bp4-4">
        <section>
          <img :src="painting.imageUrl">
          <h2>{{painting.title}}</h2>
          <p>{{painting.artist}}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PaintingsOverview',
  data () {
    return {
      paintings: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/paintings')
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
