<template>
    <app-nav />
    <div class="super-container">
        <app-post-form />
    </div>
</template>

<script>
import AppNav from '@/components/Nav.vue'
import AppPostForm from '@/components/PostForm.vue'

export default {
    name: 'PostFormView',
    components: {
        AppNav,
        AppPostForm
    }
}
</script>