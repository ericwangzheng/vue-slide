<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="view"></router-view>
    </transition>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar';

export default {
  name: 'App',
  data() {
    return {
      transitionName: '',
      routePath: [],
    };
  },
  components: {
    'tab-bar': TabBar,
  },
  methods: {
  },
  watch: {
    $route(to, from) {
      if (this.routePath.indexOf(from.path) < this.routePath.indexOf(to.path)) {
        this.transitionName = 'slide-left';
      } else if (this.routePath.indexOf(from.path) > this.routePath.indexOf(to.path)) {
        this.transitionName = 'slide-right';
      }
    },
  },
  mounted() {
    this.routePath = this.$router.options.routes.map(item => item.path);
  },
};
</script>

<style>
body{
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
}
.view{
  position: absolute;
  width: 100%;
}
.slide-left-enter{
  margin-left: 100%;
}
.slide-left-leave-to{
  margin-left: -100%;
}
.slide-left-enter-active ,.slide-left-leave-active{
  transition: all .3s;
}
.slide-right-enter{
  margin-left: -100%;
}
.slide-right-leave-to{
  margin-left: 100%;
}
.slide-right-enter-active ,.slide-right-leave-active{
  transition: all .3s;
}
</style>
