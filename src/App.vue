<template>  
  <Header />
  <router-view v-slot="{ Component, route }" :contentData="contentData">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component"/>
    </Transition>
  </router-view>
</template>

<script>
import contentData from './assets/blog';
import Header from './components/Header.vue';

export default {
  name: 'App',
  data(){
    return{
      contentData : contentData,
    }
  },
  components:{
    Header,
  }
}
</script>

<style>
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all .5s;
}
.fade-enter-to{
  opacity: 1;
}
.slide-right-enter-active,
.slide-right-leave-active{
  transition: opacity 1s, transform 1s;
}
.slide-right-enter-from,
.slide-right-leave-to{
  opacity: 0;
  transform: translateX(-30%);
}
.slide-left-enter-active,
.slide-left-leave-active{
  transition: opacity 1s, transform 1s;
}
.slide-left-enter-from,
.slide-left-leave-to{
  opacity: 0;
  transform: translateX(30%);
}


.moveDown-enter-active{
  animation: fadeIn 2s ease-in;
}
@keyframes moveUP {
  0% { opacity: 0;}
  50% { opacity: 0.5;}
  100% { opacity: 1;}
}
.moveDown-leave-active{
  animation : moveDown 0.3s ease-in;
}
@keyframes moveDown{
  0% {transform: translateY(0);}
  100% {transform: translateY(400px);}
}

</style>
