import { createStore } from "vuex"
import axios from "axios"

const store = createStore({
    state(){
        return {
            name : 'kim',
            age : 20,
            likes : 0,
            addlikes : true,
            more : {},
        }
    },
    mutations:{
        이름변경(state){
            state.name = 'park'
        },
        ageAdd(state){
            state.age++;
        },
        clickLikes(state){
            if(state.addlikes){
                state.likes++;
                state.addlikes = false;
            }else{
                state.likes--;
                state.addlikes = true;
            }
        },
        setMore(state, data){
            state.more = data;
        }
    },
    actions :{
        getData(context){
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
            .then((e)=>{
                context.commit('setMore', e.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
})
export default store;
