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