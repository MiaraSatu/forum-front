import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.sessionStorage,
  reducer: state => ({
    user: state.user,
    jwt_token: state.jwt_token
  })
})

export default createStore({
  state: {
    user: null,
    jwt_token: null,
    posts: [],
    messageFlash: []
  },
  getters: {
  },
  mutations: {
    SET_USER(state, user) {
      if(user)
        state.user = {...user}
      else
        state.user = null
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_POSTS(state, posts) {
      state.posts = [...posts]
    },
    SET_MESSAGE_FLASH(state, message) {
      if(message) 
        state.messageFlash.push({...message})
      else
        state.messageFlash.shift()
    },
  },
  actions: {
    logout(context) {
      context.commit('SET_TOKEN', null)
      context.commit('SET_USER', null)
      sessionStorage.clear()
    },
    fetchPost(context, posts) {
      context.commit('SET_POSTS', posts)
    },
    addMessageFlash(context, message, status) {
      context.commit('SET_MESSAGE_FLASH', {status: status, message: message})
      setTimeout(() => {context.commit('SET_MESSAGE_FLASH', null)}, 3000)
    },
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
