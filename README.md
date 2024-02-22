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
```

### Export, Import
---
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


### Component 만드는 법
---

html이 너무 길고 복잡하여 한글자로 이쁘게 축약하면 어떨까?  
-> component로 가능  
- 컴포넌트를 만들고 싶으면 파일을 일단 하나 만들어야함.
1. .vue 로 하여 파일 하나 만든다. (ctrl+ b / command + b)
2. 모든 vue파일은 형식이 똑같아서 그 형식에 맞춰 코드를 작성함.
    - 꺽쇠 하나 열고 엔터키 치면 자동 완성됨.
    - 아니면 vue 파일 만드는 템플릿이
    ```
    <template>
  
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```
    이니 이렇게 치면 됨.
3. 이제 여기에 축약하고 싶은 html을 template태그 안에 넣으면 됨.
4. 그리고 export 안에 name을 써주기.
```
<script>
export default {
    name : 'Discount',

}
</script>
```
5. 축약한 컴포넌트를 가져다 쓰고 싶으면 
    1. vue파일 import 해오기
    ```
    import Discount from './components/Discount.vue';
    ```
    2. 등록하기
    ```
      components: {
        Discount, //Discount: Discount 해도 됨.
      }
    ```
    3. 쓰셈.
    ```
    <Discount></Discount>
    ```
와 같이 html태그를 가져다 쓰면 됨.  
근데 단계별 중 하나라도 삑나면 동작 안되고 오류남.  
- 컴포넌트를 만들때 아무대나 많이 만들면 데이터 관리가 빡세기 때문에 꼭 필요한 부분에만 만들기.  
<br/><br/>

<strong style="color : red">업데이트 사항</strong>  
- 이제 컴포넌트.vue 이름은 귀찮게 2단어 이상으로 작명해야 함. 안 그러면 에러로 잡음.  
- DiscountBanner.vue 이런식으로 2단어로 작명 잘해야 함.
- 싫으면 pakage.json 파일 열어서 "rules"라는 항목에
```
    "rules" : {
        "vue/multi-word-component-names" : "off"
    }
