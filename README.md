# Blog 만들기
### 부트 스트랩을 이용해보자!
---
- 부트스트랩을 쓰면 귀찮은 html, css는 금방 완성시킬 수 있음.
```
npm i bootstrap@5.3.3
```
- 5.0이상 버전은 인터넷익스플로어에서 아예 안되니 버전 체크 잘해서 하기.
- 4.6은 인터넷 익스플로어 11 이상에서만 동작함.
1. 버전은 암거나 설치하고 getting start해서 css는 헤더에, js 파일은 body태그 끝나는 바로 직전에 복붙하면 바로 사용 가능.
2. npm으로 설치하는 방법
```
npm install bootstrap@next @popperjs/core
```
- 부트스트랩 5.X버전 설치 명령어
```
npm install bootstrap jquery popper.js
```
- 부트스트랩 4.X 버전 설치 명령어
<br/>

- 이렇게 설치를 진행했으면 main.js에
```
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
```
두 줄 추가하기.  
<br/><br/>

### vue-router 설치와 기본 라우팅
---
- 라우터 라이브러리를 설치 해보자!
```
npm install vue-router@4
```
설치를 한 후 라우터 셋팅까지 해야함.  
1. main.js에서
    ```
    createApp(App).use(라우터만든거).mount('#app')
    ```
    이라 수정하기.
2. 라우터에 들어가는 내용이 매우 길기 때문에 router.js란 파일을 하나 다른 곳에 만들기.
    ```
    import { createWebHistory, createRouter } from "vue-router";

    const routes = [
    {
        path: "/경로",
        component: import해온 컴포넌트,
    }
    ];

    const router = createRouter({
    history: createWebHistory(),
    routes,
    });

    export default router;
    ```
    그다음 위에코드 복붙하고 createRouter() 안에다가 vue-router 4 사용법대로 설정을 막 집어넣으면 끝.  
3. main.js에도 라우터를 쓴다고 말해주기. 위의 코드에서는 const router라고 변수 안에 생성한 라우터를 만들었으므로
    ```
    import router from './router'
    createApp(App).use(router).mount('#app')
    ```
라고 적어주면 됨.
4. 그런다음 마지막으로 그 컴포넌트를 어디에 보여줄지를 작성해줘야함.
    ```
    <router-view></router-view>
    ```

- props로 다른 페이지에 전송했다면
```
<router-view :contentData="contentData"></router-view>
```
이렇게 적으면 됨.  
<br/><br/>
### 파라미터를 만들어서 수백개의 페이지 만들기
---
- 상품을 볼때 그 상품에 대한 상세 내용을 볼 수 있는 페이지가 따로 필요함.
- 그렇다면 일일이 그 페이지를 다 만드냐? -> 당연히 그럴리가 없음.
- 즉, 파라미터를 이용해서 보여줄 수 있도록 라우터를 이용하는 거임.
~~~
{
        path: "/detail/:id",
        component : Detail,
        meta:{ transition : 'slide-right'},
}
~~~
여기서 콜론은 뒤에 아무 문자가 들어오면~~ 이라는 말임.  
저렇게 붙여넣게 되면 /detail 의 하나의 컴포넌트를 보여주게 되는 거임.  

그러면 내가 이제 저 파라미터를 어떻게 읽느냐가 문제인데  
Vue에서는 
~~~
$route
~~~
이렇게 쓰면 라우터에 관련된 모든 정보들을 다 읽을 수 있음.  
그래서
~~~
$route.params
~~~
를하면 파라미터 자리에 기입된거 다 알려줌.  
- 파라미터 자리에 정규식도 들어갈 수 있음.
    ~~~
    path : "/datail/:id(\\d+)",
    ~~~
    이런식으로 숫자만 들어오게 만들어 줄 수도 있음.
    ~~~
    path: "/:anything(.*)",
    ~~~
    이렇게 쓰면 / 뒤에 나오는 모든 문자 숫자들을 의미함.
