import { createStore } from "vuex"

const store = createStore({
    state(){
        return {
            name : 'kim',
            age : 20,
            likes : 0,
            addlikes : true,
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
        }
    }
})
export default store;