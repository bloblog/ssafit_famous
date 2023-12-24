<h3><p align = "center">[ 스터디 관리 서비스 개발 프로젝트 ]</p></h3>
<p align = "center"><img src="https://github.com/bloblog/ssafit_famous/blob/master/src/%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80.png?raw=true"/></p>

<br>

## About Project 👩‍💻

### title
"모여봐요 유명의 숲"  
모여서 공부하는 스터디 모임의 특징을 반영함

### 개발 인원
유혜승 명소이

### 프로젝트 기간
2023/11/13 - 2023/11/23  

### Skills
Backend : Java, Spring, SpringBoot  
DB : MySQL  
Frontend : Vue3

<br>

## 프로젝트 개요 📃
- 스터디를 모집해주는 서비스는 많지만, 스터디의 처음부터 끝까지 관리해주는 서비스는 적음
- 서비스 이용자가 스터디를 생성하고, 오프라인 일정을 추가 및 공유하고, Todo를 관리할 수 있으며, 종료 후 회고를 작성할 수 있는 서비스 제작
- (미완) 카카오톡 공유 기능을 통해 스터디 관리의 접근성을 높임

<br>

## 프로젝트 디테일 🔎

- 메인 화면 및 회고 게시판
<p><img src="https://github.com/bloblog/ssafit_famous/blob/master/src/%EB%A9%94%EC%9D%B8~%ED%9A%8C%EA%B3%A0%EA%B2%8C%EC%8B%9C%ED%8C%90.gif?raw=true" width="350"/></p>

- 사용자 정보 수정
<p><img src="https://github.com/bloblog/ssafit_famous/blob/master/src/%ED%9A%8C%EC%9B%90%EC%A0%95%EB%B3%B4.gif?raw=true" width="350"/></p>

- 스터디 관리
<p><img src="https://github.com/bloblog/ssafit_famous/blob/master/src/%EC%8A%A4%ED%84%B0%EB%94%94.gif?raw=true" width="350"/></p>

<br>

## 프로젝트 설계 ⚒️
- 플로우 차트
<p><img src="https://github.com/bloblog/ssafit_famous/blob/master/src/%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%B0%A8%ED%8A%B8.png?raw=true" width="350"/></p>

- ERD
<p><img src="https://github.com/bloblog/ssafit_famous/blob/master/src/erd.png?raw=true" width="350"/></p>

- 페이지 이동 로직
<p><img src="https://github.com/bloblog/ssafit_famous/blob/master/src/%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A1%9C%EC%A7%81.png?raw=true" width="350"/></p>

<br>

## 프로젝트 개발 💻

- REST API 생성  
[Swagger 화면]
	<p><img src="https://github.com/bloblog/ssafit_famous/blob/master/src/swagger.png?raw=true" width="350"/></p>

- axios로 API와 통신  
[Vue 코드 - 사용자 로그인 기능]

	```jsx
	const signin = function () {
		axios
	    .post("http://localhost:8080/api/login", {
	    id: id.value,
	    password: pw.value,
	  })
	  .then(function (response) {
	    console.log(response);
	    // 204 : id 혹은 pw가 틀렸습니다.
	    if (response.status === 204) {
	      alert("아이디 혹은 비밀번호가 틀렸습니다.");
	      id.value = null;
	      pw.value = null;
	    }
	    // 200 : 로그인!
	    if (response.status === 200) {
	      userId.value = id.value;
	      userKey.value = response.data;
	      status.value = true;
	      alert("로그인이 성공했습니다.");
	    }
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	};
	```





