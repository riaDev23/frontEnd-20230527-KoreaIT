import React from "react";

const handleScript = {
  /*
    ! 자바스크립트의 반복문
    * 반복문(Loops)은 동일한 코드 블럭을 여러번실행할 수 있도록 해주는 프로그래밍의 기본 구조
    * 조건이 만족될 때까지 반복하여 실행할 수 있는 명령의 집합
    * 반복문의 종류 : for, while, do-while, for...in, for...of
    ! 자바스크립트의 배열
    * 여러개의 변수를 한번에 선언해서 다룰 수 있는 자료형
    * 요소: 배열 내부에 있는 값
    * 여러 개의 항목들이 순차적(순서가 있음.)으로 저장된 데이터 구조
    * 숫자형 인덱스를 사용해서 각 항목(요소)에 접근할 수 있다.
  */
  개요: () => {
    /*
    ? 배열의 기본형
    let fruits = ['apple', 'banana', 'strawberry'];
    let numbers = [1, 2, 3, 4, 5];
    console.log(fruits[0]) // ? apple 출력
    * 배열의 각 요소에 접근: 0부터 시작하는 인덱스(index)를 사용해 접근
    * 인덱스 번호는 0부터 시작
    */
    let fruits = ["apple", "banana", "strawberry"];
    console.log(fruits[0]); // apple
    console.log(fruits[1]); // banana
    console.log(fruits[2]); // strawberry

    /*
    ? 배열의 길이 확인
    * length 속성을 사용해서 배열의 길이 확인 가능
    * 배열에 들어있는 항목의 수
    */
    console.log(fruits.length); // 3 출력
  },

  for: () => {
    /*
    ! for 반복문
    * 코드를 정해진 횟수만큼 반복 실행할 때 사용
    * for (초기화; 조건; 증감) {
        실행할 코드
    * }
    * 초기화 : 반복문이 시작될 때 단 한번만 실행, 카운터 변수를 초기화 하는데 사용
    * 조건 : 각 반복 사이클의 시작에서 평가되는 표현식
    *        이 조건이 true 라면 코드 블럭이 실행되고, false라면 반복문 종료
    * 증감 : 각 반복 사이클이 끝날 때 마다 실행, 카운터 변수를 증가 또는 감소 시키는데 사용
    */
    for (let i = 0; i < 10; i++) {
      console.log("for 반복 : ", i);
    }
  },

  while: () => {
    /*
    ! while 반복문
    * 조건이 참인 동안 코드 블럭 계속 실행
    ? 기본형
    while (조건) {
      실행할 코드
    }
    */
    // ? 0 ~ 4 까지 실행 해볼겡
    let i = 0;
    while (i < 5) {
      console.log("while 반복 : ", i);
      i++;
    }
  },

  doWhile: () => {
    /*
    ! do-while 반복문
    * 조건을 확인하기 전에 먼저 코드 실행
    * 코드가 최소 한번은 실행 됨 ~!
    ? 기본형
    do {
      실행할 코드
    } while(조건);
    */
    let i = 0;
    do {
      console.log("do-while 반복 : ", i);
      i++;
    } while (i < 5);
  },

  // ? 1에서 20까지의 숫자 중에서 3의 배수만 출력하는 반복문
  예제1: () => {
    for (let i = 0; i < 20; i++) {
      (i + 1) % 3 === 0 ? console.log(i + 1) : console.log();
    }
  },

  /*
  ! for...in 반복문
  * 객체의 속성을 반복하거나 배열의 인덱스를 반복
  * 배열을 반복하는 경우에는 for...of, forEach()를 사용하는것이 일반적
  ? 기본형
  for (변수 in 객체) {
    실행할 코드
  }
  
  ! for...of 반복문
  * iterable(반복 가능한) 객체:배열, 문자열, Map, Set의 요소들을 반복하는데 사용
  ? 기본형
  for (변수 of iterable) {
    실행할 코드
  }

  ! forEach 반복문
  * 배열의 각 요소에 대해 함수를 실행 / 간단하고 직관적
  * for, while 반복문 보다 코드가 간결하고 가독성이 좋음
  ? 기본형

  */

  /*
  ! 반복문 예제 실습 ~ !
  ? for 문
  */

  // * 배열의 모든 요소 출력하기
  예제2: () => {
    let fruits = ["apple", "banana", "cherry"];
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
  },

  // * 1부터 10까지의 합 계산하기
  예제3: () => {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += i + 1;
    }
    console.log(sum);
  },

  // * while로 배열의 모든 요소 출력하기
  예제4: () => {
    let fruits = ["apple", "banana", "cherry"];
    let i = 0;
    while (i < fruits.length) {
      console.log(fruits[i]);
      i++;
    }
  },
  // * 숫자를 2로 계속 나누기
  예제5: () => {
    let num = 100;
    while (num > 0) {
      console.log(num);
      num = Math.floor(num / 2);
    }
  },
  // * do 코드블럭에 prompt로 숫자를 입력 받고
  // * 사용자가 10보다 큰 숫자를 입력할때 까지 입력 무한 요청
  예제6: () => {
    let userInput = 0;
    do {
      userInput = prompt("10이상 임력하면 멈춤 ㅎㅎ");
    } while (userInput < 10);
  },

  // * for... in 반복문
  forIn: () => {
    let car = {
      company: "포르쉐",
      model: "911 Turbo",
      year: 2007,
    };

    for (let prop in car) {
      console.log(prop, ": ", car[prop]);
    }
  },

  // * 배열의 인덱스 반복
  인덱스반복: () => {
    let fruits = ["apple", "banana", "cherry"];
    for (let i in fruits) {
      console.log(i, ": ", fruits[i]);
    }
  },

  forOf: () => {
    let fruits = ["apple", "banana", "cherry"];
    for (let fruit of fruits) {
      console.log(fruit);
    }
  },

  forEach: () => {
    let fruits = ["apple", "banana", "cherry"];
    fruits.forEach(function (fruit, i, a) {
      console.log(fruit);
      console.log(i);
      console.log(a);
    });
  },
};

const Loop = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".3em" }}>
      <h4>Loop</h4>
      <button onClick={handleScript.개요}>개요 실행</button>
      <button onClick={handleScript.for}>for 실행</button>
      <button onClick={handleScript.while}>while 실행</button>
      <button onClick={handleScript.doWhile}>doWhile 실행</button>
      <button onClick={handleScript.예제1}>예제1 실행</button>
      <button onClick={handleScript.예제2}>예제2 실행</button>
      <button onClick={handleScript.예제3}>예제3 실행</button>
      <button onClick={handleScript.예제4}>예제4 실행</button>
      <button onClick={handleScript.예제5}>예제5 실행</button>
      <button onClick={handleScript.예제6}>예제6 실행</button>
      <button onClick={handleScript.forIn}>forIn 실행</button>
      <button onClick={handleScript.인덱스반복}>인덱스반복 실행</button>
      <button onClick={handleScript.forOf}>forOf 실행</button>
      <button onClick={handleScript.forEach}>forEach 실행</button>
    </div>
  );
};

export default Loop;
