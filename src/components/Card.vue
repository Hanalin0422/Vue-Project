<template>
    <div>
        <img @click="$emit('openModal')" class="roomImg" :src="products.image" alt="방 이미지">
        <h4 @click="$emit('openModal')" class="content">{{ products.title }}</h4>
        <p>{{ products.price }}원</p>
    </div>
</template>

<script>
export default {
    name : 'Card',
    props : {
        products : Object,
    }

}
</script>

<style>

</style>