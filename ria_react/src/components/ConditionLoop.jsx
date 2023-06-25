import React from "react";

const handleScript = {
  /*
  ! 조건문 자주하는 실수
  ? === 대신 == 사용하는거
  * == 연산자는 두 값을 비교할 때 타입 변환을 수행
  * === 연산자는 타입 변환없이 엄격하게 비교
  * 그냥 뭔지 모르면 === 써라 ㅎㅎㅎㅎ
  
  
  ? 불필요한 조건 사용
  * if (x === true) 대신 if(x) 이렇게 쓰면됨
  if (isValid === true) {
    이렇게 쓰지마라
  }

  if (inValid) {
    이렇게 써라...
  }
  
  
  ? 부정 연산자 사용
  * if (x === false) 대신 if(!x) 써라
  if (x === false) {
    일케 ㄴㄴ
  }

  if (!x) {
    일케 ㅇㅇ
  }

  ! 반복문 자주하는 실수
  ? 배열의 길이를 매 반복마다 계산 ㄴㄴ
  * 배열의 길이는 루프 밖에서 한번만 계산하면댐
  for (let i = 0; i < arr.length; i++) {
    일케 ㄴㄴ
  }

  let length = arr.length;
  for (let i = 0; i < length; i++) {
    일케 ㅇㅇ
  }

  ! 추가설명
  * 가능하면 map, reduce, filter와 같은 고차 함수를 사용
  * 이러한 함수는 코드를 더 간결하고 가독성 있게 만듬
  * 
  * 루프가 많은 양의 데이터를 처리해야하는 경우에는 웹 워커를 사용하여 메인 쓰레드가 차단되는 것을 방지할 수 있습니다.
  * 
  * 무한루프 ㄴㄴ 종료조건 설정
  * 
  * 조건문, 반복문 가독성 유지보수 신경써라~
  */

  // ? 구구단 만드삼
  문제1: () => {
    for (let dan = 1; dan < 10; dan++) {
      document.write(`<h4>${dan}단 입니다~!😀</h4>`);
      for (let i = 1; i < 10; i++) {
        document.write(`<p>${dan} * ${i} = ${dan * i}</p>`);
      }
    }
  },
};

const ConditionLoop = () => {
  return (
    <div>
      <h4>ConditionLoop</h4>
      <p>
        <button onClick={handleScript.문제1}>문제1 실행</button>
      </p>
    </div>
  );
};

export default ConditionLoop;