```
한줄 추가하고 미리보기 껐다가 다시 띄우면 됨. 
<br/><br/> 

### 부모 데이터 자식에게 보내기 : Props
---
- 보통 App.vue에 데이터 다 밀어넣고 필요하면 가져다 쓰는 형태로 개발함.
- 데이터 가져다 쓰고 싶으면 props로 전송해서 써야함.
- 3단계 있음.
    1. props로 자식에게 데이터 보내고
        > 자식: 데이터="데이터" / v-vind와 같은 문법임
        ```
        <Modal :products="products"/>
        ```
    2. 등록하고
        > 자식은 props로 받은거 등록하는데
        ```
        props:{데이터 이름 : 자료형 이름}
        ```
        이렇게 쓰면 됨. 자료형은 틀려도 에러가 나진 않으니 틀려도 됨.  
    3. 쓰셈.
        > 주의 사항 : props는 read-only이기 때문에 받아온거 수정하면 큰일남. 절대 수정 금지
        ```
        @click="modalIsOpen = false"
        ```
        와 같이 직접적으로 등호를 이용해서 변수를 수정하면 안된다는 거임.  
        그래서 잘 생각하고 component를 만들어야 한다는 거.
- 부모 컴포넌트가 가끔 가져다 써야 하는 데이터를 자식 컴포넌트에 만들지 말기.
- 항상 최상위에 있는 컴포넌트에 데이터를 저장하기.
- 데이터를 밑으로 전송하는 건 쉬워도 위로 전송하는 건 어려움.  
> props 보낼 때 다양한 자료형도 입력이 가능함.  
    ▶ 데이터이름 = "문자자료"  ex ) 작명 = "안녕하세요"  
    ▶ :데이터이름 = "숫자자료"  ex ) :작명 = "1234"  
    ▶ :데이터이름 = "[1, 2, 3]"  
    ▶ :데이터이름 = "{ age : 20 }"    
콜론을 안 붙이면 문자로 전달됨.

- 또한, 데이터 object의 키들을 각각 따로따로 전송하고 싶은 경우,
```
ex ) data(){
    return (
        object = {name : 'kim', age : 20}  
    )
}
```
보내고 싶은 태그에 가서
```
<Discount :이름="object.name" :나이="object.age"/>
```
이렇게 쓸 수 있을 텐데 Object는 한번에 축양해서 보낼 수 있는 방법이 있음.
(Object만 됨)
```
<Discount v-bind="object"/>
```
이렇게 하면 됨.
<br/><br/>

### 자식이 부모데이터 바꾸고 싶으면 custom event로 메세지만 주면됨!
---
- 일단 제일 쉬운 건 Click 이벤트를 쓰는 건데 이렇게 하면 이벤트 더블링이 생기기 때문에 잘 동작은 함.
- 근데 내가 원하는 부위만 동작을 시키게 하고 싶다면,  
    <strong>Custom Event</strong>를 줘서 이걸로 부모데이터를 수정할 거임!  
    (실은 데이터 수정해달라는 메세지임.)
- 메세지를 보내고 싶다면 
```
@click = "$emit(마음대로 작명openModal, 내가 보내고 싶은 데이터:안보내고 싶으면 이건 안적어도 됨)"
```
이렇게 보내고
- 메세지를 수신하여 실행 시키고 싶다면
```
<Card @openModal="자바스크립트 아무거나 다 적을 수 있음. 내가 원하는 데이터를 수정하는 자바스크립트를 적으면 됨"
```
즉,  
> 부모에게 메세지 보낼 땐, $emit('작명', 데이터)  
> 부모가 메세지 수신할 땐 @작명한거=""  
> 자식이 보낸 데이터는 $event에 담겨있음.  
> 데이터 같은거 함수 안에서 사용하고 싶으면 전부 무조건 this임.
    ```
    methods :{
        함수(){
            this.~~~
        }
    }
    ```

### 사용자의 input을 받는 법 (v-model)
---
```
<input @input="">
<input @change="">
```
- @input은 사용자가 입력할 때마다 안에있는 자바스크립트 실행해주셈
- @change는 입력하고 커서 다른데 찍으면 안에있는 자바스크립트 실행해주셈

$event는 js의 이벤트 리스너인 HTML요소.addEventListener('click', function(e){})과 같음.  
$event는 이벤트 리스너의 e라는 파라미터랑 같은 역할을 함.  
그래서 $event.target.value를 통해 입력값을 변수로 저장해 사용하면 사용자의 input을 사용할 수 있음.
```
<input id="countData" @input="month = $event.target.value">
```
또 다른 한가지는

- v-model이란 문법을 사용하기
    - 모든 input류의 태그에 다 붙일 수 있음.  
        input타입들, select, textarea 등등
    - 완전 축약 버전임.
    ```
    <input id="countData" v-model="month">
    ```
    이렇게 쓰면 사용자의 입력을 그냥 변수에 박아줌.    
- 그리고 이때 초기값이 굉장히 중요함. 사용자의 입력에 따라 문자를 바꾸고 싶다면  
    숫자면 초기값을 숫자로, 문자를 받는다면 문자로 초기값을 설정해주는 것이 좋음.
    ```
        data(){
        return {
            month : 1, <-여기가 숫자면 사용자에게 숫자로밖에 임력을 못받는 거임.
        }
    },
    ```
    <strong>근데 초기값을 숫자로 저장해도 사용자가 input에 입력한 것은 전부 문자자료형으로 받음.</strong>  
    그래서 내가 무조건 숫자만 받고 싶다 하면 
    ```
    v-model.number="month"
    ```
    와 같이 해주면 됨. 하지만 사용자가 문자를 입력하는 것 자체는 막을 수 없음.

<br/><br/>

### Watcher로 데이터 감시하는 법
---
- input에 제한을 둬보자!  
=> 데이터를 감시하는 watcher를 써서 경고문을 띄울 수 있다!!!  
데이터를 감시하려면 
```
watch:{
    감시할 데이터의 이름 (사용자가 입력한 값이 나오는 변경후 데이터, 변경 후의 데이터임){

    }
}
```
date라는 변수가 있어서 이걸 감시하고 싶으면 watch안에 date(){}를 선언해주면 됨.  
감시자는 date라는 변수가 변할 때마다 그걸 감지해서 함수를 실행해줌.  

하지만 Vue전용인 form validation 라이브러리를 쓰면 watcher를 안써도 됨.
<br/><br/>

### Vue에서 매끈한 UI 애니메이션 주는 법 2가지
---
애니메이션 만들때는 그냥 CSS만 잘하면 되긴 함.  
하지만 단계를 주자면  
1. 시작전 class명을 일단 정해서 그에 해당하는 CSS 정하기
2. 애니메이션 끝난 후의 class명을 정하고 그에 해당하는 css 정하기
3. 그리고 원할 때 1번 클래스 명 뒤에 2번 클래스 명을 부착  

```
<div class="start" :class="{end : modalIsOpen}">
```
이제 이런 식으로 집어넣게 될건데 이뜻은  
end라는 클래스명을 집어넣어줄 건데 오른쪽에 있는 자료가 true일때만 집어넣어준다는 뜻임.  
그래서 class명을 조건부로 넣으려면
```
:class = "{클래스명 : 조건}"
```
이렇게 사용하면 됨.  

그런데!!!!  
Vue에서는 Transition태그를 이용하면 애니메이션을 쉽게 줄 수 있음.  
이거 쓰면 그냥 대가리가 빡통이여도 쓸 수 있음. ㅎ  

1. 내가 애니메이션 주길 원하는 태그가 있다면 그걸 일단 Transition태그로 감싸기
2. 그다음
    ```
    <Transition name="fade"></Transition>
    ```
    를 통해 name을 작명하고
3. style태그로 이동해서 3개의 클래스 명을 작성
    ```
    .작명-enter-from{}
    .작명-enter-active{}
    .작명-enter-to{}
    ```
    꼭 이렇게 세개의 클래스가 필요함.  
    여기서 필요 없는걸 빼도 되기는 하는데 일단 이렇게 3개 만들고 시작하셈.  
    ```
    .fade-enter-from{여기에는 시작시 스타일}
    .fade-enter-active{애니메이션 어떻게 줄지, Transition 적어주면 됨}
    .fade-enter-to{여기에는 끝날시 스타일}
    ```
> 퇴장 애니메이션은
```
.작명-leave-from{시작스타일}
.작명-leave-active{transition}
.작명-leave-to{끝날때 스타일}
```
<br/><br/>

### 상품정렬기능과 데이터 원본 보존 : SORT
---
쌩자바스크립트라면  
1. 데이터들을 일단 정렬하고
2. 그걸 HTML에 반영했을 거임.  
하지만 Vue에서는  
원룸들 데이터만 정렬하면 됨.  
왜냐하면 데이터바인딩만 해두면 HTML에 실시간 렌더링해주기 때문.  

또한 자바스크립트만의 고유특징이라하면  
- sort()는 원본 자체를 변형
- map() filter() 등은 원본을 그대로 보존
한다는 특성이 있음.  
그런데 요즘은 원본 데이터를 그대로 보존하는 게 관습임.  

그래서 변수를 놓을 때 원본 데이터와 내가 변형할 데이터 따로 선언해두면 될듯?
```
    원룸들오리지날 : data,
    원룸들변형 : data
