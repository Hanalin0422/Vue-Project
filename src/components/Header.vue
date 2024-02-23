<template>
    <!-- 헤더시작 -->
    <header id="header">
        <div class="inner">
        <h1 class="logo">
            <a href="/">
                <h1>EASY DEVELOPER</h1>
            </a>
        </h1>
        <nav class="nav">
            <ul class="menu">
                <li><a href="#">소개 페이지</a></li>
                <li><a href="/list">포트폴리오</a></li>
            </ul>
        </nav>
        </div>
    </header>
    <!-- 헤더 끝 -->
</template>

<script>
export default {
    name:'Header',

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Rubik+Glitch+Pop&family=Shadows+Into+Light&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Lilita+One&family=Rubik+Glitch+Pop&family=Shadows+Into+Light&display=swap');


#header{
  height: 80px;
  background-color: transparent;
  width: 100%;
  position: absolute;
  z-index: 10;
}
#header .logo{
  font-family: "Lilita One", sans-serif;
  font-weight: 400;
  font-style: normal;
  position: absolute;
  left: 25px;
  top: 40px;
}
#header .logo a{
  text-decoration: none;
  color: white;
}
#header .nav{
  position: absolute;
  left: 350px;
  top: 20px;
  width: 600px;
}
#header .nav li{
  float: left;
  margin: 30px;
  font-size: 20px;
  list-style-type: none;
}
#header .nav li a{
  margin: 5px 10px;
  text-decoration: none;
  color: white;
}

</style>