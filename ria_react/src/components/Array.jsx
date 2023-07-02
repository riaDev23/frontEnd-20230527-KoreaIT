import React from "react";
const Array = () => {
  let cars = ["bmw", "auid"];
  console.log(cars.pop());
  console.log(cars);

  function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  let person1 = new Person("ria", 90, "Dev");
  let person2 = new Person("show", 91, "Doc");
  console.log(person1);
  console.log(person2);
  console.log(person1.name);
  console.log(person1.age);
  console.log(person1.job);

  let personProto = {
    greet: function () {
      console.log(`Hello, my name is ${this.name}`);
    },
  };

  let newPerson = Object.create(personProto);
  newPerson.name = "ria";
  newPerson.greet();

  // ! 클래스
  class Person2 {
    constructor(name, age, job) {
      this.name = name;
      this.age = age;
      this.job = job;
    }

    greet() {
      console.log(`안녕, 내 이름은 ${this.name}이야`);
    }
  }

  let person3 = new Person2("리아", 90, "개발자");
  person3.greet();
  console.log(person3);

  /* ㅁㅁ */
  let computer1 = { name: "Samsung Book3" };
  let computer2 = computer1;

  computer2.name = "아이폰";
  console.log(computer1.name);

  function changeName(computer) {
    computer.name = "삼성 갤노트";
  }

  let computer3 = { name: "아이폰" };
  changeName(computer3);
  console.log(computer3.name);

  return <div>Array</div>;
};

export default Array;
