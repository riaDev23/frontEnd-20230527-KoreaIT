import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import VariableConstant from "./components/VariableConstant";
import CalcAge from "./components/CalcAge";
import Const from "./components/Const";
import DataType from "./components/DataType";
import Operator from "./components/Operator";
import Practice0624 from "./components/Practice0624";
import Condition from "./components/Condition";
import ConditionPractice from "./components/ConditionPractice";
import Loop from "./components/Loop";
import ConditionLoop from "./components/ConditionLoop";
import Function from "./components/Function";
import FunctionPractice from "./components/FunctionPractice";
import Event from "./components/Event";
import Array from "./components/Array";
import Object from "./components/Object";
import Object2 from "./components/Object2";
import DOM from "./components/DOM";
import ObjectArray from "./components/ObjectArray";
import EventPractice from "./components/EventPractice";
import DropDown from "./components/DropDown";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>프론트엔드</p>
      <Router>
        <ol>
          <li>
            <Link to="/Variable_constant">변수</Link>
          </li>
          <li>
            <Link to="/Calc_age">나이 계산 프로그램</Link>
          </li>
          <li>
            <Link to="/Const">상수</Link>
          </li>
          <li>
            <Link to="/DataType">자료형</Link>
          </li>
          <li>
            <Link to="/Operator">연산자</Link>
          </li>
          <li>
            <Link to="/Practice0624">연습문제</Link>
          </li>
          <li>
            <Link to="/Condition">condition</Link>
          </li>
          <li>
            <Link to="/ConditionPractice">condition_practice</Link>
          </li>
          <li>
            <Link to="/Loop">Loop</Link>
          </li>
          <li>
            <Link to="/ConditionLoop">ConditionLoop</Link>
          </li>
          <li>
            <Link to="/Function">Function</Link>
          </li>
          <li>
            <Link to="/FunctionPractice">FunctionPractice</Link>
          </li>
          <li>
            <Link to="/Event">Event</Link>
          </li>
          <li>
            <Link to="/Array">Array</Link>
          </li>
          <li>
            <Link to="/Object">Object</Link>
          </li>
          <li>
            <Link to="/Object2">Object2</Link>
          </li>
          <li>
            <Link to="/DOM">DOM</Link>
          </li>
          <li>
            <Link to="/ObjectArray">ObjectArray</Link>
          </li>
          <li>
            <Link to="/EventPractice">EventPractice</Link>
          </li>
          <li>
            <Link to="/DropDown">DropDown</Link>
          </li>
        </ol>
        <Routes>
          <Route path="/Variable_constant" element={<VariableConstant />} />
          <Route path="/Calc_age" element={<CalcAge />} />
          <Route path="/Const" element={<Const />} />
          <Route path="/DataType" element={<DataType />} />
          <Route path="/Operator" element={<Operator />} />
          <Route path="/Practice0624" element={<Practice0624 />} />
          <Route path="/Condition" element={<Condition />} />
          <Route path="/ConditionPractice" element={<ConditionPractice />} />
          <Route path="/Loop" element={<Loop />} />
          <Route path="/ConditionLoop" element={<ConditionLoop />} />
          <Route path="/Function" element={<Function />} />
          <Route path="/FunctionPractice" element={<FunctionPractice />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Array" element={<Array />} />
          <Route path="/Object" element={<Object />} />
          <Route path="/Object2" element={<Object2 />} />
          <Route path="/DOM" element={<DOM />} />
          <Route path="/ObjectArray" element={<ObjectArray />} />
          <Route path="/EventPractice" element={<EventPractice />} />
          <Route path="/DropDown" element={<DropDown />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
