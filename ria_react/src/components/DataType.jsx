import React from "react";
const DataType = () => {
  //   dataType
  // 숫자, 문자열, 논리형

  // 배열, 객체

  // undefined, null

  // 1. 기본 자료형
  // 1-1. 숫자형

  // 정수와 실수로 나뉘지만 js 에서는 구분X
  // number라는 하나의 자료형으로 사용

  let number1 = 10;
  let float1 = 10.5;

  console.log(float1);

  // 1-2. 문자열
  // 텍스트 데이터를 나타내는 타입
  // 작은따옴표('), 큰따옴표("), 백틱(`) 으로 둘러싸서 표현
  let string1 = "hello";
  let string2 = "hello";
  let string3 = `hello`;

  console.log(string1);
  console.log(string2);
  console.log(string3);

  // (`) 백틱
  // 템플릿 문자열
  // 문자열 안에 변수를 받아서 사용 가능
  let name = "강리아";
  let introduce = `안녕하세요 ${name} 입니다.`;
  console.log(introduce);

  // 1-3 논리형
  // boolean : 참(true) 또는 거짓(false)
  console.log(100 < 10); // false
  console.log(100 > 10); // true

  let booleanExample = true;
  let booleanExample2 = false;
  let booleanExample3 = "참"; // 커서 올려서 데이터 타입 확인 ~~ 😃

  // 1-4 null & undefined
  // null : 값이 없음을 명시적으로 나타냅니다. (변수에 할당된) 데이터의 값이 유효하지 않은 상태
  // undefined : 값이 할당되지 않은 변수의 기본값입니다.
  let nullExample = null;
  let undefinedExample;

  console.log(nullExample);
  console.log(undefinedExample);

  // Object 객체 : 여러가지 값과 복잡한 개체를 표현하는 타입
  let obj = {
    name: "Ria",
    age: 34,
    phoneNumber: "010-5526-1014",
    email: "riadev@proton.me",
  };

  console.log(obj);
  console.log(obj.name);

  // 자료형 검사
  // typeof 변수명
  let typeofNumber = 10;
  console.log(typeof typeofNumber); // number 라고 나옴 ㅋ

  // 자료형 변환
  // 문자열로 변환: String() 함수 또는 toString() 메서드를 사용해서 다른 자료형을 문자열로 변환 가능..
  let numberToString = String(123);
  console.log(numberToString);
  console.log(typeof numberToString); // String 으로 나옴

  // 숫자로 변환
  // Number() 함수를 사용해서 문자열을 숫자로 변환할 수 있음
  // 문자열이 숫자로 변환할수 없는 경우 결과는 NaN (Not A Number)로 나옴
  let stringToNumber = Number("123");
  console.log(stringToNumber);
  console.log(typeof stringToNumber);

  // 불리언으로 변환
  // Boolean() 함수를 사용하여 다른 자료형을 불리언으로 변환할 수 있습니다.
  // ? JavaScript에서는 false, 0, '', null, undefined, NaN을 제외한 모든 값이 true임.
  let stringToBoolean = Boolean("나는 강리아 입니다.");
  console.log(stringToBoolean);
  let numberToBoolean = Boolean(0);
  console.log(numberToBoolean);
  return <div>dataType</div>;
};

export default DataType;
