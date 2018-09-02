/* eslint-disable import/no-unresolved,import/first */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import BootstrapVue from 'bootstrap-vue';
import { VueExtendLayout, layout } from 'vue-extend-layout';
import Vuelidate from 'vuelidate';
import vueHeadful from 'vue-headful';


import Vue from 'vue';
import stores from './stores/index';
import router from './router';
// import { ClientTable, ServerTable, Event } from 'vue-tables-2';

// import this project scss
import './sass/main.scss';

// axios global for vue-table server
// window.axios = require('axios');

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(VueExtendLayout);

Vue.config.productionTip = false;

// assign component as global
Vue.component('vue-headful', vueHeadful);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: stores,
  ...layout,
});
