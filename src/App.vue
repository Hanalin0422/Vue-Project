<template>

  <router-view :contentData="contentData"></router-view>

</template>

<script>
import contentData from './assets/blog';

export default {
  name: 'App',
  data(){
    return{
      contentData : contentData,
    }
  },
  components:{
  }

}
</script>

<style>

</style>
