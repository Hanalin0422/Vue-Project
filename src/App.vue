<template>
  <div class="container">
    <router-view></router-view>
  </div>
  <!-- <Tabs /> -->
</template>

<script>
// import Tabs from './components/Tabs.vue';


export default {
  name: 'App',
  data(){
    return{
    }
  },
  components: {
    // Tabs,
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
