import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => new Vuex.Store({
  state: {
    gachaGuard: false
  },
  mutations: {
    setGachaGuard(state, gachaGuard) {
      state.gachaGuard = gachaGuard
    }
  },
  actions: {
    getGachaGuard: ({commit}, gachaGuard) => {
      commit('setGachaGuard', gachaGuard)
    },
    gachaGuardListener() {
      router.push('/dashboard');
    }
  },
  getters: {
    gachaGuard: state => {
      return state.gachaGuard
    }
  }
})