<template>
  <div id="app">
	  <nav>
		  <router-link to="/"><img src="src/assets/logo_wit.png"></router-link>
		  <h2>Navigatie</h2>
		  <ul>
			  <li><router-link to="/">Live Stream</router-link></li>
			  <li><router-link to="/galerij">Galerij</router-link></li>
			  <li><router-link to="/about">About</router-link></li>
			  <li><router-link to="/contact">Contact</router-link></li>
		  </ul>
	  </nav>
	  <div class="container">
		<header>
			<img src="src/assets/logo.png">
		</header>
		<router-view/>
	</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
