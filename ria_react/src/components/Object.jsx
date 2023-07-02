import React from "react";

let name = '네임2';

const Object = () => {
  /* 속성&메서드 */
  let book = {
    title: "Little Prince",
    author: "Saint Exupery",
    publishYear: 1943,
    getSummary: function () {
      return `${this.title} was written by ${this.author} in ${this.publishYear}`;
    },
  };

  console.log(book.getSummary());

  /* 객체 속성 접근법 */
  /* 점표기 */
  console.log(book.title);

  /* 대괄호표기법 */
  console.log(book["author"]);

  /* 속성 존재 확인 */
  // in 연산자
  console.log("title" in book);
  console.log("publishYear" in book);

  /* 속성 삭제 */
  delete book.title;
  console.log(book);
  console.log(book.getSummary());

  /* 메서드 */
  // 메소드 정의
  /* 객체의 속성 중 함수인 속성
  객체와 관련된 동작을 캡슐화하여 코드의 구조를 개선하고 재사용성을 높일 수 있다. */
  // 메소드 형식
  let Human = {
    name: "리아",
    greet: function () {
      console.log(`안뇽 난 ${this.name}라고행~`);
    },
  };

  // 메소드 호출~
  Human.greet();
  console.log(typeof Human["name"]);
  console.log(typeof Human["greet"]);
  Human["greet"]();

  let teacher = {
    name: "리아",
    changeName: function (newName) {
      this.name = newName;
    },
  };

  teacher.changeName("쑈");
  console.log(teacher.name);

  /* 메소드 축약 */

  let teacher2 = {
    name: "리아",
    greet() {
      console.log('hihihi~')
    },
  };

  teacher2.greet();
  teacher2['greet']();

  return <div>Object</div>;
};

export default Object;
