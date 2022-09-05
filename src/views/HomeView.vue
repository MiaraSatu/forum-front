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
		...mapState(['user', 'token'])
	},
	beforeMount() {
		// axios.get(process.env.VUE_APP_API_URL+'/posts', {
		// 	headers: {
		// 		Authorization: this.token
		// 	}
		// })
		// .then(({data}) => {
		// 	console.log(data)
		// })
		// .catch((error) => {
		// 	console.error('error has occured', error)
		// })
	}
}
</script>
