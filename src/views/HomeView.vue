<template>
	<app-nav />
	Je suis le Home page 
	(test:) <router-link :to="{name: 'login'}">login</router-link>
	<div v-if="user">
		Welcome {{user.fullName}}
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quis quo, quidem corrupti sunt impedit minus nulla cum dicta veritatis, sapiente, animi vero ducimus sint quas esse. Voluptatem, vitae blanditiis.
	</div>
</template>

<script>
import AppNav from '@/components/Nav.vue'
import {mapState} from 'vuex'
// import axios from 'axios'

export default {
	name: 'HomeView',
	components: {AppNav},
	computed: {
		...mapState(['user', 'jwt_token'])
	},
	mounted() {
		// anonymous impossible
		if(this.user === null){
			this.$router.push({name: 'login'})
			this.$store.dispatch('addMessageFlash', {message: "You should be logged with an account", status: 'error'})
		}
	}
}
</script>
