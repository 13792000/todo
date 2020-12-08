import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[
      {id: 1, tittle: 'practice bootstrap'},
      {id: 2, tittle: 'practice vue'},
      {id: 3, tittle: 'practice js'},
      {id: 4, tittle: 'practice '},
      {id: 5, tittle: 'do it'}
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
