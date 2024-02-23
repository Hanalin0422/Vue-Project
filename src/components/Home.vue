<template>
    <Header/>
    <!-- 중간에 보일 부분 시작 -->
    <div id="visual-slider">
        <div class="inner">
        <div class="visual-txt">
            <p> <strong style="font-size: 80px;">FullStack </strong><br>
            Vue.js <br>+<br> Spring Boot</p>
        </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name : 'Home',
    components:{
        Header,
    }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Rubik+Glitch+Pop&family=Shadows+Into+Light&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Lilita+One&family=Rubik+Glitch+Pop&family=Shadows+Into+Light&display=swap');

body{
  margin: 0;
}
#Home {
  width: 100vw;
  height: 100vh;
}
#visual-slider{
  height: 1000px;
  background: url('../assets/main-bg.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
}
#visual-slider .inner .visual-txt{
  padding: 415px auto;
  position: absolute;
  top: 50%;
  text-align: center;
  margin-top : -200px;
  margin-left : 10%;
} 
#visual-slider .inner .visual-txt p{
  font-size: 50px;
  position: absolute;
  width: 600px;
  color: aliceblue;
  text-shadow: 0px 0px 10px #FFF700;
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
</style>