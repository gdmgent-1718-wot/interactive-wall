<template>
  <div class="dashboard" id="login">
      <form id="form__dashboard">
        <h1>Inloggen</h1>
        <label for="username">Gebruikersnaam</label>
        <input type="text" name="username" id="username" placeholder="Jouw gebruikersnaam...">
        <label for="password">Wachtwoord</label>
        <input type="password" name="password" id="password" placeholder="********">
        <router-link to="/dashboard" class="btn" type="submit">Inloggen</router-link>
      </form>
  </div>
</template>

<script>
import axios from "axios";
import Vue from 'vue';

export default {
  name: "Login",
  data() {
    return {
      paintings: [],
      layout: 'dashboard'
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/paintings")
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
    .webapp__nav,
    .webapp__header {
        display: none;
    }
</style>
