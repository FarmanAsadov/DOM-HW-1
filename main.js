//1
const ul = document.getElementById("ul");

var fruits = ["alma", "armud", "banan"];

fruits.forEach((fruit) => {
  var li = document.createElement("li");
  li.innerHTML = fruit;
  ul.appendChild(li);
});

//2
const div = document.getElementById("img-logo");
var img = document.createElement("img");
img.src = "./assets/logo/crocoder.png";
div.style.margin = "50px 100px ";
div.appendChild(img);

//3
const ul2 = document.getElementById("ul2");
fruits.forEach((element, index) => {
  let first = fruits[0];
  let last = fruits[fruits.length - 1];
  let li = document.createElement("li");
  li.innerHTML =
    index == 0 ? last : index == fruits.length - 1 ? first : element;
  ul2.appendChild(li);
});

//4
const ul3 = document.querySelector("#ul3");
const inpt = document.querySelector("#text");
const btnAdd = document.querySelector("#add_btn");

inpt.addEventListener("keydown", (e) => {
  if (e.key == "Enter") addFunction();
});

btnAdd.addEventListener("click", () => {
  addFunction();
});

function addFunction() {
  if (inpt.value) {
    var div = document.createElement("div");
    div.classList.add("lis_blocks");
    var li = document.createElement("li");
    li.classList.add("lis");
    var span = document.createElement("span");
    span.classList.add("text");
    var btnEdit = document.createElement("button");
    btnEdit.id = "btn_edit";
    btnEdit.classList.add("btn");
    btnEdit.textContent = "Edit";
    li.appendChild(div);
    div.appendChild(span);
    div.appendChild(btnEdit);
    span.innerHTML = inpt.value;
    ul3.appendChild(li);
    inpt.value = "";
    btnEdit.addEventListener("click", () => {
      const newtext = prompt("Change: ", span.textContent);
      if (newtext) {
        span.innerHTML = newtext;
      } else {
        alert("Bos saxlamaq olmaz!!");
      }
    });
  } else {
    alert("Inputu bos saxlamaq olmaz!!");
  }
}
