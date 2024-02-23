<template>
    <div class="inner">
        <div class="content" v-for="(cD, i) in contentData" :key="i">
            <router-link :to="{name : 'Detail', params:{id : i}}" id="deco"> <h4>{{ cD.title }}</h4></router-link>
            <p>{{ cD.date }}</p>
            <p>{{ cD.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name : 'List',
    props:{
        contentData : Array,
    },
}
</script>

<style>
#deco{
    text-decoration: none;
    color: #333;
    cursor: pointer;
}
#deco:hover{
    color:#90CAF9;
}
.inner{
    padding: 150px;
}
.inner .content{
    text-align: center;
    padding-top: 40px;
}
</style>