<template>
  <div id="visual-slider">
    <!-- 중간에 보일 부분 시작 -->
      <div class="inner">
        <div class="visual-txt">
            <Transition name="fade-in">
              <p v-if="show == true"> <strong style="font-size: 80px;">FullStack </strong><br>
                Vue.js <br>+<br> Spring Boot</p>
            </Transition>
          </div>
        </div>
      </div>
</template>

<script>

export default {
    name : 'Home',
    data(){
      return{
        show : false,
      }
    },
    mounted() {
      this.show = true;
    },
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
  top: 120%;
  text-align: center;
  margin-top : -200px;
} 
#visual-slider .inner .visual-txt p{
  font-size: 50px;
  position: absolute;
  width: 600px;
  color: aliceblue;
  text-shadow: 0px 0px 10px #333;
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.fade-in-enter-from{
  transform: translateX(30px);
  opacity: 0;
}
.fade-in-enter-active{
  transition: all 1s ease-out;
}
.fade-in-enter-to{
  opacity: 1;
}

</style>