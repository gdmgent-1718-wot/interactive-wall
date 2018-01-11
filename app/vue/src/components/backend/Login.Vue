<template>
  <div class="dashboard" id="login">
      <form id="form__dashboard" @submit.prevent="onSubmit">
        <h1>Inloggen</h1>
        <label for="username">Gebruikersnaam</label>
        <input type="text" name="username" id="username" placeholder="Jouw gebruikersnaam..." v-model="user.username">
        <label for="password">Wachtwoord</label>
        <input type="password" name="password" id="password" placeholder="********" v-model="user.password">
        <button class="btn" type="submit">Inloggen</button>
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
      admin: {
        username: "admin",
        password: "secret"
      },
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.admin);
      console.log(this.user);
      if (this.user.username == this.admin.username && this.user.password == this.admin.password) {
        localStorage.setItem('username', this.user.username);
        localStorage.setItem('password', this.user.password);
        location.href = '/dashboard/paintings';
      }
      else {
        location.href = '/';
      }
    }
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
