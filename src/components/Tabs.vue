<template>
    <div class="inner">
        <div class="tabs">
            <button class="btn" @click="tabIndex = 0">버튼0</button>
            <button class="btn" @click="tabIndex = 1">버튼1</button>
            <button class="btn" @click="tabIndex = 2">버튼2</button>
        </div>
        <div class="content">
            <div v-if="tabIndex == 0">내용0</div>
            <div v-else-if="tabIndex == 1">내용1</div>
            <div v-else-if="tabIndex == 2">내용2</div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Tabs',
    data(){
        return{
            tabIndex : 0,
        }
    }
}
</script>

<style>
.inner{
    position: absolute;
    height: 250px;
    text-align: center;
}
.tabs{
    text-align: center;
}
.btn{
    width: 152px;
    height: 30px;
    border: none;
    background-color: #168D63;
    cursor: pointer;
}
.btn:hover{
    background-color: #3CB371;
    transition: all .3s;
}
</style>