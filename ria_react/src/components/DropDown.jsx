import React, { useState } from "react";

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState("떡볶이");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div>
      <h1>DropDown</h1>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="떡볶이">떡볶이</option>
        <option value="어묵">어묵</option>
        <option value="순대">순대</option>
        <option value="튀김">튀김</option>
      </select>
      <p>선택: {selectedOption}</p>
    </div>
  );
};

export default DropDown;
