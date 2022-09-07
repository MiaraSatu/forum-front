<template>
    <div class="form-container">
        <div class="interior">
            <login-nav />
            <form @submit.prevent="submitForm">
                <h1 class="form-title">Login with existing account</h1>
                <div class="form-description">Don't have account? <router-link to="/register">Sign up</router-link></div>
                <div class="error-message" v-if="errorMessage">{{errorMessage}}</div>
                <div class="group" :class="{'has-error': error.email}">
                    <input type="email" placeholder="Email" v-model="form.email">
                    <div class="error" v-if="error.email">{{error.email}}</div>
                </div>
                <div class="group" :class="{'has-error': error.clearPassword}">
                    <input type="password" placeholder="Your password" v-model="form.clearPassword">
                    <div class="error" v-if="error.clearPassword">{{error.clearPassword}}</div>
                </div>
                <button type="submit" id="submit-login" :disabled="loginLoad">
                    <font-awesome-icon v-show="loginLoad" icon="fa-solid fa-circle-notch" class="icon-loading" id="login-load-icon" />
                    Sign In
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import LoginNav from '@/components/LoginNav.vue'
import axios from 'axios'

export default {
    name: 'LoginView',
    data() {
        return {
            form: {
                email: '',
                clearPassword: ''
            },
            error: {},
            errorMessage: null,
            loginLoad: false
        }
    },
    components: {
        LoginNav
    },
    methods: {
        submitForm() {
            // manually validation
            let hasError = false
            if(this.form.email == '') {
                this.error.email = "this field could not be empty"
                hasError = true
            }
            else 
                this.error.email = null
            if(this.form.clearPassword == '') {
                this.error.clearPassword = "this field could not be empty"
                hasError = true
            }
            else 
                this.error.clearPassword = null
            // checking finaly validation
            if(hasError) {
                this.$forceUpdate()
                return
            }

            // sending request when no error
            this.loginLoad = true
            this.login()
        },
        login() {
            // fetching token
            axios.post(process.env.VUE_APP_API_URL+'/login_check', {
                username: this.form.email, 
                password: this.form.clearPassword
            })
            .then(({data}) => {
                // reinitialize errorMessage if exist
                this.errorMessage = null
                this.$store.commit('SET_TOKEN', 'Bearer '+data.token)
            })
            .then(() => {
                // fetching user
                this.getUser()
                this.$router.push({name: 'home'})
            })
            .catch(({response}) => {
                this.loginLoad = false
                this.errorMessage = response.data.message
            })
        },
        getUser() {
            axios.get(process.env.VUE_APP_API_URL+'/users/'+this.form.email, {
                headers: {
                    'Authorization': this.$store.state.token
                }
            })
            .then(({data}) => {
                // returned value would be a user
                this.$store.commit('SET_USER', data)
            })
            .catch(() => {
                this.$store.dispatch('logout')
                this.$router.push({name: 'login'})
            })
        }
    },
    beforeMount() {
        if(this.$store.state.user) {
            this.$router.push({name: 'home'})
            this.$store.dispatch('addMessageFlash', "you are already logged in", 'error');
        }
    },
}
</script>

<style lang="scss">
.error-message {
    color: rgb(216, 35, 35);
    text-align: center;
}
</style>