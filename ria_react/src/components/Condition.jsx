import React from "react";


const handleScript = () => {
    // 자바스크립트의 조건문
  // 조건문 : 프로그램에게 특정 조건을 검사하고, 그 결과에 따라 다른 행동을 하도록 명령하는 방식
  // 조건문의 종류 : if, else (if)문, if-else문, switch문
  
  // ! 1. if문
  /* 가장 기본적인 조건문, 특정 조건이 참일 경우 코드 블록이 실행
  if문의 기본형
  
  if (조건) {
    ? 조건이 참일 때 실행되는 코드
    ? 조건이 거짓일 경우 코드블럭은 무시
  }
  조건에는 보통 비교 연산자(==, !=, ===, !==, <, >, <=, >=)
  
  */
  
  let number = 10;
  if (number > 0) {
    console.log("The Number is positive😄");
  }
  
  // ! 2. if else문
  /* else문은 if문과 함께 사용, if의 조건이 거짓일 경우 else 뒤의 코드 블록이 실행
  if else문의 기본형
  
  if (조건) {
    ? 조건이 참일때 실행되는 코드
  } else {
    * 조건이 거짓일때 실행되는 코드
  }
  
  [중괄호 없이 사용가능]
  if (조건) // 조건이 참일때 실행되는 코드
  else // 조건이 거짓알때 실행되는 코드
  */
  
  let number2 = -10;
  if (number2 > 0) {
    console.log(`The Number2:(${number2}) is positive 😄`);
  } else {
    console.log(`The Number2:(${number2}) is negative 😅`);
  }
  
  // ! 3. else-if 문
  /* else if 문은 if 와 else 사이에 여러 개의 조건을 추가
  여러 개의 조건을 확인할 수 있게 해주는 제어 구조
  [else if 문의 기본형]
  if (조건1) {
    ? 조건1이 참일때 실행되는 코드
  } else if (조건2) {
    ? 조건1이 거짓이고, 조건2가 참일때 실행되는 코드
  } else if (조건3) {
    ? ... 계속 추가가능
  } else {
    * 모든 조건이 거짓일때 실행되는 코드
  }
  */
  
  let number3 = 0;
  if (number3 > 0) {
    console.log(`The Number3:${number3} is positive 😄`);
  } else if (number3 < 0) {
    console.log(`The Number3:${number3} is negative 😅`);
  } else {
    console.log(`The Number3:${number3} is maybe ... 0 ? 🤔`);
  }
  
  // ! 4. switch문
  /* switch문은 여러 가지 경우 중 하나를 선택하는데 사용
  표현식의 값을 확인하고 해당 값과 일치하는 case문의 코드 블록을 실행
  
  - switch문은 여러 가지 가능한 케이스 중에서 하나를 선택하여 해당하는 코드 블록을 실행하는 제어 구조
  
  else문, else-if문이 복잡하게 겹쳐질때 사용하면 코드를 간결하고 이해하기 쉽게 만들 수 있음.
  
  [switch 문의 기본형]
  switch (식){
    case 값1:
      ? 식이 값1과 일치할때 실행하는 코드
    case 값2:
      ? 식이 값2와 일치할때 실행하는 코드
    case 값3:
      ? 식이 값3과 일치할때 실행하는 코드
  }
  */
  
  let fruit = "apple";
  switch (fruit) {
    case "banana": console.log("This is a banana 🍌"); break;
    case "apple": console.log("This is an apple 🍎"); break;
    case "strawberry": console.log("This is a strawberry 🍓"); break;
    default: // 일치하는 case가 없을때 실행
      console.log("Maybe, this is not a fruit 🍗")
  }
  /* switch 문은 주어진 식의 결과값과 case에 명시된 값들을 순차적으로 비교 */
  
  // ! 조건 연산자 (삼항 연산자)
  /* 조건 연산자는 자바스크립트에서 세 개의 피연산자를 가지는 유일한 연산자
  if-else문을 더 간결하게 표현
  [조건 연산자의 기본형]
  
  * 조건 ? 표현식1(조건이참) : 표현식2(조건이거짓)
  ? 조건이 true면 표현식1 실행, false면 표현식2 실행
  */
  let numCondition = 10;
  let message = numCondition > 10 ? "The number is greater than 10" : "The number is less than or equal to 10";
  console.log(message);
  
  // ? 퀴즈~~ 😀
  // true ? alert('출력A') : alert('출력B');
  // false ? alert('출력B') : alert('출력A');
  // true || alert('출력A');
  // true && alert('출력B');
  
  /* 논리 연산자로 조건체크
  조건을 2개 이상 체크할 경우에는 조건 연산자를 사용해서 조건식을 만든다.
  두 조건이 true일 경우 1개만 true일 경우처럼 여러 경우의 수를 따질 때는 논리 연산자를 사용
  
  ? OR 연산자
  ? 피연산자 2개 중에서 true가 하나라도 있으면 결과값은 true
  false || false == false;
  false || true == true;
  true || false == true;
  true || true == true;
  */
  
  let num1 = prompt('num1 : 숫자를 입력하세요');
  let num2 = prompt('num2 : 숫자를 입력하세요');
  
  if(num1 < 10 || num2 < 10) {
    alert(`num1, num2 중에서 10 최소 1개는 10 미만`)
  } else {
    alert('num1, num2 중에서 10 미만인 수가 없습니다.')
  }
  
  /*
  ? AND 연산자
  ? 피연산자 2개 중에서 false가 하나라도 있으면 false
  false && false == false;
  false && true == false;
  true && false == false;
  true && true == true;
  */
  let numTest = 0;
  console.log(`numTest는 true?? ${numTest==true}`)
}



const Condition = () => {
  return <div>
    <h4>condition</h4>
    <button onClick={handleScript}>실행</button>
  </div>;
};

export default Condition;
