import React from "react";

const Object2 = () => {
  /* 자바스크립트의 내장 객체 */
  // * Built-in Objects(내장 객체) 제공
  // * 특정 작업을 수행, 복잡한 기능을 쉽게 구현할 수 있도록 도와주는 메소드와 속성을 제공

  // ! 1. String
  let str = "  Hello, World!  ";
  console.log(str);
  console.log(str.trim());
  console.log(str.length);
  console.log(str.trim().length);
  console.log(str.toUpperCase());
  console.log(str.toUpperCase().trim());
  console.log(str.split(","));
  console.log(str.trim().split(","));

  // ! 2. Number
  let num = 123.556;
  console.log(num);
  console.log(num.toFixed(1));

  // isNaN()      숫자가아님
  // isFinite()   무한대의수

  // ! 3. Array
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.length);
  console.log(arr["push"](6));
  console.log(arr);

  // ! 4. Math
  console.log(Math.PI);
  console.log(Math.sqrt(9));
  console.log(typeof (Math.random() * 100).toFixed(0));
  console.log(Math.floor(Math.random() * 100));

  // ! 5.Date
  let now = new Date();
  console.log(now);
  console.log(now.getTime());
  console.log(now.getFullYear());
  console.log(now.getDay());
  console.log(now.getMonth());
  console.log(now.getDate());

  // ! 6.JSON
  // JSON 객체는 JSON 포맷 데이터를 처리하는 메소드
  let obj = { name: "리아", age: 90 };
  console.log(obj);
  let json = JSON.stringify(obj);
  console.log(json);
  let parsed = JSON.parse(json);
  console.log(parsed);

  // ! 7. 프로토타입
  // 그 객체를 기반으로 생성된 다른 객체들이 공통적으로 사용할 수 있는 속성과 메소드
  // 객체 생성 시 해당 객체의 생성자 함수의 prototype 속성이 그 객체의 프로토 타입

  function Person(name) {
    this.name = name;
  }

  Person.prototype.greet = function () {
    console.log(`하이하이 난 ${this.name} 이라고해`);
  };

  let korea = new Person("korea");
  korea.greet();

  // ! 프로토타입 체인
  // 객체의 속성이나 메소드에 접근 시 자바스크립트 엔진은 먼저 그 객체 자체에서
  // 해당 속성이나 메소드를 찾는다.
  // 만약에 찾지 못할 경우 객체의 프로토타입에서 찾는다.

  let academy = new Person("IT");
  console.log(academy.constructor === Person);
  console.log(academy.constructor.prototype === Person.prototype);
  console.log(academy.constructor);

  // ! 객체와 배열의 차이점
  // 객체: 키와 값으로 이루어진 구조
  // 키는 일반적으로 문자열, 값은 어떤 데이터 타입이든 가능

  let 리아 = {
    name: "리아",
    age: 90,
    isMarried: false,
    skill() {
      console.log("개발중");
    },
  };

  리아.skill();

  // 배열 : 순서가 있는 데이터의 목록
  // 배열의 요소는 어떤 데이터 타입이든 될 수 있으며, 하나의 배열에 다양한 타입의 데이터를 함께 저장 가능
  let 길 = ["인터넷", "TV", "사은품", "와이파이", "부가서비스"];
  // 타입검사 : Array.isArray(배열명)
  console.log(Array.isArray(길));
  길.map((value, index) => {
    console.log("값 : ", value);
    console.log("인덱스 : ", index);
  });

  // ! JSON (JavaScript Object Notation)
  // 데이터를 교환하는데 주로 사용되는 가벼운 데이터 형식
  // 텍스트를 기반, 자바스크립트 객체의 문법을

  let jsonData = '{"name": "하이", "age": 50}';
  let obj2 = JSON.parse(jsonData);
  console.log(obj2.name);

  

  return <div>Object2</div>;
};

export default Object2;
