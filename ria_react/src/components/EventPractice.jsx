import React, { useEffect } from "react";

const EventPractice = () => {
  // 이벤트 발생 객체

  let h1;
  const listener = (e) => {
    const length = e.target.value.length;
    h1.textContent = `글자수 : ${length}`;
  };


  useEffect(() => {
    const textArea = document.querySelector("textarea");
    h1 = document.querySelector("h1");

    // textArea.addEventListener("keyup", (e) => {
    //   const length = textArea.value.length;
    //   h1.textContent = `글자수 : ${length}`;
    // });

    textArea.addEventListener("keyup", listener);
  }, []);

  //? event.currentTarget 속성
  // 해당 속성의 경우 화살표 함수와 function 키워드 함수에 모두 사용 가능

  //? this 키워드
  // function 키워드 함수 사용시에만 사용 가능
  // 화살표 함수 사용 불가~
  return (
    <div>
      <h1>EventPractice</h1>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  );
};

export default EventPractice;
