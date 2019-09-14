<template>
<div id="app">
<div id="main" :class="routeClass">
<router-view/>
</div>
</div>
</template>

<script>
export default {
name: 'app',
computed: {
	routeClass() {
		if (this.$route.name === "Home") {
			return 'home-bg'
		} else if (this.$route.name === "About") {
			return 'about-bg'
		} else if (this.$route.name === 'Contact') {
			return 'contact-bg'
		}
		return '';
	}
}
}
</script>

<style>
#app {
font-family: 'Roboto', sans-serif;
height: 100%;
margin: 0;
}
</style>