import React from "react";
const Operator = () => {
  // 연산자(operator)

  // 1. 산술 연산자
  // 덧셈, 뺼셈, 곱셈, 나눗셈, 나머지, 증가, 감소 등이 있음

  let x = 10;
  let y = 3;

  console.log(x + y); // 10 + 3 = 13
  console.log(x - y); // 10 - 3 = 7
  console.log(x * y); // 10 * 3 = 30
  console.log(x / y); // 10 / 3 = 3.33333333....
  console.log(x % y); // 1
  console.log(x++); // 10 (x를 출력한 후에 1을 더합니다. 후위 증가 연산자)
  console.log(x); // 11
  console.log(++x); // 12 (x에 1을 더한 다음에 출력. 전위 증가 연산자)
  console.log(x--); // 12 (x를 출력한 후에 1을 뺍니다.)
  console.log(x); // 11
  console.log(--x); // 10 (1을 뺀후에 x 출력)

  // 2. 할당 연산자
  // 할당 연산자는 변수에 값을 할당하는데 사용
  // 할당(=)
  // 더하기 후 할당 (+=)
  // 빼기 후 할당 (-=)
  // 곱하기 후 할당 (*=)
  // 나누기 후 할당 (/=)
  // 나머지 후 할당 (%=)
  let a = 10; // 10을 a에 할당
  console.log(a); // 10 출력
  a += 5; // a = a+5와 같다.
  console.log(a);
  a -= 2; // a = a-2와 같다.
  console.log(a);
  a *= 2; //
  console.log(a);
  a /= 2; //
  console.log(a);

  // 3. 비교 연산자
  // 두 값을 비교하고, 결과를 Boolean 값으로 반환
  // 동등(==), 부등(!=), 일치(===), 불일치(!==)
  // 크다(>), 작다(<), 크거나 같다(>=), 작거나 같다(<=)
  let b = 10;
  let c = "10";
  console.log(b == c); // true
  console.log(b != c); // false
  console.log(b === c); // false
  console.log(b !== c); // true

  console.log(b > c); // false
  console.log(b < c); // false
  console.log(b >= c); // true
  console.log(b <= c); // true

  // 4. 논리 연산자
  // 논리 연산자는 Boolean 값을 연산하는데 사용됩니다.
  // AND(&&), OR(||), NOT(!)
  let bool1 = true;
  let bool2 = false;
  console.log("true && false", bool1 && bool2);
  console.log("true || false", bool1 || bool2);
  console.log("!true", !bool1);
  console.log("!false", !bool2);

  return <div>연산자</div>;
};

export default Operator;
