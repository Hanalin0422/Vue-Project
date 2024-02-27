<template>
    <div @click="fire" :class="filter" class="filter-item" :style="`background-image:url(${uploadImg})`">
        <slot></slot>
        {{ filter }}
    </div> 
</template>

<script>
export default {
    name : 'FilterBox',
    props:{
        uploadImg : String,
        filter : String
    },
    methods:{
        fire(){
            this.emitter.emit('nowFilter', this.filter);
        }
    },
}
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
    background-position : center;
    cursor: pointer;
}
</style>