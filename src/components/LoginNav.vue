<template>
    <nav>
        <router-link to="/" class="left-element">
            <font-awesome-icon icon="fa-solid fa-house" />
            Home
        </router-link>
        <div class="right-option">
            <router-link :to="{name: 'login'}" v-if="!isRoute('login')">Sign in</router-link>
            <router-link :to="{name: 'register'}" v-if="!isRoute('register')" >Sign up</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'LoginNav',
    methods: {
        isRoute(route) {
            return this.$route.name == route
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 3rem;
    padding: 0 10%;
    background-color: rgb(201, 201, 201);
    box-sizing: border-box;
    a {
        display: block;
    }
    .right-option {
        margin-left: auto;
        a {
            padding: 0.5rem 1rem;
            background-color: rgb(112, 112, 112);
            border-radius: 7px;
            color: rgb(255, 255, 255);
            &:hover {
                background-color: rgb(138, 138, 138);
            }
        }
    }
}
</style>