<template>


  <div class="black-bg" v-if=" modalIsOpen == true"  @click="modalIsOpen = false">
    <div class="white-bg">
      <div id="close" @click="modalIsOpen = false">
        <span class="material-symbols-outlined">close</span>
      </div>
      <h4>{{ products[click].title }}</h4>
      <p>{{ products[click].content }}</p>
    </div>
  </div>



  
  <div class="menu">
    <a v-for="m in menus" :key="m">{{m}}</a>
  </div>

  <div v-for="(p, i) in products" :key="i">
    <img @click="modalOpen(i)" class="roomImg" :src="p.image" alt="방 이미지">
    <h4 @click="modalOpen(i)" class="content">{{ p.title }}</h4>
    <p>{{ p.price }} 만원</p>
    <!-- <button @click="increase(i)">허위매물신고</button> <span>신고수 : {{ reportsCount[i] }}</span> -->
  </div>


</template>

<script>
import oneroomData from './data/oneroom';

export default {
  name: 'App',
  data(){
    return{
      click : 0,
      modalIsOpen : false, //true는 열림, false면 닫힘.
      reportsCount : [0, 0, 0, 0, 0, 0], // 신고수
      products : oneroomData,
      menus : ['Home', 'Shop', 'About'],
    }
  },
  methods:{
    increase(i){
      this.reportsCount[i] += 1;
    },
    modalOpen(i){ // 모달창 열어주면서 무엇을 열었는지 알려주는 함수
      this.modalIsOpen = true;
      this.click = i;
    }
  },
  components: {
  }
}
</script>

<style>
body{
  margin: 0;
}
div{
  box-sizing: border-box;
}
.black-bg{
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg{
  width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu{
  background: darkslateblue;
  padding : 15px;
  border-radius: 5px;
}
.menu a{
  color : white;
  padding: 10px;
  text-decoration: none;
}
.roomImg{
  width: 500px;
  margin-top: 40px;
  cursor: pointer;
}
.content{
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
#close{
  width: fit-content;
  margin-left: 95%;
  cursor: pointer;
}
</style>
