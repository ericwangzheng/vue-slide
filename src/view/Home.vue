<template>
  <my-content >
    {{msg}}
    <div style="font-size: 20px;color:#cdcdcd">
      try swipe!
    </div>
  </my-content>
</template>

<script>
import MyContent from '@/components/MyContent';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Index',
    };
  },
  components: {
    'my-content': MyContent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
