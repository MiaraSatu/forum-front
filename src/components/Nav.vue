<template>
    <nav>
		<router-link :to="{name: 'home'}" class="nav-link">
			<font-awesome-icon icon="fa-solid fa-house" />
			Home
		</router-link>
		<div class="right-option">
			<div v-if="user" id="user-block">
				<div id="profil">
					<img src="@/assets/avataaars.png" alt="" id="profil-pic">
					{{user.fullName}}
				</div>
				<button @click="logout">
					Logout
					<font-awesome-icon icon="fa-solid fa-power-off" />
				</button>
			</div>
			<div v-else>
				<router-link :to="{name: 'login'}">login</router-link> or
				<router-link :to="{name: 'register'}">create account</router-link>
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

		#user-block {
			display: flex;
			align-items: center;

			#profil {
				display: flex;
				align-items: center;

				#profil-pic {
					width: 30px;
					height: 30px;
				}
			}
		}
    }
	.nav-link {
		&:hover {
			color: rgb(64, 134, 224);
		}
	}
}
</style>