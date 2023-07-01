import React from "react";

/* 함수 사용 용도와 예제 */
/* 1. 코드 재사용 */
function multiply(a, b) {
  return a * b;
}

function calculateDistance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

const handleClick = () => {
  console.log("Button was clicked!");
};

/* java script에서 함수 정의 방법 */
/*  함수 선언 */
/* function 키워드를 사용해서 함수를 선언 */
function greet() {
  console.log("Hello, World!");
}

/* 함수를 변수에 할당 하는 방법
: 변수에 할당된 함수는 변수의 스코프 내에서만 사용 가능
*/

let greet2 = function () {
  console.log("Hello, World!");
};

/* 화살표 함수
: ES6에서 새롭게 정의된 함수 선언 방식
기존 function 키워드를 대체하여 간결한 함수 표현식 구현
*/

const greet3 = () => {
  console.log("Hello, World!");
};

/* 실습 예제1 */
/* 함수 square 작성해서 파라미터로 x 값을 받습니다. */
const square = (x) => {
  return x * x;
};

let numbers = [1, 2, 3, 4, 5];
let add = numbers.map((x) => x + x);

console.log(add);

const Function = () => {
  return (
    <div>
      <h4>자바스크립트 함수</h4>
      <p>
        <span>multiply(2, 5) : </span>
        {multiply(2, 5)}
      </p>
      <p>
        <span>calculateDistance(1,2,3,4) : </span>
        {calculateDistance(1, 2, 3, 4)}
      </p>
      <p>
        <button onClick={handleClick}>ㅎㅇㅎㅇ</button>
      </p>
      <p>{greet()}</p>
      <p>{greet2()}</p>
      <p>{greet3()}</p>
      <p>{square(2)}</p>
      <p>{add}</p>
      <h4>함수2</h4>
    </div>
  );
};

export default Function;
