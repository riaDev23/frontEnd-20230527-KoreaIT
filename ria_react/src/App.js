import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import VariableConstant from "./components/VariableConstant";
import CalcAge from "./components/CalcAge";
import Const from "./components/Const";
import DataType from "./components/DataType";
import Operator from "./components/Operator";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>프론트엔드</p>
      <Router>
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
        <Routes>
          <Route path="/Variable_constant" element={<VariableConstant />} />
          <Route path="/Calc_age" element={<CalcAge />} />
          <Route path="/Const" element={<Const />} />
          <Route path="/DataType" element={<DataType />} />
          <Route path="/Operator" element={<Operator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
