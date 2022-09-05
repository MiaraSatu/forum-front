import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    jwt_token: null,
    posts: []
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
    }
  },
  actions: {
    logout(context) {
      context.commit('SET_TOKEN', null)
      context.commit('SET_USER', null)
      sessionStorage.clear()
    },
    fetchPost(context, posts) {
      context.commit('SET_POSTS', posts)
    }
  },
  modules: {
  },
})
