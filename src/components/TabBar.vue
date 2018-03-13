<template>
  <div class="tab-bar border-top">
    <div class="item"
         :class="{'active':item.name == $route.name}"
         v-for="item in $router.options.routes"
         :key="item.name"
         @mouseup="to(item.path)"
         v-if="item.tabBar"
          >
      <div>{{item.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    to(path) {
      this.$router.replace(path);
    },
  },
  mounted() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "~scss_vars";
  .tab-bar{
    position: fixed;
    width: 100%;
    bottom: 0;
    min-height: 8vh;
    color:$primary-color;
    display: flex;
    background: #ffffff ;
    justify-content: center;
    .item{
      flex:1;
      transition: all .3s ;
    }

    .active{
      background-color:$primary-color;
      color: #f0f0f0;
    }
  }
  .border-top::before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 1px;
    background: $primary-color;
    transform: scaleY(.4);
  }
</style>
