<template>
	<app-nav />
	<div class="super-container">	
		Posts
		<div v-if="posts.length != 0">
			<app-post :post="post" v-for="post in posts" v-bind:key="post.id" />
		</div>
		<div v-else>
			Vous n'avez pas de post dans la base de données
		</div>
		<app-post-form @newPost="newPost" />
	</div>
</template>

<script>
import AppNav from '@/components/Nav.vue'
import AppPost from '@/components/Post.vue'
import AppPostForm from '@/components/PostForm.vue'
import {mapState} from 'vuex'
import axios from 'axios'

export default {
	name: 'HomeView',
	components: {AppNav, AppPost, AppPostForm},
	computed: {
		...mapState(['user', 'jwt_token', 'posts'])
	},
	methods: {
		needUpdate() {
			this.$forceUpdate()
		}
	},
	mounted() {
		// anonymous impossible
		if(this.user === null){
			this.$router.push({name: 'login'})
			this.$store.dispatch('addMessageFlash', {message: "You should be logged in with an account", status: 'error'})
		}
		// initialize post list
		if(this.posts.length == 0) {
			// check if jwt token is valid
			axios.get(process.env.VUE_APP_API_URL+'/posts', {
				headers: {
					'Authorization': this.$store.state.jwt_token
				}
			})
			.then(({data}) => {
				this.$store.dispatch('fetchPosts', data.data)
			})
			.catch(({response}) => {
				if(response.data.message === "Invalid JWT Token" || response.data.message === "Expired JWT Token"){
					this.$store.dispatch('logout')
					this.$router.push({name:'login'})
				}
			})
		}
	}
}
</script>
