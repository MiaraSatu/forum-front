<template>
    <nav>
		<router-link :to="{name: 'home'}" class="nav-link">
			<font-awesome-icon icon="fa-solid fa-house" />
			Home
		</router-link>
		<div class="right-option">
			<div v-if="user" id="user-block">
				<div id="profil" @click="displayDropdown">
					<img src="@/assets/avataaars.png" alt="" id="profil-pic">
					{{user.fullName}}
				</div>
				<ul id="user-dropdown" v-show="dropdownVisible">
					<li>
						<font-awesome-icon icon="fa-solid fa-user-tie" class="icon" />
						<span>
							Profile
						</span>
					</li>
					<li>
						<button id="logout" @click="logout">
							<font-awesome-icon icon="fa-solid fa-power-off" class="icon" />
							<span>
								Logout
							</span>
						</button>
					</li>
				</ul>
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
	data() {
		return {
			dropdownVisible: false
		}
	},
	computed: {
		...mapState(['user'])
	},
	methods: {
		logout() {
			if(!confirm('are you sure to log out?'))
				return
			this.$store.dispatch('logout')
			this.$router.push({name: 'login'})
		},
		displayDropdown() {
			this.dropdownVisible = !this.dropdownVisible
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
			position: relative;
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

			#user-dropdown {
				position: absolute;
				top: 1rem;
				padding: 0 1rem;
				list-style-type: none;
				background-color: rgb(255, 255, 255);

				li {
					margin: 0.5rem 0;
					font-size: 0.8rem;

					.icon {
						margin-right: 0.4rem;
					}
				}

				#logout {
					display: flex;
					align-items: center;
					color: rgb(224, 0, 0);
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