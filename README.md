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