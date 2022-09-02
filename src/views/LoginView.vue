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
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>
</template>

<script>
import LoginNav from '@/components/LoginNav.vue'

export default {
    name: 'LoginView',
    components: {
        LoginNav
    }
}
</script>