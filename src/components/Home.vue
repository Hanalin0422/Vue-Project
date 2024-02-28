<template>
    <div class="header">
        <ul class="header-button-left" @click="step--">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right" v-if="step==1" @click="step++">
            <li>Next</li>
        </ul>
        <ul class="header-button-right" v-if="step==2" @click="publish">
            <li>발행</li>
        </ul>
        <img src="../assets/logo.png" class="logo" />
    </div>
    <div class="tabs">

        <!-- 포스팅 글 확인하기 -->
        <div v-if="step == 0">
            <div v-for="(postData ,i) in postData" :key="i">
                <Post :postData="postData"/>
            </div>
            <div class="btn-a">
                <button @click="more" v-if="flag == true">더보기</button>
            </div>
            <div class="footer">
                <ul class="footer-button-plus">
                    <input @click="step++" @change="upload" type="file" id="file" class="inputfile" />
                    <label for="file" class="input-plus">+</label>
                </ul>
            </div>
        </div>
        
        <div v-if="step == 1">
            <!-- 필터선택페이지 -->
            <div :class="chooseFilter" class="upload-image" :style="{backgroundImage : `url(${uploadImg})`}"></div>
            <div class="filters">
                <FilterBox :uploadImg="uploadImg"  :filter="f" v-for="(f, i) in filterList" :key="i">
                    {{ filter }}
                </FilterBox>
            </div>
            <div class="footer">
                <ul class="footer-button-plus">
                    <input @click="step++" @change="upload" type="file" id="file" class="inputfile" />
                    <label for="file" class="input-plus">+</label>
                </ul>
            </div>
        </div>

        <div v-if="step == 2">
            <!-- 글작성페이지 -->
            <div :class="chooseFilter" class="upload-image" :style="{backgroundImage : `url(${uploadImg})`}"></div>
            <div class="write">
                <textarea @change="userPost = $event.target.value" class="write-box">write!</textarea>
            </div>

        </div>
    </div>
</template>

<script>
import Post from './Post.vue';
import axios from 'axios';
import postData from '../assets/posting';
import FilterBox from './FilterBox.vue';
import filterList from '../assets/filter';

export default {
    name : 'Home',
    data(){
        return {
            click : 0,
            postData : postData,
            step : 0,
            uploadImg : "",
            userPost : "",
            flag : true,
            filterList : filterList,
            chooseFilter : "",
            카운터 : 0,
        }
    },
    components :{
        Post,
        FilterBox,
    },
    computed:{
        now2(){
            return new Date();
        }
    },
    methods:{
        now(){
            return new Date(); //현재 시간을 알려주는 함수.
        },
        more(){
            axios.get(`https://codingapple1.github.io/vue/more${this.click}.json`)
            .then((e)=>{
                this.postData.push(e.data);
                if(this.click == 2){
                    this.flag = false;
                }
            })
            .catch(()=>{
                alert('더 이상 게시물이 없습니다!');
            })
            this.click += 1;
        },
        upload(e){
            let file = e.target.files;
            let url = URL.createObjectURL(file[0]);
            this.uploadImg = url;
        },
        publish(){
            let myPost = {
                name: "JiSeo",
                userImage: "https://picsum.photos/100?random=3",
                postImage: this.uploadImg,
                likes: 16,
                date: "May 15",
                liked: false,
                content: this.userPost,
                filter: this.chooseFilter,
            };
            this.postData.unshift(myPost);
            this.step = 0;
        }
    },
    mounted(){
        this.emitter.on('nowFilter', (e)=>{
            this.chooseFilter = e;
        })
    }
}
</script>

<style>
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
.btn-a{
    text-align: center ;
    margin: 20px;
}
.upload-image{
    display: block;
    width: 100%;
    height: 450px;
    /* background: cornflowerblue; */
    background-size : cover;
    background-image: url("../assets/image/bg0.jpg");
    }
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>