- 근데 하다보니 해당 상품을 누르며 그 상품의 페이지로 이동하게 하고 싶은데 그걸 파라미터로 어떻게 넘겨주는지 모르겠었음. 그래서 열심히 검색을 해보니  
~~~
<router-link :to="{name : 'Detail', params:{id : i}}">
~~~
이런 식으로 내가 어느 페이지에 넘겨줄 것인지 이름ㅇ르 쓰고 해당 파라미터를 넘기면 되는 형태였음.  
<br/><br/>
### Nested routes & push 함수
---
내가 /detail/0/commnet 혹은 /detail/0/author 와 같이 슬래시 밑에 또 다른 페이지를 보여주고 싶다면  
Nested router를 쓰면 됨.  
그니까 세부적인 페이지 여러개를 더 만들고 싶다면.  
모달창으로 해결할 수 있긴 하지만 다른 URL로 나눠보고 싶다면 nested routes를 사용할 수도 있음.  
```
{
        path: "/detail/:id",
        component : Detail,
        name : 'Detail',
        meta:{ transition : 'fade'},
        children:[
            {
                path: "author",
                component :Author,
            },
            {
                path: "comment",
                component : Comment,
            }
        ]
    },
```
이런 식으로 하면 /detail/2/author 로하면 그 해당 페이지로 이동할 수 있는데 이때 이 페이지를 어디서 보여줄지도 내가 설정을 해줘야 함.  
(detail 페이지 어디서 보여줄지를.)
- router-view 태그를 가져다 쓰면 됨.
- 라우터 에러는 콘솔창에서만 뜸.
- 슬래시는 홈부터라는 뜻이기 때문에 children을 쓸때는 항상 슬래시를 제거하고 적어야 함.  

##### 글제목을 누르면 detail 페이지 이동.
- 페이지 이동의 경우 @onclick을 이용하거나 router-link 태그를 이용하면 다른 페이지로 이동시킬 수 있음.  
- 하지만 보다 다이나믹하게 페이지를 이동시키고 싶다면 @click="$router.push('/datail/0')"라고 쓰면 페이지를 이동시킬 수 있음.
```
    <h5 @click="$router.push('/datail/0')"></h5>
```
이게 프로그래밍스럽게 페이지 이동을 만드는 방법임.  
특시 이거 쓸때 
    - route(현재 url에 관련된 모든 것들을 알려주는 변수)
    - router(페이지 이동 관련 기능이 많이 들어가 있음.)
        - router.go(-1) : 뒤로 가기  
두개 헷갈리지 말기.  

#### named views
- 우리가 컴포넌트들을 보여줄때 한 페이지에 여러가지 컴포넌트를 한번에 보여주는 view임.
- /list를 방문시 /author, /commnt를 다 같이 보여줄 수 있는 방법임.
```
    path : "/list",
    component : {
        List : List,
        Comment : Commnet,
    }
```
이런 식으로 작성해주면 됨.

- 자세한 튜토리얼 문서는 https://router.vuejs.org/guide/essentials/named-views  
- Redirection도 가능함. => 내가 어떤 페이지에 접속했을 때 다른 페이지로 안내하고 싶다면
```
    const routes = [{path : '/home', redirect : {name : 'homepage'}}]
```
<br/><br/>
### 라우터 나머지 기능들 (hash mode, guards)
1. Hash mode vs HTML5 mode  
내가 맨 처음 셋팅해놨던 코드는
```
import { createWebHistory, createRouter } from "vue-router";

const router = [];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
```
이거인데 여기서 history:createWebHistory() 이게 문제가 되는 경우 다르게 설정해놓을 수가 있음.  
```
import { createWebHistory, createRouter } from "vue-router";

const router = [];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
```
이렇게 설정을 해놓으면 URL에 전부 #이 붙은 채로 시작함.  
예를 들자면 naver.com/#/detail 이런 식.

- HTML5 mode를 선택한 경우
    - 누군가 /detail이라 URL에 입력하면 이건 vue router로 /detail을 보여주세요~가 아니라 서버에 /detail 페이지를 요청해주세요~ 라는 뜻임.
    - 그래서 vue가 라우팅을 해주기 전에 서버가 /detail페이지를 보여주려고 할 수 있음.
    - 근데 서버에 아무 기능을 개발 안해놨으면 404 페이지가 뜨거나 그럴 수 있음.
    - 그래서 이걸 방지하려면 서버에다가 "어떤 사람이 /어쩌구로 접속하면 그냥 Vue에게 라우팅 맡겨주세요~"라고 미리 기능개발이 필요함.
- Hash mode를 선택한 경우
    - Hash mode의 장점은 일단 URL에 #이 붙은 채로 시작한다는 거임.
    - 왜 #을 붙이냐면 URL에서 # 뒤에 있는 내용들은 절대 서버에 전달되지 않아서 그런것 ㅇㅇ.
    - 그래서 서버가 라우팅을 채가는 일을 방지할 수 있고 vue router에게 온전히 라우팅을 맡길 수 있음.
    - 그래서 서버가 없으면 # 붙는 hash 라우터로 사이트를 만드는 것도 좋은 선택임.

