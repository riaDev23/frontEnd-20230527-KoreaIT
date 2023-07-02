let stockName = document.querySelector(".name");
let price = document.querySelector(".price");
let qty = document.querySelector(".qty");
const SUBMIT = document.querySelector(".submit");

SUBMIT.addEventListener('submit', function(event) {
  event.preventDefault(); // submit 이벤트 기본 동작을 막음
});

SUBMIT.addEventListener("click", () => {
  console.log(stockName);
  console.log(price);
  console.log(qty);
});
