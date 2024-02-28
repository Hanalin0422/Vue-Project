# vuestargram
---
### 이미지를 집어넣어 보자!
![image](https://github.com/Hanalin0422/Rodanthe-BE/assets/78638427/ea47f6ea-b524-4487-90ee-528f637e4db8)
- 이런식으로 이미지 집어넣으려면 img 태그가 아니라 css의 background-image : url()로 넣어야 잘보임.  
- 근데 이렇게 하면 :style="" 뭐 이런식으로 넣을 텐데 저 안에 들어가는게 많으면 Object 형태로 때려 박음.
    ```
    :style="{ color : 'red'}"
    ```
    이렇게.
- 여기에서 변수를 넣고 싶으면
```
<div class="post-body" :style="{backgroundImage : `url(${postData.postImage})`}"></div>
```
이런 식으로 백틱과 달러로 표시하면 됨.  
<br/><br/>

### 서버로 ajax 요청하는 더보기 버튼 만들기 : ajax with axios
---
- 실제 서버가 있으면 서버에서 데이터를 가져올 수 있음.
- 서버에서 더보기 게시물을 가져오면 그 데이터를 HTML로 front단에서 보여줄 거임.
- 그때 서버에 데이터를 요청해주는게 ajax임.  
- GET요청은 URL 잘 적어서 유저가 서버에 요청하는 것. (데이터 서버에서 가져올때)
- POST요청 : 서버로 데이터 보낼 때
- Ajax는 get or post 요청을 하면 브라우저가 새로고침이 되면서 그때 서버에서 데이터를 가져와주는 비동기 데이터 교환 방식임.  

#### Ajax 요청을 하려면
1. axios 라이브러리를 쓰든가
2. 기본 fetch 함수를 쓰든가.

1. axios 라이브러리 먼저 써보자
```
npm install axios
```
    - 그 다음 내가 ajax 요청을 하고 싶은 파일에
    ```
    import axios from 'axios'
    ```
    를 해서 가져다 쓰면 됨.
    - 그 다음 가져다 쓰고 싶으면
    ```
        methods:{
        more(){
            axios.get('https://codingapple1.github.io/vue/more0.json')
            .then((e)=>{
                요청 성공시 실행할 코드
                여기서 e는 내가 받은 데이터 자체임.
            })
        }
    }
    ```
    이런식으로 작성해서 쓰면 됨.
    
    ```
    axios.post('URL', {name : 'kim'}).then().catch()
    ```
    이건 post 요청으로 then안에는 요청 성공시, catch는 요청 실패시 실행할 코드임.
    <br/><br/>

### Tab UI 만들기
---
```
  <div>내용0</div>
  <div>내용1</div>
  <div>내용2</div>
  <button>버튼0</button>
  <button>버튼1</button>
  <button>버튼2</button>
  ```
1. UI 현재 상태를 데이터로 만들기  
2. 상태에 따라 HTML이 어떻게 보일지  
이 두 단계를 통해 TAB을 만들 수 있음.  
- 라우터 없이도 tab을 이용해 라우터와 같이 다른 두개의 페이지를 탭을 통해 한번에 보여줄 수 있게 만들 수 있음.
- 즉, 간단한 UI들은 탭으로 만들어도 상관 없음.
<br/><br/>

### 서버없이 업로드한 이미지 다루기 (잡기술) : file upload
---
이미지 업로드한 걸 HTML에 보여주려면?  
- 업로드한걸 서버로 보내고 그 URL을 유저에게 다시 보내서 띄우는 형식으로 썼는데 옛날 방식임.  
- 요즘은 브라우저에서 이미지 다루는 함수를 씀.  
=>
    ```
    1. FileReader()  
        -> 파일을 글자로 변환해줌.
    2. URL.createObjectURL()  
        -> 이미지의 가상URL을 생성해줌.
    ```
    이 두 개중 하나를 골라서 사용하면 됨.  
    근데 2번째가 조금 더 가벼움.  
내가 업로드한 파일 코드를 실행시키고 싶다면
```
<input @change="upload" type="file" id="file" class="inputfile" />
```
- 이렇게 쓰기
- 여기서 change는 해당 변수가 변경되면 이벤트가 발생하는 이벤트 핸들러임.
- 그리고 methods로 가서
```
export default {
    name : 'Footer',
    methods:{
      upload(e){
        let file = e.target.files;
        console.log(file);
      }
    }
}
```
- 여기서 e.target.files는 내가 업로드한 파일들이 다 담겨져 있다고 보면 됨.
- 파일은 여러개를 업로드 할수 있음.
- 이걸 이용하면 indexing을 통해 내가 원하는 파일에 접근할 수 있음.  

> 여기서 잠깐, BLOB이란?
>> 0과 1로 이루어진 데이터를 binary데이터라고 하는데 우리가 이미지와 같은 파일들을 다룰 때 BLOB(Binary Large Object)라는 object에 이 데이터들을 담아서 다룸.  

- 내가 여러 개의 인풋을 받고 싶다면 multiple이란 옵션을 적어주면 됨.
```
<input @change="upload" multiple type="file" id="file" class="inputfile" />
```
- 또한, 이미지만 업로드 받고 싶다면
```
accept="image/*"
```
를 input 태그 안에 추가해주면 되는데 이건 근본적인 해결책이 못됨.  
엄격하게 이미지만 업로드 하고 싶다면 
```
file[0].type
```
이런식으로 타입을 확인해서 걸러줘야 함.  
<br/><br/>

### 글 발행 기능
---
```
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
```
이거는 axios로 보여주는 것.  
이걸 발행하고 싶으면 객체화 해서 변수에다가 밀어넣으면 됨.
```
    publish(){
    let myPost = {
        name: "JiSeo",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.uploadImg,
        likes: 16,
        date: "May 15",
        liked: false,
        content: this.userPost,
        filter: "perpetua"
    };
    this.postData.unshift(myPost);
``` 
서버에서 받은 내용들로 채워넣으면 됨.  
<br/><br/>

### CSS로 필터 기능 만들기
---
```
<div class="filters">
    <FilterBox :uploadImg="uploadImg"  v-for="(f, i) in filterList" :key="i"></FilterBox>
</div>
```
인스타그램 필터를 똑같이 구현할 수 있는 css 라이브러리가 하나 있음.  
=> CSSgram  
이거 설치해서 적용하면 인스타그램 필터기능 완성임.  
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cssgram/0.1.10/cssgram.min.css">
```
이거 가져와서 index.html에 추가해주면 됨.  

그 다음 내가 원하는 곳에 클래스 명만
```
<img class="인스타필터명"
```
만 넣으면 효과가 저절로 걸림.  
그러니까 클래스 명에 그냥 인스타그램 필터명을 넣기만 하면 되는 거임.
```
<div class="_1977 filter-item" ~~
<div :class="filter" class="filter-item" ~~~
```
이런 식으로.  
필터이름은 filter-item 앞에다가 집어넣어주면 됨.  

아니면 문자랑 같이 더하고 싶으면
```
<div class="filter + ' filter-item'" ~~~
```
이런식으로 하나의 클래스에 문자열을 더해도 됨.  
<br/> <br/>

### slot 문법
---
- props 말고도 부모 컴포넌트에서 자식 컴포넌트로 데이터를 보내는 문법이 하나있음.
- props 보다 훨씬 쉬운 slot이란 문법이 있음.
- 조금더 직관적으로 데이터를 전송할 수 있음.  
- step2가 존재  
     1. 자식은 원하는 데이터를 가져다 쓸 곳에 구멍을 뚫어놓기
        ```
        <slot></slot>
        ```
     2. 컴포넌트 태그 사이에 데이터 집어 넣기
        ```
        <FilterBox>
            보내고 싶은 데이터~~
        </FilterBox>
        ```
- 이 문법은 태그 안에 데이터바인딩할 때만 사용이 가능함.
- 속성 같은 것들은 조작을 할 수가 없는 거임.
- 나머지는 props 써야함.  
- slot을 여러개 쓰고 싶다면  
    ```
    <slot name ="a"></slot>
    <slot name ="b"></slot>
    ```
    이런 식으로 쓰면 됨.  
    그러면 부모는 템플렛 태그를 써서 데이터를 보내줘야함.
    ```
    <template v-slot:a>보낼거</template>
    <template v-slot:b>보낼거</template>
    ```
    이런식으로 쓰면 됨.  
- 근데 걍 props가 나은듯.  
- slot의 장점은 간단하게 전송할 수 있는것, HTML도 같이 전송할 수 있다는 것, 2가지임.
```
<template v-slot:a><span>데이터1</span></template>
```
<br/><br/>

### 멀리 있는 컴포넌트간 데이터전송할 땐 mitt
---
- 상위, 상위 컴포넌트에게 데이터를 전달하고 싶다면 mitt라는 라이브러리를 사용해서 단번에 이동시킬 수 있음.
- 그건 어떤 component간에 가능. (위, 아래, 옆도 가능!!)
```
npm install mitt
```
- 설치를 한다음 setting을 해야함.  
- main.js에 가서
    ```
    import mitt from 'mitt'

    let emitter = mitt();
    let app = createApp(App);
    app.config.globalProperties.emitter = emitter;
    ```
- 여기서   
app.config.globalProperties.emitter
는   
모든 컴포넌트들이 그냥 다 가져다 가져다 쓸 수 있는 변수 보관함임.  
- 이렇게 추가하면
    ```
    app.use(router).mount('#app')
    ```
    createApp(App)을 저렇게 바꿔줘도 됨.
- 그러면 자주 쓰는 라이브러리들이 있다 그러면 여기서 변수 명으로 등록해주면 됨. 그러면 모든 vue파일에서 import axios 해올 필요없이 this.axios로 사용 가능.
    ```
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3306';
    app.config.globalProperties.$axios = axios;
    ```
    이런 식으로.
- 어쨌든 저렇게 main.js를 셋팅하고 나면 emitter라는 변수를 전역으로 쓸 수 있게 되면서 mitt 라이브러리가 동작하게 됨.  

#### mitt로 데이터 전송하는 법
1. 원하는 데이터를 발사하고
    ```
    this.emitter.emit('작명, '데이터')
    ```
2. 발사한 데이터를 수신하면 됨.
    - 수신하는 쪽에서 mounted() 함수 안에서 받는게 관습
    ```
    this.emitter.on()
    ```
    으로 수신하면 됨.
    ```
        mounted(){
        this.emitter.on('누가 이런 이벤트를 발사하면', (이벤트 안에 들어있던 데이터 e)=>{
            console.log(e)
        })
    }
    ```
- 작명 유니크하게 잘 해주기.
- 근데 관리하기 힘들어져서 관리하기 힘들어짐  
=> 그때의 대체품 <strong>Vuex</strong>

<br/><br/>

### Vuex 라이브러리
---
- 간단한 프로젝트를 해도 데이터를 엄청 많이 주고 받음.
- 하위컴포넌트 전송은 props
- 상위컴포넌트 전송은 custom event or mitt
- 이런 거 쓰다보면 버그 찾기도 굉장히 어려움. 맨날 확인해야함.
- 그럴 때 쓰는 라이브러리가 Vuex임.

- Vuex : 모든 컴포넌트들이 데이터를 공유할 수 있도록 해주는 하나의 파일임.  
    - js파일에 데이터들을 몰아넣고
    - 모든 컴포넌트들이 직접 꺼내쓸 수 있게 함.
    - 근데 이게 꺼내쓰는게 코드가 좀 길음.
    - 간단한 변수는 props를 쓰는게 더 짧음.

```
npm install vuex
```
<br/>

> Vuex 4 셋팅
1. src 바로 밑 같은 곳에 store.js 파일 만드셈.
    ```
    import { createStore } from "vuex"

    const store = createStore({
        state(){
            return {
                데이터 보관하고 싶으면 여기에 하셈.
                여기 저장되는 데이터는 state임.
            }
        }
    })
    export default store;
    ```
2. 위의 코드를 그대로 복붙, 템플릿임.
3. main.js로 가서 Vuex 쓴다고 말해줘야함.
    ```
    import store from './store'
    app.use(store)

    // 이렇게 쓰면 안됨!!!
    app.use(router, store).mount('#app')
    ```
4. 이렇게 하면 모든 컴포넌트들에서 직접 꺼내 쓸 수 있음.
5. store.js에 있는 state를 꺼내쓰는 방법은
    ```
    <h4>안녕 {{ $store.state.name }}</h4>
    ```
    이렇게 쓰면 됨.
6. 변경도 심각하게 쉬움.
    ```
    <button @click="$store.state.name = '박'">버튼</button>
    ```
    근데 store.js에 있는 state 변경은 이렇게 하면 안됨!!!!!!
7. Vuex 국룰로 컴포넌트 안에서 직접 state 수정 금지임. (추적이 어렵기 때문)
8. 그래서 수정하고 싶으면 
    - 미리 store.js에 수정방법을 정의해두고
    - 그 방법을 컴포넌트에서 소환해서 수정해야함.  

#### State 수정하는 방법
---
```
    const store = createStore({
        state(){
            return {
                name : 'kim',
                age : 20,
            }
        }
    })
```
위와 같이 store.js가 state로 되어있다면,  
- 내가 수정하고자 하는 부분에서 이벤트를 발생시켜 store.js에게 바꿔달라고 부탁.  
- 그러면 store.js는 부탁받은대로 state를 변경해줌.  

이런 방식으로 데이터 수정이 이루어짐.

1. 그러면 데이터 수정 방법을 store.js에 정의해보자!
    ```
    const store = createStore({
        state(){
            return {
                name : 'kim',
                age : 20,
            }
        },
        mutations:{
            이름변경(state){
                state.name = 'park'
            }
        }
    })
    ```

    - 여기서 함수에 들어가는 state는 함수에서 this와 같은 거임.

2. 수정하고 싶을 때 store.js에게 부탁을 해보자!
    - 실행시키고 싶은 곳에 내가 적은 함수를 적어주면 됨.
        ```
        <button @click="$store.commit('이름변경')">버튼</button>
        ```
        그러면 진짜 이 함수를 실행 시켜줌.

이렇게 하면 뭔가 삑나면 store.js의 mutations로 가서 그것만 살피면 되는 거임.

예시)  
```
<div>
    <h4>{{ $store.state.age }}</h4>
    <button @click="$store.commit('ageAdd')">버튼</button>
</div>
```
```
ageAdd(state){
    state.age++;
}
```
이때 버튼을 누를 때마다 10씩 증가하고 싶다면,
```
@click="$store.commit('ageAdd', 10)
```
이렇게 전달해주면 됨.  
그러면 store.js에서는  
```
ageAdd(state, data){
    state.age += data;
}
```
요렇게 하면 10씩 더할 수 있는 거임.
<br/><br/>

### Vuex3 : actions 항목을 알아보자
---
```
const store = createStore({
    ~~~~~
    actions :{
        
    }
})
```
- actions:{}란?
    - ajax하는 곳
    - 또는 오래걸리는 작업들
    - 서버에서 데이터를 받아와서 무언가를 보여주고 싶을 때, 혹은 state로 저장하고 싶을때 ajax 요청을 여기에 다 적으면 됨.

[더보기 게시물 ajax 요청을 하려면? ]
- mutations안에다가 ajax 요청을 하면 안됨
    - 이거는 순차적으로 state를 변경하고 싶을때 실행에 오래 걸리는 함수가 있다면 순차적으로 실행을 할 수가 없기 때문임.

아무튼 @click과 같은 이벤트를 실행시켰을때, 내가 actions에 선언한 함수가 동작하고 싶게 만들고 싶다면 
```
@click="$store.dispatch('getData')"
```
- commit()은 mutations에게 부탁
- dispatch()는 actions에게 부탁  

#### 이때, actions 안에서 state를 변경하고 싶다면?
=> state변경은 무조건 mutations가야함!!  
```
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
```
이런식으로 commit의 도움으로 actions내에서 mutations를 이용해 state를 수정 및 저장할 수 있음.
```
mutations:{
    ~~~~~

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
```
따라서,  
- ajax는 actins에서
- state 변경은 항상 mutations 안에서  
해결하기!!
<br/><br/>

### Vuex 4 : mapState를 사용하면 편리할 수도 있음
---
vue에서 함수를 만들 때 두가지를 선택할 수 있음.  
- methods : {}
- computed : {}

```
    methods:{
        now(){
            return new Date(); //현재 시간을 알려주는 함수.
```
와
```
    computed:{
        now2(){
            return new Date();
        }
    },
```
를 살펴보면 코드가 같기 때문에 똑같은 기능을 함.  
- 그러나 methods함수는 사용할 때마다 실행되는 반면에  
computed함수는 처음 vue 파일이 로드되고나서 한번 쓱 읽고 나서 그 뒤에 함수가 실행되면 그 값을 퉤하고 뱉음.  
- computed()안에 있는 건 데이터가 변경될때만 실행을 하고 평소에는 다시는 실행을 안함. -> 컴퓨팅 파워를 절약할 수 있는 함수라고 보면 됨.  

- computed() : 계산결과저장용 함수들임. 사용해도 실행되지 않으며 처음 실행하고 값을 간직함. 데이터가 변경되면 다시 실행해주긴 함.
- methods() : 사용할 때마다 실행됨.
```
<p>{{ now() }} {{ 카운터 }}</p>
<button @click="카운터++">버튼</button>
```
이렇게 methods()를 사용하면 계속해서 함수가 실행되는 반면,  
computed() 함수는 값을 저장하는 함수이기 때문에 소괄호를 쓰는게 아니라 함수 이름만 써야함.  
```
<p>{{ now2 }} {{ 카운터 }}</p>
<button @click="카운터++">버튼</button>
```
state 데이터랑 똑같이 취급해주면 됨.  
이렇게 하면 처음에 로딩될때 데이터가 계산되어서 계속 카운터를 눌러도 값이 변하지 않는다는 것을 알 수 있음.  
그래서 연산결과를 computed를 통해 계산을 시켜놓으면 성능 향상을 시킬 수 있음.  

#### mapState
---
- mapState는 state 꺼내쓰는 코드를 짧게 쓸 수 있도록 도와주는 함수라고 생각하면 됨.
- 일반적으로 computed() 안에 적어서 사용함.
- 그냥 state 하나 꺼내쓸 때도 computed 안에 사용하면 편할 수도.
```
computed:{
    name(){
        return this.$store.state.name
    },
    age(){
        return this.$store.state.age
    }
}
```
이렇게 하면 그냥 name이라고만 쓰면 바로 가져다 쓸 수 있다는 장점이 있음.  

- computed함수는 특별하기 때문에 꼭 return이 있어야함.  
- 근데 return 에 축약하기 귀찮으면 개별적으로 함수를 만드는 게 아니라 
    ```
    computed:{
        ...mapState([]),
    }
    ```
    이렇게 한번에 state자료를 밀어넣어서 사용하는 방법도 있음.  
    이때, 
    ```
    import {mapState} from 'vuex'
    ```
    로 import를 해야 가져다 쓸 수 있음.
- mapState함수가 뭐하는 함수냐면 내가 가져오고 싶은 state를 다 적을 수 있는 함수라고 생각하면 됨.
    ```
    ...mapState(['name', 'age', 'likes']),
    ```
    이런 식으로 computed()안에 만들어 넣으면  
    vue 파일 안에서
    ```
    {{name}}
    ```
    요렇게 가져다 쓸 수 있음.
- Object 자료형도 가져다 쓸 수 있고 데이터 등록도 가능함.  
    - state에 내가 이름을 짓고 싶다면 쓰면 됨.
    ```
    ...mapState({ 내이름 : 'name', })
    ```
    - name을 '내이름'이라 가져다 쓸 수 있는 거임.
    ```
    {{ 내이름 }}
    ```
- vuex mutations를 vue 파일에서 가져다 쓰고 싶으면 $store.commit을 써야한다고 했는데 이것도 코드가 기니까 쉽게 가져다 쓰고 싶으면 methods()안에다가도 mapMutations()라는 함수를 적어 사용할 수 있음.
    ```
    import {mapMutations} from 'vuex'

    methods : {
        ...mapMutations(['함수명']),
        ...mapMutations(['setMore', 'likes', 'increase']),
    }
    ```
이렇게 하면 commit을 사용하지 않아도
```
    <button @click="increse(10)">버튼</button>
```
이런 식으로 쓸수 있다는 거임.  
그러면 훨씬 store.js에 있는걸 가져다 쓸 수 있음.  

이것 말고도 mapActions()도 있음.
```
    methods:{
        ...mapActions([
            'increment',
        ])
    }
```
이렇게 하면 actions() 안의 함수도 쉽게 가져다 쓸 수 있음.  
+  
+  
추가,  
내가 store.js에서 mapState()를 쓰려고 했는데 안되서 왜 안되지? 이러고 있었다.  
알고보니 내가 그 state를 사용하고 싶은 page 내에서 쓰면 되는 거였다.  
```
<script>
import { mapState } from 'vuex';

export default {
    name : 'MyPage',
    computed:{
        ...mapState(['follower',]),
    }
}
</script>
```


<br/><br/>

### PWA : Progressive Web App & 셋팅
---
우리 사이트를 앱으로 발행하는 가장 빠른 방법 - PWA  

지금 만든거 모바일 앱이랑 비슷한데 그대로 앱처럼 쓸 수 없을까?  
해서 PWA 등장한 거임.  

#### PWA 되려면 필요한 파일 2개.
1. manifest.json
2. service-worker.js  

이 두 파일이 있으면 웹에서 자동으로 앱이라 인식해서 앱을 다운받으라는 알림창을 뜨게 만들어줌.  

Vue 공식 라이브러리 중에 PWA를 지원하는 라이브러리가 있음.
```
vue add pwa
```
npm 명령어 기니까 걍 이거 쓰셈.  

아무튼 설치가 끝나면 이상한 파일 하나가 생겼을 거임.  
registerServiceWorker.js  
이 파일인데 이 파일은 우리가 프로젝트를 build 할때  
manifest.json, service-worker.js를 생성해줌.  

npm run build라고 하면 dist라는 우리가 배포할 수 있는 html, css, js 완성본이 다 담김.  
그때, 자동으로 만들어진  
- manifest.json : 앱 정보를 담는 파일임. 여러가지 설정들이 가능함.  
- service-worker.js   
: 이해할 필요는 없음. 그냥 설정만 건들여주면 됨.  
모바일앱은 인터넷 없이도 이용이 가능함.  
이걸 그대로 따라하기 위해서 나온게 이 파일이라고 보면 됨.  
모든 html, css, js를 하드에 저장해놓는 역할을 한다 보면 됨.
    - service-worker.js&precache-manifest를 까보면 어떤 파일들을 저장시킬 건지에 대한 내용들을 파악할 수 있음.
- 개발자 도구 - Application으로 들어가면 이게 앱인지 웹인지 확인가능.
- https://로 시작하는 주소로 내가 페이지를 잘 배포했다 하면 앱 설치하겠냐는 물음이 뜸.

#### play store에 진짜로 등록가능한 앱을 만들고 싶다면?
=> apk 파일은 vue 공식 홈페이지 가면 apk 파일로 변환시켜주는 development들이 있으니 가져다 쓰면 됨.

- PWA 설정을 바꾸려면 (ex, index.html은 하드에 저장하지 말아라) 가장 상단의 파일에 미리 vue.config.js를 만들어서
    ```
    module.exports = {
        pwa : {
            name : '님 앱이름',
            themeColor : '#4DBA87',
            msTileColor : '#000000',

            workbosOptions : {
                exclude: [/\.map$/, /manifest\.json$/, 'index.html'] <- 여기에 하드에서 제외하고 싶은 파일을 적어주면 됨.
            }
        }
    }
    ```
    이거 쓰면 됨.  
    이걸 쓰면 manifest랑 serviceworker를 셋팅해주는 부분이라고 보면됨.
- 추가 설정은 workbox 라이브러리 혹은 vue pwa 검색해서 쓰셈.
- github pages에 발행해도 pwa처럼 사용 가능함.

<br/><br/>

### 버그찾고 싶으면 Vue devtools 설치하기
---
- 간혹 코드짜다보면 props를 분명 전해줬는데 에러나고 멈추고 하는 경우가 있음.
- 그 경우 터미널이나 크롬 개발자도구 console 탭으로 들어가면 대부분의 에러는 해결가능한데 조용하게 에러가 나는 경우도 있음.  
    ex) 라우터 이런것들은 뭔가 틀려도 에러로 알려주지 않음.
- 그래서 크롬 확장프로그램 중에 Vue-devtools 라고 설치하면 좀 더 자세한 버그를 파악할 수 있음.
    ```
    https://chrome.google.com/webstore/category/extentions
    ```
    여기 들어가서 vue.js devtools라고 찾아서 설치하면 됨.
    - 설치는 나중에 출시한 확장프로그램으로 설치하기

![image](https://github.com/Hanalin0422/Rodanthe-BE/assets/78638427/159003f0-9717-49ba-8bb8-4af75257917a)
- 이렇게 설치해서 띄우면 이렇게 위쪽은 무슨 컴포넌트가 있는지 DOM트리처럼 구조화해서 보여줌.
- 그 밑은 컴포넌트를 선택했을 때 거기 안에 들어있는 것들을 쭉 보여줌.
- 그래서 state나 props가 잘 변하고 있는지 확인하고 싶으면 여기서 확인하면 됨.
<br/><br/>

![aaa](https://github.com/Hanalin0422/Vue-Project/assets/78638427/f440ce41-0e65-40c4-b205-4c5e1491d865)
- 이거 진짜 신기함.
- 과녁버튼 누르고 브라우저 내에 원하는 요소를 찍으면 그 컴포넌트를 검사해줌.
- <>버튼 누르면 그 컴포넌트에 해당하는 요소를 element 탭에서 보여줌.
- 네모난 버튼을 누르면 VScode에서 해당 컴포넌트를 열어줌.

그 밖에도 프로젝트에 라우터를 설치했으면 route, parameter 이런 것도 다 확인할 수 있음.  
state 누르면 브라우저에서도 수정 해볼 수 있음.  
Timeline 메뉴에선 지금까지 어떤 이벤트가 동작했는지 체크도 가능함.  
<br/><br/>

### Composition API 사용법 (팔로워 페이지 만들기)
---
프로젝트가 커지면 데이터가 몇 백개 되고 데이터마다 그걸 조작하는 함수도 몇 백개가 되어가면 코드가 매우 복잡해지게 됨.  
- 관련된 코드를 찢어놓지 않고 개발하는 방법이 Composition API라고 함.
- 각각 항목들을 신설해 거기에 기능 개발 하는 거는 Options API라고 함. (지금까지 공부했던 문법들)

Composition API를 쓰면 관련있는 코드를 한곳에 모아서 쓸 수 있음. (필수는 아님)  
컴포넌트마다 Composition VS Options 선택 가능함.  

(추가 다른 이야기 : json 데이터를 axios로 가져오면 json -> object로 자동 변환 해줌.)  

- Composition API를 써서 개발하려면 setup() 안에다 코드를 짜면됨.
```
import {ref} from 'vue' <- import 해주기!!!!

export default {
    name : 'MyPage',
    setup(){
        created 라이플 사이클과 굉장히 유사함.  
        컴포넌트를 만들기 전에 이것부터 실행해 주세요~~~
    },
}
```
- 다 setup() 이 안에 만들면 됨.
- 이 안에 데이터 생성, 조작, methods, hook, computed, watch 다 가능함.
- 거의 모든 기능 개발을 setup 한 곳에서 가능하게 함.

```
setup(){
    setup()안에서 데이터 생성하는 법 : ref(데이터)
    ex)  
    let followers = ref([]);
    return {followers};
},
```
- 여기서 ref는 레퍼런스를 만든다는 거임.
- 굳이 ref()에 담는 이유는 vue에서 실시간 재렌더링 되는게 reference data type이기 때문인데 그렇기 때문에 감싸는 거임.  
    - 그래야 실시간으로 반영됨.
    - 그냥 let a = 0; 
    - 이런식으로 쓰면 실시간 반영이 안됨. ☆

> JSON 파일을 이용하고 싶으면 public 폴더 안에 만들어서 사용하면 됨.  
> 어차피 ajax 요청하면 JSON이 key-value 데이터로 변하니까.
> src 파일안에서 가져와 사용하려면 '/' 이거 앞에 '.'만 안찍으면 됨.

#### Composition API 안에서 ajax 요쳥으로 setup() 안의 데이터 채워넣기
```
    setup(){
        let followers = ref([]);
        
        axios.get('/follower.json')
        .then((e)=>{
            followers.value = e.data;
        })
        .catch((error)=>{
            console.log(error);
        })

        return {followers};
    },
```
- setup(){} 내에 작성하는 건 created() hook 안에 작성하는 거랑 비슷해서 함수를 쭉 한번 실행하고 지나가는데 데이터를 조작하고 싶으면 (데이터를 수정하고 싶으면)  
    - ★ 데이터.value 라고 써야 수정이 가능함.
    - 이 이유는 ref()로 감싸면 이게 일종의 object가 되어서 그걸 꺼내서 조작해야 하기 때문임.

- 근데 나는 Ajax 요청을 조금더 정확히 mounted(){장착되고 나서 실행할 코드} 안에서 사용하고 싶다면  
    ```
    setup(){
        onMounted(()=>{
            실행할 코드
        })
    }
    ```
    이렇게 Composition API에서 Lifecycle Hook을 써야함.
    ```
    import { onMounted } from 'vue'
    ```
    를 import 해줘야함.
- 다른 Lifecycle Hook 쓰려면
    ```
    On라이프사이클함수명(()=>{실행할 코드})
    ```
    이런 식으로 작성해서 사용하면 됨.

> 기존 store.js에서는 Options API라고 해서 data, methods, computed에 각각 로직이 흩어져 있지만 Composition API는 로직을 하나로 모아서 사용할 수 있음.  
    >> Options API 예시
    ```
    <template>
	<button @click="plus()">{{ cnt }}</button>
    </template>

    <script>

    export default {
        data () {
            return {
                cnt: 0,
            }
        },
        methods: {
            plus () {
                ++this.cnt;
            },
        },
        computed: {
            double () {
                return this.cnt * 2;
            }
        }
    }
    </script>
    ```

    >> Composition API 예시
    ```
    <template>
        <button @click="plus()">숫자: {{ cnt }}</button>
    </template>

    <script setup>
    import { ref, onMounted } from 'vue'

    const cnt = ref(0)
    const plus = () => { cnt.value++ }
    const double = computed(() => cnt.value * 2);
    ```

<strong>복잡한 프로젝트나 모듈화가 필요한 프로젝트에서 Composition API 방식을 고려하면 좋다!</strong>

<br/><br/>

### Composition API 내에서 여러가지 함수들 사용법
---
★ CSS 파일은 빌드를 하게 되면 하나로 합쳐지게 되어 다른 파일에 적은 CSS 파일의 클래스명과 같으면 서로의 스타일을 공유하게 됨.  
- 근데 그게 싫으면 
    ```
    <style scoped>
    </style>
    ```
    라고 style 태그 뒤에 scoped를 붙여주면 됨.
- 그러면 해당 vue 페이지 내에서만 css가 적용됨.
- 전염이 안되니까 이름 신경 안쓰고 막 짜도 됨 >ㅡ<  

아무튼  
데이터 만들때 사용하는 함수가 3개 있음.
- **ref()**  
    : 관습적으로 array, object 말고 나머지 자료형을 집어넣음.
- **reactive()**  
    : 이 함수는 ref()랑 똑같은 기능을 함. 데이터 만든다.!  
    근데 차이점은 보통 array, object 집어넣음.
```
let followers = ref([]);
let test = reactive({name : 'kim'});
```

- **toRefs()**  
    : Compositioin API에서 props를 사용하게 해주는 함수임.
    ```
    export default {
    name : 'MyPage',
    props:{
        one : Number,
    },
    ```
    - 원래 props 가져다 쓰려면 이렇게 쓰는데
    - setup() 함수 내에 저 one이라는 props를 가져다 쓰고 싶으면
    ```
     setup(props, context){
        let {one, two, } = toRefs(props);
     }
     ```
     - 첫번째 파라미터는 항상 props.
     - 두번째 파라미터는 항상 이상한거 담겨있음.  
     attrs, slots, emit 이런거.
    - 아무튼 이런식으로 쓰면 실시간 자동으로 반영이되게 props를 사용할 수 있음.
    - props가 보통 여러개니까 toRefs()라고 쓰고 내가 사용하고 싶은 props의 이름을 왼쪽에 객체 형태로 쭉 작명해서 사용하면 됨.

> Composition API에서 props 사용법
```
let { 어쩌구 } = toRefs(props)
```
가져다 쓸땐  **어쩌구.value**
- 저기서 중괄호 써서 변수를 선언하는 걸 js 문법으로 Destructing 문법이라고함.

어쨌든 props를 저렇게 하면 바로바로 반영해서 쓸 수 있음.

#### Composition API에서 watch 사용법
---
```
watch(감시할거, () => {실행할 코드})
```
- 첫번째 파라미터(여기서는 감시할거 자리)는 내가 watch하고 싶은 파라미터 명칭

#### Composition API에서 computed 사용법
---

```
let 결과 = computed(()=> {return 연산결과})
데이터 가져다 쓸때는 항상 **결과.value**
```
- computed() 함수도 똑같음.
- 괄호 안에는 항상 함수가 하나 들어감.
- 이거 전부 setup(){} 안에 쓰고 있는 거임!!!!!

#### Composition API에서 vuex store 사용법
---
```
import {useStore} from 'vuex'

let store = useStore();
console.log(store.state.name)
console.log(store.commit())
```
- 이런 식으로 쓰면 됨.


#### Composition API에서 mapState 사용법
---
- 못함.
- 단점임.
- Vuex 5 버전 이상에서는 되지 않을까?


#### Composition API에서 methods 사용법
---
```
setup(){
    function 함수(){

    }
    return {함수}
}
```
이렇게 쓰면 됨.
- 쓸때 함수() 이렇게 써도 되고 아니면 함수 그냥 이렇게 소괄호 빼도 됨.