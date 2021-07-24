import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state: {
    list: [
    ]
  },
  mutations: {
    updateText (state, payload) {
      const entry = state.list.find(item => item.id === payload.id)
      entry.name = payload.text
    },
    addEntry (state, payload) {
      state.list.push(payload)
    },
    switchState (state, payload) {
      const entry = state.list.find(item => item.id === payload.id)
      entry.done = !entry.done
    },
    remove (state, payload) {
      state.list = state.list.filter(item => item.id !== payload.id)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
