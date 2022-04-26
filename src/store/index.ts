import { createStore } from 'vuex'

export interface State{
    count:number
}

// create a nre store instance
const store = createStore<State>({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increament (state) {
      state.count++
    }
  }
})

export default store
