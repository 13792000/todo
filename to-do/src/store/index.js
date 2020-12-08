import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[
      {id: 1, tittle: 'do'},
      {id: 2, tittle: 'do'},
      {id: 3, tittle: 'do'},
      {id: 4, tittle: 'do'},
      {id: 5, tittle: 'do'}
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    items(state) {
      return state.items
    }
  }
})
