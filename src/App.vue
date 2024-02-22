<template>

  <div class="menu">
    <a v-for="m in menus" :key="m">{{m}}</a>
  </div>
  
  <div class="sort">
    <button @click="priceSort">가격 순 정렬</button>
    <button @click="priceBackSort">가격 역순 정렬</button>
    <button @click="titleSort">가나다순 정렬</button>
    <button @click="chipFilter">50만원 이하만 보여주기</button>
    <button @click="sortBack">되돌리기</button>
  </div>
  
  <Transition name="fade">
    <Modal @closeModal = "modalClose" :products="products" :click="click" :modalIsOpen="modalIsOpen"/>
  </Transition>

  <!-- <div v-for="(p, i) in products" :key="i">
    <img @click="modalOpen(i)" class="roomImg" :src="p.image" alt="방 이미지">
    <h4 @click="modalOpen(i)" class="content">{{ p.title }}</h4>
    <p>{{ p.price }}만원</p>
    <button @click="increase(i)">허위매물신고</button> <span>신고수 : {{ reportsCount[i] }}</span>
  </div> -->

  <Card @openModal="modalOpen(i)" :products="products[i]" v-for="(p, i) in products" :key="i"/>


</template>

<script>
import oneroomData from './data/oneroom';
import Modal from './components/Modal.vue';
import Card from './components/Card.vue';

export default {
  name: 'App',
  data(){
    return{
      productsOrign : [...oneroomData],
      click : 0,
      modalIsOpen : false, //true는 열림, false면 닫힘.
      reportsCount : [0, 0, 0, 0, 0, 0], // 신고수
      products : oneroomData,
      menus : ['Home', 'Shop', 'About'],
    }
  },
  methods:{
    modalClose(){
      this.modalIsOpen = false;
      this.view = false;
    },
    increase(i){
      this.reportsCount[i] += 1;
    },
    modalOpen(i){ // 모달창 열어주면서 무엇을 열었는지 알려주는 함수
      this.modalIsOpen = true;
      this.click = i;
    },
    priceSort(){
      this.products.sort(function(a, b){
        return a.price - b.price;
      })
    },
    sortBack(){
      // 이렇게 쓰면 안됨.
      // this.products = this.productsOrign;
      this.products = [...this.productsOrign];
    },
    priceBackSort(){
      /// 가격 역순 정렬
      this.products.sort(function(a, b){
        return b.price - a.price;
      })
    },
    titleSort(){
      // 가나다 정렬
      this.products.sort(function(a, b){
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if(x < y){
          return -1;
        }else {
          return 1;
        }
      })
    },
    chipFilter(){
      let arr = [];
      this.products.filter((chip)=>{
        if(chip.price <= 500000){
            arr.push(chip);
        }
      })
      this.products = [...arr];
    }
  },
  components: {
    Modal,
    Card,
  },
}
</script>

<style>
body{
  margin: 0;
  position: relative;
}
div{
  box-sizing: border-box;
}
.black-bg{
    width:100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
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
  position: fixed;
  width: 100%;
  z-index: 12;
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
/* 
.start{
  opacity: 0;
  이 클래스 내용의 모든 것들을 1초 동안 동작시켜라
  transition: all .5s;
}
.end{
  opacity: 1;
} */

.fade-enter-from{
  transform: translateY(-1000px);
}
.fade-enter-active{
  transition: all 0.5s;
}
.fade-enter-to{
  transform: translateY(0px);
}

.sort{
  padding-top: 70px;
}
</style>
