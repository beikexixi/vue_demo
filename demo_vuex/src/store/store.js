import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    name: 'jiangxi',
    age: '18',
    count: 0
  },
  mutations: {
    showName (state, msg) {
      state.name = msg
    },
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

export default store