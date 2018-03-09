<template>
  <div id="app">
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar';

export default {
  name: 'App',
  components: {
    'tab-bar': TabBar,
  },
  methods: {
    go() {
      console.log('wow');
    },
  },
};
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
