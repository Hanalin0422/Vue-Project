<template>
    <HeaderTwo />

    <div class="inner">
        <div class="content" v-for="(cD, i) in contentData" :key="i">
            <h4>{{ cD.title }}</h4>
            <p>{{ cD.date }}</p>
            <p>{{ cD.content }}</p>
        </div>
    </div>
</template>

<script>
import HeaderTwo from './Header2.vue';

export default {
    name : 'List',
    props:{
        contentData : Array,
    },
    components:{
        HeaderTwo,
    }
}
</script>

<style>
.inner{
    padding: 150px;
}
.inner .content{
    text-align: center;
}
</style>