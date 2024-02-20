# 뷰동산 사이트 만들기  
### 개발 환경 셋팅하기
---
> Vue를 시작하는 방법
```
npm install -g @vue/cli  //vue 프로젝트를 한큐에 만들어주는 명령어
vue create vuedongsan
```
하면 뷰 시작할 준비 완료  
- App.vue가 index.html임.  

미리보기 띄우고 싶으면 터미널에 
```
npm run serve
```
쓰면 됨.  
동작은 index.html에 App.vue를 박아넣어 동작하는 형식이라고 보면 됨.

- vscode에서 extension은 
    - vue 3 Snippets
    - html css support
    - vetur

### 데이터 바인딩
---
1. {{데이터 바인딩}}
    - JS 데이터를 HTML에 꽂아넣는 문법
    - vue는 데이터 보관 통이 있음
    ```
    data(){
        return {
            여기에 모든 데이터 보관 하셈.
            이걸 state라고 함.
        }
    }
    
    ```
    - 데이터 바인딩 왜 씀?
        1. html에 가변적 변수 하드코딩 안하려고.
        2. (중요) Vue가 제공하는 실시간 자동 렌더링 기능을 사용하기 위해.  
        Vue는 신기해서 data를 변경하면 data와 관련된 HTML을 전부 실시간으로 재렌더링해줌.
        3. HTML 속성도 데이터바인딩 가능함.  
        (:속성='데이터이름'과 같이 씀.)
        ```
        :style="스타일"
        ```
### 리액트보다 100배 쉬운 반복문 : v-for
HTML 반복문을 써보자!  
```
    <a v-for="(작명, 두번째 작명 : 1씩 증가하는 변수임) in (반복 횟수)" :key="작명"></a>
```
와 같이 써주면 됨.
꼭 key를 써워야 함. key 안쓰면 에러남.    
key에다가는 내가 작명한 변수를 써주면 됨.
```
    <a v-for="m in menus" :key="m">{{m}}</a>
```
이런식으로 써주면 된다는 거임.  
반복문을 쓸때 키를 쓰도록 항상 강요를 당하는데 반복문 돌린 요소를 컴퓨터가 구분하기 위해 쓰는 요소임.  
보통 0, 1, 2와 같이 변하는 숫자들에 해당하는 값을 적어넣음.

### Vue 이벤트 핸들러로 click 감지하기
```
v-on:click="자바스트립트~~"
```
혹은
```
@click=""
```
써도 됨.  
click말고도 여러가지 이벤트가 들어갈 수 있는데
- @mouseover와 같이 ctrl+spacebar 같은거 누르면 버튼 태그에 대한 다양한 이벤트들을 확인할 수 있음.
- 근데 버튼은 click 이벤트를 가장 많이 사용할 거임  
이때 함수를 만들어 사용하는 공간이 따로 있음.
```
export default {
  name: 'App',
  data(){
    return{
      reportsCount : 0, // 신고수
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      costs : ['50만원', '70만원', '90만원'],
      menus : ['Home', 'Shop', 'About'],
    }
  },
  methods:{
    여기에 함수 쓰셈(){
        함수 내용들어감
    }
  },
  components: {
  }
}
```
함수 쓸때 주의점은
```
@click="increase"
```
이렇게 ()를 쓰면 안됨.

### v-if와 모달창 만들기
모든 웹 상에 나타나는 UI는 내가 미리 만들어 놓고 숨겼다가 보여주는 거임.  
그래서 일단 모달창 디자인 부터 해야함.  
#### UI 만드는 법칙 : 3단계
1. HTML CSS로 디자인 미리 해두기
2. UI의 현재 상태를 데이터 선언해서 일단 저장하기
3. 데이터에 따라 UI가 어떻게 보일지 작성하기  


<strong>v-if</strong>
---
- 태그 안에 v-if="조건식"을 써서 if문을 쓸 수 있음.
```
<div class="black-bg" v-if=" modalIsOpen == true">
```
+ 추가 팁  
이미지를 넣을 때, 절대 경로로 넣고 싶으면
```
<img @click="modalIsOpen = true" class="roomImg" :src="require(`@/assets/room${i}.jpg`)" alt="방 이미지">
```
이런 식으로 넣으면 됨  

#### v-if 문법 더 알아야할 내용
```
    <div v-if="1 == 1">
        조건문이 참이면 여기가 실행되요.
    </div>
    <div v-else-if="1==3">
        위에께 참이 아니면 여기가 실행되요.
    </div>
    <div v-else>
        위에께 참이 아니면 여기가 실행되요.
    </div>

### Export, Import
- 지금 js파일에서 다른 js파일로 데이터를 보내고 싶다면  
```
    let apple = 10;

    export default apple;
```
과 같이 쓰고, 사용하고 싶은 파일로 가서
```
    import Apple form '가져오고 싶은 파일의 경로'
```
를 써주면 됨. 경로는 무조건 ./ 부터 시작한다고 생각하면 됨.  

- 만약 여러가지 변수/함수를 한번에 export하고 싶다면
```
export {apple, apple2}
```
와 같이 쓰면 됨.