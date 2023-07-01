import React from "react";
/* 윤년진이 확인하는 함수 */
/* 
4로 나누어 떨어지는 해는 윤년이다
100으로 나누어 떨어지는 해는 윤년이 아니다
400으로 나누어 떨어지는 해는 윤년 이다
*/

const 윤년 = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? "윤년"
    : "윤년아님";
};

/* A부터 B까지 더하는 함수 */
/*
A부터 B까지의 범위를 지정 -> 범위 안에 있는 숫자를 모두 더하는 함수 구현
*/

const 범위더하기 = (A, B) => {
  let sum = 0;
  for (let i = A; i <= B; i++) {
    sum += i;
  }
  return sum;
};

/* 최솟값 구하기 */
/* 
const 최소값 = (arr) => {
  let min = arr[0];
  arr.map((value) => {
    if (value < min) {
      min = value
    }
  });
  return min;
};
 */

const 최소값 = (arr) =>  Math.min(...arr);

const FunctionPractice = () => {
  return (
    <div>
      <p>{윤년(2023)}</p>
      <p>{범위더하기(1, 10)}</p>
      <p>{최소값([2, 45, 6, 3, 5, 6, 76, 8])}</p>
    </div>
  );
};

export default FunctionPractice;
