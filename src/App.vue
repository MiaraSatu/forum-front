<template>
	<div v-if="hasMessageFlash" id="message-flash-box">
		<div v-for="message in threeMessageFlash" v-bind:key="message.message" class="message-parent-box">
			<div class="message" :class="message.status">
				{{ message.message }}
			</div>
		</div>
	</div>
	<router-view />
</template>

<script>
import {mapState} from 'vuex'

export default {
	name: 'App',
	computed: {
		...mapState(['messageFlash']),
		hasMessageFlash() {
			return this.messageFlash.length != 0
		},
		threeMessageFlash() {
			let l = this.messageFlash.length
			if(l > 3) {
				let threeMessageFlash = []
				for(let i = l - 4; i < l - 1; i++) {
					threeMessageFlash.push(this.messageFlash[i])
				}
				return threeMessageFlash
			}
			else {
				return this.messageFlash
			}
		}
	},
	updated() {
		console.log(this.$store.state.messageFlash)
	},
	mounted() {
		console.log(this.$store.state.messageFlash)
	}
}

</script>

<style lang="scss">
#message-flash-box {
	position: absolute;
	bottom: 30px;
	right: 15px;
	color: white;
	z-index: 100;
	.message-parent-box {
		filter: drop-shadow(-1px 6px 3px #949292);
		.message {
			padding: 1rem 1.75rem;
			padding-right: 1rem;
			margin: 0.6rem 0;
			clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 5% 50%);
			animation: removeMessageFlash 8s ease-in 2s 1;
			&.error {
				background-color: rgb(255, 38, 38);
			}
			&.success {
				background-color: #04de29;
			}
		}
	}
}
@keyframes removeMessageFlash {
    0% {
        opacity: 100%;
    }
    100% {
        opacity: 0%;
    }
}
</style>