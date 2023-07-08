import React from "react";

const ObjectArray = () => {
  // 객체 존재 여부 확인
  // 객체 내부에 어떤 속성이 있는지 확인
  // 객체에 없는 속성에 접근을 하면 undefined 자료형이 출력되기 때문에
  // 조건문으로 undefined 인지 확안하면 속성이 있는지 확인가능

  const object = {
    name: "자바스크립트",
    price: 18000,
    publisher: `&copy; Copyright Riadev.`,
  };

  const object2 = {
    name: "자바스크립트",
    price: 18000,
    publisher: `&copy; Copyright Riadev.`,
  };

  object.author || console.log("author 없다");
  object.name || console.log("name 없다");
  console.log("");
  console.log(JSON.stringify(object2, null, 2));
  console.log(JSON.stringify(object2));
  console.log("");

  console.log(object);
  console.log(object2);
  console.log("");

  console.log((object2.name = object2.name || "제목 미정"));
  console.log((object2.author = object2.author || "저자 미정"));
  console.log("");

  console.log(object);
  console.log(object2);

  console.log("\n// ! 배열 기반의 다중 할당");
  // 한번에 여러 개의 변수에 값을 할당하는 다중 할당 기능이 추가

  // 다중 할당 기본구조
  // [식별자, 식별자, ...] = 배열
  let [a, b] = [1, 2];
  console.log(a, b);
  [a, b] = [b, a];
  console.log([2, 1]);
  console.log(a, b);

  console.log("구분선~~~~\n\n");
  let arrayA = [1, 2, 3, 4, 5];
  const [aa, bb, cc] = arrayA;
  console.log(aa, bb, cc);
  console.log("앞에 3개만 바뀌넹 ? ㅠ");

  console.log("\n\n// ! 객체 기반의 다중 할당");
  // 객체 속성을 꺼내서 다중 할당
  // { 속성이름, 속성이름, ...} = 객체
  // { 식별자=속성이름, 식별자=속성이름, ...} = 객체

  // 객체 생성
  const object3 = {
    name: "자바스크립트",
    price: 990000,
    publisher: "리아댑~",
  };

  const { name, price } = object3;
  console.log(name);
  console.log(price);
  console.log("\n\n");

  const { aaa = name, bbb = price } = object3;
  console.log(aaa);
  console.log(bbb);

  console.log("\n\n // ! 배열 전개 연산자");
  const food1 = ["우유", "식빵"];
  const food2 = food1;
  console.log(food2);
  food2.push("고구마");
  food2.push("토마토");

  console.log(food1);
  console.log(food2);

  console.log("\n\n // ! 깊은 복사(클론 복사)");
  const food3 = ["milk", "bread"];
  const food4 = [...food3];
  console.log(food4);
  food4.push("신전떡볶이");
  food4.push("앤티앤스");
  console.log(food3);
  console.log(food4);

  console.log("\n\n\n");
  const food5 = ["두유", "떡"];
  const food6 = ["과자", ...food5, "음료수"];

  console.log(food5);
  console.log(food6);

  console.log("\n\n\n");
  const arr1 = ["우유", "식빵"];
  const arr2 = ["두유", "떡"];

  console.log([...arr1, ...arr2]);
  console.log([...arr2, ...arr1]);

  console.log("\n\n");
  console.log("//! 객체 전개 연산자");
  const cloud = {
    name: "구름",
    age: 3,
    breed: "푸들",
  };

  const star = cloud;
  star.name = "별";
  star.age = "2";
  star.breed = "리트리버";
  console.log(JSON.stringify(cloud, null, 2));
  console.log(JSON.stringify(star, null, 2));

  const cloud2 = {
    name: "구름",
    age: 3,
    breed: "푸들",
  };

  const star2 = { ...cloud2 };
  star2.name = "별";
  star2.age = "2";
  star2.breed = "리트리버";
  console.log(JSON.stringify(cloud2, null, 2));
  console.log(JSON.stringify(star2, null, 2));

  const cloud3 = {
    name: "구름",
    age: 3,
    breed: "푸들",
  };

  const star3 = {
    name: "별",
    age: 2,
    breed: "리트리버",
    vaccination: true,
    ...cloud3,
  };

  console.log(JSON.stringify(star3, null, 5));

  return <div>ObjectArray</div>;
};

export default ObjectArray;
