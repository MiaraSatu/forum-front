<template>
    <form @submit.prevent="submitForm" >
        <div>
            <label for="title">Title</label>
            <input type="text" name="title" id="title" v-model="form.title">
            <div v-if="error.title">
                {{ error.title }}
            </div>
        </div>
        <div>
            <label for="content">Content</label>
            <textarea name="content" id="content" v-model="form.content"></textarea>
            <div v-if="error.content">
                {{ error.content }}
            </div>
        </div>
        <button type="submit">Post</button>
    </form>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
import {splitError} from '@/services/app'

export default {
    name: 'AppPostForm',
    data() {
        return {
            form: {
                title: "",
                content: ""
            },
            error: {}
        }
    },
    computed: {
        ...mapState({
            token: 'jwt_token'
        })
    },
    methods: {
        submitForm() {
            axios.post(process.env.VUE_APP_API_URL+'/posts', this.form, {
                headers: {
                    'Authorization': this.token
                }
            })
            .then(() => {
                this.error = {}
                this.$emit('newPost')
            })
            .catch(({response}) => {
                if(response.data.errors) {
                    this.error = splitError(response.data.errors, ['title', 'content'])
                }
            })
        }
    }
}
</script>