<template>
<v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" class="content">
  <slot></slot>
</v-touch>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    onSwipeLeft() {
      const that = this;
      const routes = that.$router.options.routes;
      for (let i = 0; i < that.$router.options.routes.length;) {
        if (routes[i].name === that.$route.name && i !== routes.length - 1) {
          that.$router.replace(routes[i + 1].path);
          break;
        }
        i += 1;
      }
    },
    onSwipeRight() {
      const that = this;
      const routes = that.$router.options.routes;
      for (let i = 0; i < that.$router.options.routes.length;) {
        if (routes[i].name === that.$route.name && i !== 0) {
          that.$router.replace(routes[i - 1].path);
          break;
        }
        i += 1;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    box-sizing:border-box;
    min-height: 100vh;
    padding-top: 100px;
    font-size: 50px;
  }
</style>