```
이렇게.  
근데 원룸들변형.sort()해보면 알거임.  
저렇게 하면 따로따로 사본을 만드는 것이 아니라 같은 데이터를 다른 변수에 넣었다는 것을.  
(자바스크립트는 주소값을 가리키기 떄문.)  
따라서 아래와 같이 각각 별개의 사본 데이터를 만들어 저장해줘야함.
```
    원룸들오리지날 : [...data],
    원룸들변형 : data
```
근데 이렇게 해도 몇번 왔다갔다하면 다시 동작을 안함.
```
    this.products = this.productsOrign;
```
<strong style="color:red">이것 때문인데 자바스크립트에서 등호로 array를 집어넣으면 왼쪽 오른쪽 값을 공유해주세요~ 임!!!!</strong>
<br/><br/>

### Vue의 라이프사이클
---
내가 만든 컴포넌트를 등장하자마자 2초 후에 자동으로 사라지게 만들거임.  
이게 컴포넌트의 lifecycle이라고함.  
vue.js 홈페이지 들어가면 Lifecycle Hooks라고 있음.  

- 라이프사이클이 뭔데?  
    모든 컴포넌트들은 웹페이지에 표시되기까지 일련의 step을 거침. 그 step을 라이프사이클이라고함.  
    create 스텝과 mount 스텝이란 2개의 단계로 컴포넌트가 생성이 되는데  
    1. create 단계 : 데이터만 존재하는 단계  
    2. mount 단계 : template 태그 사이에 있던걸 실제 HTML로 바꿔줌
    3. 컴포넌트 생성 : 그 다음 index.html에 장착함
    4. update 단계 : data가 변하면 html이 실시간 재렌더링 되는데 그게 실은 컴포넌트가 재렌더링되고 있던 거임.
    5. unmont 단계 : 컴포넌트가 삭제되는 것.  

- 이렇게 라이프사이클을 배우는 이유는 중간 중간 우리가 HOOK을 걸 수 있기 때문임.  
    Lifecycle Hook을 걸어서 중간에 원하는 코드를 실행하는 거임.  
    ex ) 컴포넌트가 업데이트 되기 전에 뭔가를 실행해주세요~~~

라이프사이클 훅을 쓰면 컴포넌트에 딴지를 걸 수 있는데  
어떻게 거냐면 
```
    mounted(){ <- 이 함수가 아래와 같이 다른 함수들로 교체될 수 있는 거임.
        
    }
```
이렇게 만들어서 이 안에 쓰면됨.  10개 가까이 있는 듯?  
beforeCreate(), created(), beforeMount(), mounted(), beforeUpdate(), updated(), beforeUnmount(), unmounted() 등등  

- 여기서 주의할점.  
    내가 함수 안에서 this.~~으로 어떤 변수를 쓰고자 하면 전부 에로우 function으로 써주는게 좋음. 그래야 바깥에 있는 변수를 잘 가져다 쓸 수 있게됨.
    ```
    mounted(){
        // 컴포넌트가 html에 다 잘 장착이 되고 나서.
        setTimeout(()=>{
            this.showDiscount = false;
        }, 2000);
    },
    ```
    만약
    ```
    mounted(){
        setTimeout(function(){
            this.showDiscount = false;
        }, 2000);
    },
    ```
    이렇게 쓰면 오류남.  

- 서버에서 데이터 가져올 때도 create(), mounted() 두 개중 하나 골라서 ajax 요청함.