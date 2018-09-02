import Vue from 'vue';
import Vuex from 'vuex';
// Modules import downhere


// Initialize vuex
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    // Include imported modules in here

  },
  strict: debug,
});
