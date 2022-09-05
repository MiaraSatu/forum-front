<template>
    <nav>
		<router-link :to="{name: 'home'}" class="nav-link">
			<font-awesome-icon icon="fa-solid fa-house" />
			Home
		</router-link>
		<div class="right-option">
			<div class="user-block" v-if="user">
				<div>{{user.fullName}}</div>
				<button @click="logout">
					Logout
					<font-awesome-icon icon="fa-solid fa-right-from-bracket" />
				</button>
			</div>
			<div v-else id="nav-account-option">
				<router-link :to="{name: 'login'}" class="nav-link">sign in</router-link> |
				<router-link :to="{name: 'register'}" class="nav-link">sign up</router-link>
			</div>
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
			this.$router.push({name: 'login'})
		}
	},
	mounted() {
		console.log(this.$store.state.jwt_token)
	}
}
</script>

<style lang="scss" scoped>
nav {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    width: 100%;
    height: 3rem;
    padding: 0 10%;
    background-color: rgb(201, 201, 201);
    box-sizing: border-box;
	.right-option {
        margin-left: auto;
    }
	.nav-link {
		&:hover {
			color: rgb(64, 134, 224);
		}
	}
}
</style>