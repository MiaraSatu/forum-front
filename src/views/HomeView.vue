<template>
	<app-nav />
	Je suis le Home page 
	<div v-if="user">
		Welcome {{user.fullName}}
	</div>
</template>

<script>
import AppNav from '@/components/Nav.vue'
import {mapState} from 'vuex'
import axios from 'axios'

export default {
	name: 'HomeView',
	components: {AppNav},
	computed: {
		...mapState(['user', 'token'])
	},
	beforeMount() {
		axios.get(process.env.VUE_APP_API_URL+'/posts', {
			headers: {
				Authorization: this.token
			}
		})
		.then(({data}) => {
			console.log(data)
		})
		.catch((error) => {
			console.error('error has occured', error)
		})
	}
}
</script>
