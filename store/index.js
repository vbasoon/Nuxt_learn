import Vue from 'vue'
import Vuex from 'vuex'

const createStore = () => {
   return new Vuex.Store({
      state: {
         people: [],
      },
      getters: {
         people(state) {
            return state.people
         }
      },
      mutations: {

      }
   })
}