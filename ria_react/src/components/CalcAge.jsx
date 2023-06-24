import React from 'react'

const Calc_age = () => {
  let thisYear = 2023;
  let birthYear = prompt("태어난 년도를 입력해주세요");
  let age = thisYear - birthYear + 1;

  document.write("올해는 " + thisYear + "년 입니다.<br />");
  document.write(
    birthYear + "년에 태어난 사람의 나이는 " + age + "세입니다."
  );

  return (
    <div>Calc_age</div>
  )
}

export default Calc_age