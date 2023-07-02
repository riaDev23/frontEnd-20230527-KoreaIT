let heading = document.getElementById("하이하이");
console.log(heading);
heading.textContent = "ㅋㅋㅋ";
heading.innerHTML = "ㅎㅎㅎ";
let items = document.getElementsByClassName("item");

console.log(items);
Array.from(items).map((value) => (value.innerHTML = "ㅋㅋㅋ"));
let tags = document.getElementsByTagName("p");

let nodeItems = document.querySelectorAll(".item");
console.log(items);
console.log(nodeItems);

Array.from(nodeItems).map((value) => (value.innerHTML = "하하하"));

nodeItems.forEach((value, key, parent) => {
  console.log("value : ", value);
  console.log("key : ", key);
  console.log("parent : ", parent);
});

let ul = document.querySelector("ul");
for (let i = 0; i < 3; i++) {
  let li = document.createElement("li");
  li.textContent = i;
  ul.insertBefore(li, ul.firstChild);
}

ul.addEventListener('')