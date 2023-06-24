# frontend

## Korea IT Academy

2023-05-27 ~

<div align="center">
  <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=Java&logoColor=white" />
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" /><br><br>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=riadev23&layout=compact"><br><br>
  <img src="https://github-readme-stats.vercel.app/api?username=riadev23&show_icons=true">
</div>

2023-06-24

#자바스크립트 개요 설명 ###개발환경 설정

1. 텍스트에디터 설치, 구글 크롬 개발자도구 사용
2. 자바스크립트 실행(스크립트 적용)
3. <script> 태그로 감싼 Javascript 코드는 브라우저가 로드될 때 자동 실행
   웹 문서 어디든 위치 가능, 위치 그 자리에서 바로 실행
   하나의 웹 문서에 여러개 사용 가능
   </body> 바디영역 끝에 작성하는게 일반적

### 식별자 규칙

1. 첫 글자는 반드시 영문자 언더스코어(\_), 달러 기호($)로 시작
   이후에는 숫자로 작성 가능 (숫자로 시작 불가)
   
2. 두 단어 이상이 모여 하나의 식별자를 만들 경우 공백 문자 포함 불가
   (단어와 단어 사이를 -하이픈 또는 \_언더바로 연결해서 사용)

3. 특수문자는 언더바와 달러 기호만 사용가능

4. 예약어(키워드) 사용불가 : 자바스크립트에서 미리 정해놓은 단어 (var, for, true, function 등 )

의미 있는 단어를 사용

let const 사용 var 사용금지

1. 표현식 & 문장
   표현식 : 자바스크립트 값(데이터)를 만들어내는 간단한 코드

   연산식, 실제 값, 함수

inch \* 2.54 // 연산식

"안녕하세요" // 문자식(문자열)

5 // 숫자(실제 값)

// 문장(문) : 명령, 문장의 끝에는 세미콜론(;)을 붙여서 구분

// 하나 이상의 표현식이 모이면 문장

let cm = inch \* 2.54;

let hello = "안녕하세요";

let number = 5;

2. 키워드 & 식별자

   키워드(예약어) : 특별한 의미가 있는 단어

   식별자 : 개발자가 자바스크립트의 변수, 함수, 속성 

   등을 구별하려고 이름 붙인 특정 단어를 의미

3. 출력

   자바스크립트의 기본 입출력 방법

   alert : 알림창 ( 시스템 알림창 )

   confirm: 확인창 확인=true 취소=false

   prompt: prompt('메시지') 또는 prompt('메시지', '기본값')

    간단한 메시지 입력을 받을 수 있음.

   document.write('');

   웹문서에 내용 작성

   내용에 HTML 태그 사용가능

   결과 값이 저장된 변수 삽입 가능