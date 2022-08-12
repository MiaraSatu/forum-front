<template>
    <nav>
		<router-link to="/">Home</router-link>
		<router-link to="/login">Login</router-link>
		<router-link to="/register">Register</router-link>
	</nav>
</template>

<script>
export default {
    name: 'AppNav'
}
</script>

<style lang="scss">
nav {
	// code
	height: 2rem;
}
</style>