<br/>
2. Navigation guards 

- 특정 URL로 접속할 때 뭔가 코드를 실행하고 싶은 경우가 있음.  
- 예를 들자면 마이페이지를 만들었는데 이걸 로그인한 사람만 보여주고 싶은 경우,  

    - 라우팅해주기 전에 "니 로그인했냐" 이런 코드를 실행해야함.  
    - 그럴때 navigation guard를 쓰면됨.  
    - 이건 네비게이션해주기 전에 실행할 수 있는 코드, hook 같은 거라 보면 됨.

- 예시
```
const routes = [
    {
        path : "hello",
        component : HelloWorld,
        beforeEnter : ()=>{
            if(로그인했냐 == false){
                return '/login'
            }
        }
    }
]
```
- 이런 식인건데 서버와 로그인 기능이 실제 있는 서비스라면 로그인한 사용자는 대부분 쿠키나 로컬스토릴지에 로그인 정보가 저장되어 있음. 그게 있는지 검사하면 되는 거임.  
- 다만 자바스크립트 변수나 데이터들은 콘솔창 코드입력으로 언제나 위조가 가능하기 때문에 서버도 당연히 마이페이지 내용을 보내주기 전에 로그인했는지 검증을 해야함.
```
const routes = [
    {
        path : "/hello",
        component : HelloWorld,
        beforeEnter : (to, from)=>{
            return to.fullpath
        }
    }
]
```
- 파라미터는 두세개 작명이 가능한데
    - 첫번째 파라미터는 목적지 페이지,
    - 두번째 파라미터는 출발 페이지
- 그리고 이것들은 $route라는 변수랑 똑같이 이용이 가능함.
- to.fullPath하면 전체 경로를 알려주고
- to.params.id하면 id 파라미터를 알려주고 그럼.

참고로 return false는 라우팅 중단, return이 없으면 그냥 원래의 route인 /hello로 잘 이동시켜줌.
<br/>

3. 여러개의 route에 같은 navigation guard를 추가하고 싶으면
router라는 변수에 .beforeEach() 이런거 가져다 쓰면됨.
    ```
    const router = createRouter({어쩌구});
    router.beforeEach((to, from) => {
        // 페이지 변경 전에 실행할 코드
    })
    ```
- 라우팅 전에 뭔가 실행하고 싶으면 beforeEach() 혹은 beforeResolve()
- 라우팅 하고 나서 뭔가 실행하고 싶으면 afterEach() 
<br/>
4. Vue 컴포넌트 안에서도 navigation guard 쓸 수 있음.  
- vue 파일 안에서도 페이지 이동시 뭔가 코드를 실행 할 수 있음.
- created() mounted() 이런거랑 비슷함.
```
beforeRouteEnter(){}
beforeRouteUpdate(){}
```
라는 것들을 lifecycle hook쓰는 위치에 쓰면 됨.  
파라미터는 두개 입력가능한데 각각 목적지인 to, 출발지인 from을 의미함.  
특정 페이지로 접속했을 때 ajax 요청하고 그럴일일 있으면 저기다 쓰면 됨.  

더 자세한 튜토리얼은 vue 공식 문서 : https://next.router.vuejs.org/

### 만든 Vue 사이트 build & Github Pages로 배포하려면
---
1. npm run build를 통해 build를 한다.
2. vue 프로젝트 폴더 내에 dist라는 폴더 하나가 생성된다.
    - 그 안에는 엄청나게 압축된작고 소중한 index.html, css, js 파일이 모두 담겨 있음.
3. 이걸 전부 서버에 올리면 됨.

#### 업데이트 사항이 생기면 배포 어캐함?
-> build 또 하고 그 파일 그대로 다시 업로드.

#### build 할 때 압축 시키지 말고 남기고 싶은 파일은?
-> 내가 코드 짤때 ./경로로 첨부한 이미지, js 파일들은 전부 압축되고 이름이 변함.  
-> 이름이 변하지 않게 하고 싶으면 public 폴더 안에 넣고 build.  
-> 그러면 build하고 나서도 그대로 루트 경로에 파일이 남아있음.  
(개발 시 그런 파일들을 이용하고 싶으면 public 폴더에 보관하고 ./이게 아닌 / 경로로 import 해오면 됨.)  
