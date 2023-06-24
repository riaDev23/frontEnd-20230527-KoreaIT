import React from 'react'

const Const = () => {
  
    return (
    <div>
      <h1>상수</h1>
      <h4>const 키워드 사용 (constant)</h4>
      <p>상수는 한번 할당된 값을 변경할 수 없습니다.</p>
      <p>객체(object)의 경우 주로 상수로 선언합니다.</p>
      //! const constExample; 이렇게 선언 불가 <br />
      //! 할당과 동시에 무조건 초기화 시켜야 함 <br />
      const constExample = 30;
      <hr />
      <h4>UPPER_SNAKE_CASE 사용</h4>
      <p>모든 문자를 대문자로 작성, 두개 이상의 단어가 결합될 때에는 _(언더스코어)를 사용합니다.</p>
      <p>const PI = 3.14;</p>
    </div>
  )
}

export default Const