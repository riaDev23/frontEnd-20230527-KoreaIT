let heading = document.querySelector("#heading");
let confirmBtn = document.querySelector("#confirmBtn");
let promptBtn = document.querySelector("#promptBtn");

heading.onclick = function () {
  heading.style.color = "red";
};

confirmBtn.onclick = function () {
  console.log(confirm("컴펌창입니다."));
};

promptBtn.onclick = function () {
  console.log(prompt("입력해주세요"));
};

