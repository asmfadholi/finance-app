<template>
  <div id="app">
    <vue-headful :title="$route.meta.title"/>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable vue/name-property-casing */

export default {
  name: 'default',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>
