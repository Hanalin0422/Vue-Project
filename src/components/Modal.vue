<template>
    <Transition name="fade">
        <!-- 모달창 띄우기 -->
        <div class="black-bg" v-if=" modalIsOpen == true">
            <div class="white-bg">
                <div id="close" @click="$emit('closeModal')">
                    <span class="material-symbols-outlined">close</span>
                </div>
                <img :src="products[click].image" style="width: 100%;">
                <div v-if="view === true">
                    <Discount :discountNum="discountNum"/>
                </div>
                <h4>{{ products[click].title }}</h4>
                <p>{{ products[click].content }}</p>
                <input id="countData" v-model="month">
                <p>{{ month }}개월 선택함 : {{ products[click].price*month }}원</p>
            </div>
        </div>
    </Transition>
</template>

<script>
import Discount from './Discount.vue';

export default {
    name: 'Modal',
    data(){
        return {
            discountNum : 100,
            month : 1,
            view :true,
        }
    },
    watch:{
        month(userInput){
            if(userInput > 12){
                alert('최대 12개월 입니다!');
                this.month = 1;
            }
            else if(isNaN(userInput)){
                alert('숫자만 입력이 가능합니다');
                this.month = 1;
            }
            else if(userInput == 2){
                alert('2개월은 취급 안함.');
                this.month = 3;
            }
        }
    },
    components:{
        Discount,
    },
    props : {
        products : Object,
        click : Number,
        modalIsOpen : Boolean,
    },
    mounted(){
        setInterval(()=>{
            if(this.discountNum > 0){
                this.discountNum -= 10;
            }
            if(this.discountNum === 0){
                this.view = false;
            }
        }, 1000);
    },
}
</script>

<style>
.black-bg{
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
}
.white-bg{
    width: 500px;
    margin: 40px auto;
    background: white;
    border-radius: 8px;
    padding: 20px;
}
#close{
    width: fit-content;
    margin-left: 95%;
    cursor: pointer;
    transition: 0.3s;
}
#close:hover{
    transform: rotate(90deg);
}
#countData{
    width: 25px;
    height: 25px;
    font-size: 17px;
}

.fade-leave-from{
    opacity: 1;
}
.fade-leave-active{
    transition: all 0.3s;
}
.fade-leave-to{
    opacity: 0;
}
</style>