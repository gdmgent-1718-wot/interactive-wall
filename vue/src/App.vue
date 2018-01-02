<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-size: 16px;
	margin: 0;
	padding: 0;
}

.grid__container {
	display: block;
	max-width: 71.25rem;
	margin: 0 auto;
	padding-left: 1.6rem;
	padding-right: 1.6rem;
	zoom: 1;
}

/*
	Row
*/
.grid__row {
	display: block;
	margin-left: -0.8rem;
	margin-right: -0.8rem;
	zoom: 1; 
}
.grid__row::before, .grid__row::after {
	content: "\0020";
	display: block;
	height: 0;
	overflow: hidden; 
}
.grid__row::after {
	clear: both; 
}
.grid__row--debug {
	background: rgba(52, 152, 219, 1.0); 
}
.grid__row--debug .grid__row--debug {
	padding-top: 0;
}

/*
	Column
*/
.grid__column, .grid__column-bp1-1, .grid__column-bp1-2, .grid__column-bp1-3, .grid__column-bp1-4, .grid__column-bp1-5, .grid__column-bp1-6, .grid__column-bp1-7, .grid__column-bp1-8, .grid__column-bp1-9, .grid__column-bp1-10, .grid__column-bp1-11, .grid__column-bp1-12, .grid__column-bp2-1, .grid__column-bp2-2, .grid__column-bp2-3, .grid__column-bp2-4, .grid__column-bp2-5, .grid__column-bp2-6, .grid__column-bp2-7, .grid__column-bp2-8, .grid__column-bp2-9, .grid__column-bp2-10, .grid__column-bp2-11, .grid__column-bp2-12, .grid__column-bp3-1, .grid__column-bp3-2, .grid__column-bp3-3, .grid__column-bp3-4, .grid__column-bp3-5, .grid__column-bp3-6, .grid__column-bp3-7, .grid__column-bp3-8, .grid__column-bp3-9, .grid__column-bp3-10, .grid__column-bp3-11, .grid__column-bp3-12, .grid__column-bp4-1, .grid__column-bp4-2, .grid__column-bp4-3, .grid__column-bp4-4, .grid__column-bp4-5, .grid__column-bp4-6, .grid__column-bp4-7, .grid__column-bp4-8, .grid__column-bp4-9, .grid__column-bp4-10, .grid__column-bp4-11, .grid__column-bp4-12, .grid__column-bp5-1, .grid__column-bp5-2, .grid__column-bp5-3, .grid__column-bp5-4, .grid__column-bp5-5, .grid__column-bp5-6, .grid__column-bp5-7, .grid__column-bp5-8, .grid__column-bp5-9, .grid__column-bp5-10, .grid__column-bp5-11, .grid__column-bp5-12 {
	display: block;
	position: relative;
	float: left;
	width: 100%;
	min-height: 1px;
	padding-left: 0.8rem;
	padding-right: 0.8rem;
	margin-bottom: 1.6rem;
	overflow: hidden; 
}

/* 
	Responsive media queries
   	Breakpoints
	BP1: 320px (20rem)
   	BP2: 480px (30rem)
   	BP3: 680px (42.5rem)
   	BP4: 960px (60rem)
   	BP5: 1140px (71.25rem)
*/
@media (min-width: 60rem) {
	.grid__column-bp4-1 { width: 8.33333%; }
	.grid__column-bp4-2 { width: 16.66666%; }
	.grid__column-bp4-3 { width: 25%; }
	.grid__column-bp4-4 { width: 33.33333%; }
	.grid__column-bp4-5 { width: 41.66666%; }
	.grid__column-bp4-6 { width: 50%; }
	.grid__column-bp4-7 { width: 58.33333%; }
	.grid__column-bp4-8 { width: 66.66666%; }
	.grid__column-bp4-9 { width: 75%; }
	.grid__column-bp4-10 { width: 83.33333%; }
	.grid__column-bp4-11 { width: 91.66666%; }
	.grid__column-bp4-12 { width: 100%; }
}


</style>
