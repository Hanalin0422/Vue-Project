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
    app.config.globalProperties.axios = axios;
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