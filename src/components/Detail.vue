<template>
    <div class="inner">
        <div class="mt-4">
            <h4>{{ contentData[idx].title}}</h4>
            <p>{{ contentData[idx].date}}</p>
            <h5>{{ contentData[idx].content}}</h5>
        </div>
        <div class="click">
            <button @click="$router.go(-1)" type="button" id="color" class="btn btn-outline-light">뒤로 가기</button>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Detail',
    props:{
        contentData : Array,
    },
    data(){
        return{
            idx : this.$route.params.id,
        }
    }
}
</script>

<style>
.inner{
    position: relative;
    text-align: center;
}
#color{
    color: #333;
    border-color: #90CAF9;
}
.click{
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
}
p{
    margin: 10px auto;
}
h5{
    margin: 70px auto;
}
</style>