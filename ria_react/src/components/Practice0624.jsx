import React from "react";

const Practice0624 = () => {
  // 문제1
  // 선언과 동시에 초기화 되어야 한다.
  // const r; (X)
  // r = 10; (X)
  const r = 10; // (O)
  console.log(r);

  console.log(`넓이 = ${3.14 * r * r}`);

  // 문제2
  let number = 10;
  console.log(++number); // 11
  console.log(number++); // 11
  console.log(number); // 12
  console.log(++number); // 13
  console.log(number--); // 13
  console.log(number); // 12

  // 문제3
  // 사용자로부터 숫자를 입력받아 inch를 cm단위로 변환하여 출력하는 프로그램을 만들어 보세요.

  // 1 inch = 2.54cm
  // 대화 상자에서 5inch는 12.7cm 입니다.

  let inch = prompt("inch 를 입력하면 cm 로 변환됩니다.");
  let cm = inch * 2.54;
  alert(`${inch}inch는 ${cm}cm 입니다.`);

  return <div>Practice0624</div>;
};

export default Practice0624;
