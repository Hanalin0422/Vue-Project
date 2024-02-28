<template>
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input placeholder="?" @input="searchFilter($event.target.value)"/>
        <div class="post-header" v-for="(f, i) in followers" :key="i">
            <div class="profile" :style="{backgroundImage : `url(${f.image})`}"></div>
            <span class="profile-name">{{f.name}}</span>
        </div>
    </div>
</template>

<script>
import { onMounted, ref} from 'vue';
import { mapState } from 'vuex';
import axios from 'axios';

export default {
    name : 'MyPage',
    setup(){
        let followers = ref([]);
        let followersOriginal = ref([]);

        function searchFilter(searchWord){
            // search.value에 따라서 followers 이름이 목록에 잘 남게 조작만 해주면 됨.
            let ret = followersOriginal.value.filter((object)=>{
                // search.value는 내가 찾는 검색 값
                // object.name은 현재 팔로워 배열 안에 들어있는 팔로워들의 이름
                return object.name.indexOf(searchWord) != -1
            });
            followers.value = [...ret];
        }
        

        onMounted(()=>{ 
            axios.get('/followers.json')
            .then((e)=>{
                followers.value = e.data;
                followersOriginal.value = [...e.data];
            })
            .catch((error)=>{
                console.log(error);
            })
        })

        return {followers, searchFilter};
    },
    computed:{
        ...mapState(['follower',]),
    }
}
</script>

<style>

</style>