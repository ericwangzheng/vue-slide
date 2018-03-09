<template>
  <my-content>{{msg}}</my-content>
</template>

<script>
import MyContent from '@/components/MyContent';

export default {
  name: 'Tab2',
  data() {
    return {
      msg: 'tab2',
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
