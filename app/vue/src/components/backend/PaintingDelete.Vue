<template>
  <div class="dashboard delete">
      <navigatie></navigatie>
      <div class="content">
          <h1>Dashboard</h1>
          <form method="DELETE" @submit.prevent="onSubmit">
              <p>Ben je zeker dat je dit item wilt verwijderen?</p>
            <button class="btn smallbtn" type="submit">Verwijderen</button>
            </form>        
      </div>         
  </div>
</template>


<script>
import axios from 'axios';
import Vue from 'vue';

export default {
  name: 'PaintingDelete',
  data () {
    return {
      painting: {},
    }
  },
  mounted () {
    let user = localStorage.getItem('username');
    if (!user) {
      this.$router.push('/');
    }    
  },
  methods: {
    onSubmit(){
    axios.delete('http://localhost:3000/paintings/' + this.$route.params.id)
        .then((response) => {
          console.log(response);
          location.href = '/dashboard/paintings';
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
    nav.webapp__nav,
    header.webapp__header {
        display: none;
    }
</style>
