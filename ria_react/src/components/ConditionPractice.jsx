import React from "react";

const handleScript = {
  /*
  ! 조건문 ~  😁
  코드의 실행 흐름을 제어, 사용자 입력을 검증, 접근 권한을 제어 등의 로직에 사용
  ? if문
  * 입력 값 검증 문제!
  * age 변수에 사용자로부터 입력 받은 나이를 할당
  * 조건문을 사용해서 0 미만, 200 초과일 경우 알림창 "Invalid age."
  */
  문제1: () => {
    let age = prompt("나이를 입력해 주세용 😄");
    if (age < 0 || age > 200) {
      alert("Invalid age !! wrong ~! 🤨");
    }
  },
  /*
  ? else문
  * 사용자의 나이 입력받아 age2 변수에 할당
  * 나이가 18세 이상일 경우 알림창에 You are an adult.
  * 아닐경우 You are a minor.
  */
  문제2: () => {
    let age2 = prompt("나이를 입력해 주세용 😄");
    if (age2 >= 18) {
      alert("You are an adult.");
    } else {
      alert("You are a minor.");
    }
  },

  /*
  ! 로그인 상태에 따른 메시지 출력
  사용자의 로그인 상태에 따라 다른 메시지를  출력하는 기능
  */
  문제3: () => {
    let isLoggedIn = false;
    if (isLoggedIn) {
      console.log("로그인 되어있습니다.");
    } else {
      console.log("로그인 중이 아닙니다.");
    }
  },

  /*
  ! 점수에 따른 등급 부여
  학생의 점수에 따라 등급 부여하는 예제
  학생의 점수를 입력받아 score 변수에할당
  100점초과 0점 미만일 경우 Invalid Score 출력
  90점 이상 GradeA 출력
  80점 이상 GradeB 출력
  70점 이상 GradeC 출력
  60점 이상 GradeD 출력
  그 외 GradeF 출력
  
  */
  문제4: () => {
    let score = prompt("점수를 입력하세요");
    if (score > 100 || score < 0) {
      console.log("invalid");
    } else if (score >= 90) {
      console.log("GradeA");
    } else if (score >= 80) {
      console.log("GradeB");
    } else if (score >= 70) {
      console.log("GradeC");
    } else if (score >= 60) {
      console.log("GradeD");
    } else {
      console.log("GradeF");
    }
  },

  /*
  ? switch문
  * 사용자의 직업을 입력받아 job 이라는 변수에 할당합니다~
  * job(doctor, teacher, engineer) 각 case와 동일할 경우 
  * alert("you heal people.");
  * alert("you teach student.");
  * alert("you design and build things.");
  * alert("I don't know about that job");
  */
  문제5: () => {
    let job = prompt("직업을 입력해주세요");
    switch (job) {
      case "doctor":
        alert("you heal people.");
        break;
      case "teacher":
        alert("you teach student.");
        break;
      case "engineer":
        alert("you design and build things.");
        break;
      default:
        alert("I don't know about that job");
    }
  },

  /*
  ? 삼항 연산자
  * 조건에 따른 변수 값 할당
  * 변수 isRainingCondition에 true 값을 할당
  * 해당 값이 참일 경우 "Stay home and read a book" 문자열 값을 activity 변수에 할당
  * 해당 값이 거짓일 경우 "Go for a walk" 문자열 값을 activity 변수에 할당
  */

  문제6: () => {
    let isRainingCondition = true;
    let activity = isRainingCondition
      ? "Stay home and read a book"
      : "Go for a walk";
    console.log(activity);
  },
};
const ConditionPractice = () => {
  return (
    <div>
      <h4>ConditionPractice</h4>
      <button onClick={handleScript.문제6}>실행</button>
    </div>
  );
};

export default ConditionPractice;
