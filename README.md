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
~~
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