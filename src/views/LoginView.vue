<template>
    <div class="form-container">
        <div class="interior">
            <login-nav />
            <form action="">
                <h1 class="form-title">Login with existing account</h1>
                <div class="form-description">Don't have account? <router-link to="/register">Sign up</router-link></div>
                <div class="group">
                    <input type="email" placeholder="Email">
                </div>
                <div class="group">
                    <input type="password" placeholder="Your password">
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