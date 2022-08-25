<template>
    <div class="form-container">
        <div class="interior">
            <login-nav />
            <form @submit.prevent="submitForm" novalidate>
                <h1 class="form-title">Create account</h1>
                <div class="form-description">Already have an account? <router-link to="/login">Sign in</router-link></div>
                <div class="group" :class="{'has-error':error.fullName}">
                    <input type="text" placeholder="Full name" v-model="form.fullName">
                    <div class="error" v-if="error.fullName">
                        {{error.fullName}}
                    </div>
                </div>
                <div class="group" :class="{'has-error': error.email}">
                    <input type="email" placeholder="Email" v-model="form.email">
                    <div class="error" v-if="error.email">
                        {{error.email}}
                    </div>
                </div>
                <div class="group" :class="{'has-error': error.clearPassword}">
                    <input type="password" placeholder="Your password" v-model="form.clearPassword">
                    <div class="error" v-if="error.clearPassword">
                        {{error.clearPassword}}
                    </div>
                </div>
                <button type="submit">Sign up</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import LoginNav from '@/components/LoginNav.vue'
import {splitError} from '@/services/app'

export default {
    name: 'RegisterView',
    data() {
        return {
            form: {
                fullName: '',
                email: '',
                clearPassword: ''
            },
            error: {}
        }
    },
    components: {
        LoginNav
    },
    methods: {
        submitForm() {
            axios.post(process.env.VUE_APP_API_URL+'/registration', this.form)
            .then(() => {
                this.$router.push({name: 'login'})
            })
            .catch(({response}) => {
                let errors = response.data.errors;
                if(errors) {
                    this.error = splitError(errors, ['fullName', 'email', 'clearPassword'])
                }
            })
        }
    },
    updated() {
        console.log('update called')
    }
}
</script>

<style lang="scss">
.form-container {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-image: linear-gradient(to bottom right, rgb(241, 81, 148), rgb(233, 139, 17));
    & > .interior {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        background-image: radial-gradient(circle at top right, rgb(255, 255, 255) 10%, rgba(255, 255, 255, 0) 90%);
        box-sizing: border-box;
        form {
            width: 20rem;
            background-color: white;
            border-radius: 15px;
            padding: 2rem 2rem;
            .form-title {
                text-align: center;
                color: rgb(44, 44, 44);
            }
            .form-description {
                text-align: center;
                font-size: 0.9rem; 
                color: rgb(20, 20, 20);
                padding-bottom: 1rem;
            }
            .group {
                width: 100%;
                box-sizing: border-box;
                margin: 0.7rem 0;
                input {
                    width: 100%;
                    border: 1px solid rgb(212, 212, 212);
                    border-radius: 7px;
                    padding: 0.7rem 1rem;
                    box-sizing: border-box;
                    font-size: 0.9rem;
                    outline: none;
                    &::placeholder {
                        font-style: italic;
                    }
                    &:focus {
                        border: rgb(30, 108, 226);
                        box-shadow: 0px 0px 5px rgb(30, 108, 226);
                    }
                }
                &.has-error {
                    input {
                        border: 1px solid rgb(255, 68, 68, 0.7);
                        &:focus {
                            border: rgb(236, 54, 54);
                            box-shadow: 0px 0px 5px rgb(236, 54, 54);
                        }
                    }
                    .error {
                        color: rgb(216, 35, 35);
                        font-size: 0.9rem;
                    }
                }
            }
            button[type="submit"] {
                width: 100%;
                color: white;
                background-color: rgb(30, 108, 226);
                border: none;
                border-radius: 7px;
                padding: 0.7rem;
                box-sizing: border-box;
                &:hover {
                    background-color: rgb(73, 134, 226);
                }
            }
        }
    }
}
</style>