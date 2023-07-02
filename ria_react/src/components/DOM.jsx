import React from "react";

const DOM = () => {
  // DOM
  // Document Object Model
  // 웹 페이지를 프로그래밍 방식으로 조작하고 관리할 수 있는 인터페이스
  // HTML 문서의 구조를 트리 구조로 표현, 이를 이용해 JavaScript를 사용하여 문서의 내용, 구조, 스타일을 동적으로 변경할 수 있다.

  // ! DOM의 정의
  // HTML 문서는 트리 구조로 표현
  // 노드: 트리의 각 요소 (웹 페이지의 각 구분)
  // 노드 타입: document. Element. Text. Comment 등

  // ! DOM 사용
  let heading = document.getElementsByClassName("myHeading");
  console.log(heading);
  heading.textContent = "하이하이";
  heading.InnerHTML = "하이하이";

  return (
    <div>
      <h1>DOM</h1>
      <div className="myHeading">asd</div>
    </div>
  );
};

export default DOM;
