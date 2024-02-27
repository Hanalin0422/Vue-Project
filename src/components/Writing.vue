<template>
    <div class="writing">
        <textarea name="textarea" id="write" cols="70" rows="10" placeholder="여기에 일기를 적으면 됩니다만?" v-model="message"> 
        </textarea>
        <div>
            <button @click="goBack" style="margin-right: 20px;" >뒤로 가기</button>
            <button @click="savePost">저장</button>
        </div>
        <div class="save">
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name : 'Writing',
    data(){
        return {
            message : "",
        }
    },
    methods : {
        goBack(){
            this.$router.go(-1);
            this.$emit('stepMinus');
        },
        savePost(){
            console.log(this.message);
            this.$emit('stepMinus');
            axios.post('/write/post',{
                day : Date,
                posting : this.message
            })
            .then(() =>{
                this.$router.push({
                    name : 'Post'
                });
            })
            .catch(()=>{
                alert('저장 버튼이 안되지롱!');
            })
        }
    }
}
</script>

<style>
.writing .write{
    font-size: 15px;
}
</style>