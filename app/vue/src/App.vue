<template>
  <div id="app">
	  <nav class="webapp__nav" v-if="layout != 'dashboard'" :class="{ 'nav-open': navOpen }">
			<i class="fa fa-times" @click.prevent="toggleNav"></i>
		  <router-link to="/"><img src="src/assets/logo_wit.png"></router-link>
		  <h2>Navigatie</h2>
		  <ul>
			  <li><router-link to="/" @click.prevent="toggleNav">Live Stream</router-link></li>
			  <li><router-link to="/galerij" @click.prevent="toggleNav">Galerij</router-link></li>
			  <li><router-link to="/about" @click.prevent="toggleNav">About</router-link></li>
			  <li><router-link to="/contact" @click.prevent="toggleNav">Contact</router-link></li>
		  </ul>
	  </nav>
	  <div class="container" v-bind:class="{ 'nav-open': !navOpen }">
		<i v-if="this.$route.path != ('/dashboard/login' && '/dashboard')" class="fa fa-bars" v-bind:class="{ 'nav-open': navOpen }" @click.prevent="toggleNav"></i>
		<header class="webapp__header" v-if="this.$route.path != ('/dashboard/login' && '/dashboard')">
			<img src="src/assets/logo.png">
		</header>
		<router-view/>
	</div>
  </div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			navOpen: false,
		}    
	},
	watch: {
     $route() {
         this.navOpen = false;
     }
	},
	mounted() {
		console.log(this.$route.path);
	},
  methods: {
      toggleNav() {
          if (this.navOpen == false) {
              this.navOpen = true;
              console.log('nav is open');
          }
          else {
              this.navOpen = false
              console.log('nav is dicht');
          }
      },
      closeNav() {
          this.navOpen = false;
      }
  }
}
</script>

<style>
</style>
