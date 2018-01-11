<template>
  <div class="dashboard" id="login">
      <form id="form__dashboard">
        <h1>Inloggen</h1>
        <label for="username">Gebruikersnaam</label>
        <input type="text" name="username" id="username" placeholder="Jouw gebruikersnaam...">
        <label for="password">Wachtwoord</label>
        <input type="password" name="password" id="password" placeholder="********">
        <router-link to="/dashboard/paintings" class="btn" type="submit">Inloggen</router-link>
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
    };
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    nav.webapp__nav,
    .webapp__header {
        display: none;
    }
</style>
