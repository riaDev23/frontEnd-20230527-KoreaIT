import React from "react";

const Variable_constant = () => {
  return (
    <div>
      <h3>1. 변수</h3>
      <article>
        <p>변하는 수 값이 달라질 수 있는 데이터.</p>
        <p>
          변수 선언 : 변수를 사용하기 위해 변수를 각각의 변수와 구별하기 위해
          이름을 붙여 주는것.
        </p>

        <ol>
          <h4>Javascript 0624</h4>
          <h5> 변수명 명명 규칙</h5>
          <li>첫 글자 : 영문자, 언더스코어(_), 달러($)만 사용 가능</li>
          <li>첫 글자 이후로는 숫자 사용가능</li>
          <li>띄어쓰기 허용X</li>
          <li>
            lowerCamelCase: 소문자로 작성, 두개 이상의 단어 결합 시 두번째
            단어의 첫 시작을 대문자로 지정
          </li>
          <li>사용가능 : now, _now, now25, now$</li>
          <li>사용불가 : 25now, now 25, *now</li>
          <li>대소문자 구별해서 사용 now != Now</li>
          <li>이름을 의미있게 작성</li>
          <p>
            pw(x) password(o) <br />
            올해연도 : Year1(x), currentYear(o) <br />
            태어난연도 : Year2(x), birthYear(o)
          </p>
          <li>let</li>
          <p>
            블록{} 범위 변수, 재할당 가능 <br />
            선언과 초기화 <br />
            변수 변수명; (변수 선언) <br />
            변수명 = 값; (변수에 값을 할당) <br />
            변수 변수명 = 값; (선언과 동시에 할당: 초기화) <br />
          </p>
          <li>var</li>
          <p>함수 유효 범위 (function scope)를 가지는 변수를 선언</p>
          <p>let letExample; // 변수 선언 <br />
          var varExample; // 변수 선언</p>
          <p>
            let Example = 10; // 값 할당 <br />
            varExample = "Hello Var"; // 값 할당
          </p>
          <p>
            let letExample2 = 20;
            var varExample2 = "Hello Var2";
          </p>

        </ol>
      </article>
    </div>
  );
};

export default Variable_constant;
