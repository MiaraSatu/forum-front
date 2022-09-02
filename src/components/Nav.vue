<template>
    <nav>
		<router-link :to="{name: 'home'}">
			<font-awesome-icon icon="fa-solid fa-house" />
			Home
		</router-link>
		<div class="user-block" v-if="user">
			<div>{{user.fullName}}</div>
			<button @click="logout">Logout</button>
		</div>
		<div v-else>
			<router-link :to="{name: 'login'}">sign in</router-link>
			or
			<router-link :to="{name: 'register'}">sign up</router-link>
		</div>
	</nav>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'AppNav',
	computed: {
		...mapState(['user'])
	},
	methods: {
		logout() {
			this.$store.dispatch('logout')
		}
	}
}
</script>

<style lang="scss" scoped>
nav {
	padding-left: 10%;
	padding-right: 10%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 2rem;
	background-color: rgb(182, 182, 182);
	.user-block {
		display: flex;
		align-items: center;
	}
}
</style>