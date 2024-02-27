<template>
    <div class="post">
        <div class="inner">
            <div class="title">
                <strong>오늘의 일기</strong>
            </div>

            <div class="first"  v-if="step== 0">
                <div class="content">
                    <div class="writing-view">
                    </div>
                </div>
                <div class="posting">
                    <router-link to="/post/writing" style="text-decoration: none" @click="step++">일기 쓰러 가기</router-link>
                </div>
            </div>
            <div class="secound" v-if="step == 1">
                <router-view @stepMinus="step--"></router-view>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post',
    data(){
        return {
            step : 0,
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

.post{
    text-align: center;
    justify-content: center;
    font-family: "Nanum Pen Script", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 30px;
}
.post .inner .content{
    border : 1px solid #333;
    height: 500px;
    width: 100%;
}
.post .inner .posting{
}

</style>