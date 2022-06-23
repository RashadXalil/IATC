// DOM components
let dark = document.getElementById("dark");
let light = document.getElementById("light");
let body = document.getElementById("body");
let bg = document.getElementById("section-bg");
let ul = document.getElementById("content-todo-ul");
let input = document.getElementById("add-to-do-inp");
let btn = document.getElementById("form-btn");
// Dark Mode
dark.addEventListener("click", function () {
  body.style.backgroundColor = "black";
  bg.style.backgroundImage = "url('../assets/images/bg-desktop-dark.jpg')";
  dark.classList.remove("active");
  light.classList.add("active");
  ul.style.backgroundColor = "#25273D";
  input.style.backgroundColor = "#25273D";
});
// Light Mode
light.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  bg.style.backgroundImage = "url('../assets/images/bg-desktop-light.jpg')";
  light.classList.remove("active");
  dark.classList.add("active");
  ul.style.backgroundColor = "white";
  input.style.backgroundColor = "white";
});
let todos = [];
btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value != "") {
    let value = input.value;
    todos.push(value);
    input.value = "";
  } else {
    alert("Input is Empty!");
  }
  GenerateList();
  ClearList();
});
function GenerateList() {
  ul_inner = "";
  GenerateToDo(todos);
  ul_inner += `<li class="ul-footer">
      <div class="row w-100" style="text-align: center;height: 40px;align-items: center;">
          <div class="col-4">
              <p>${todos.length} items left</p>
          </div>
          <div class="col-4 d-flex">
              <p id="all1">All</p>
              <p id="active1">Active</p>
              <p id="complated1">Complated</p>
          </div>
          <div class="col-4">
              <p id="clear1">clear completed</p>
          </div>
      </div>
    </li>`;
  ul.innerHTML = ul_inner;
  Filter();
}
function GenerateToDo(todos) {
  for (let i = 0; i < todos.length; i++) {
    ul_inner += `
       <li>
                        <input type="checkbox" id="to-do-${i}">
                        <label for="to-do-${i}">${todos[i]}</label>
                    </li>
       `;
  }
}
function ClearList() {
  let clear = document.getElementById("clear1");
  clear.addEventListener("click", function () {
    console.log("clicked");
    todos.splice(0, todos.length);
    console.log(todos);
    GenerateToDo(todos);
    GenerateList();
  });
}
function Filter() {
  let all = document.getElementById("all1");
  let active = document.getElementById("active1");
  let complated = document.getElementById("complated1");

  all.addEventListener("click", function () {
    console.log("all");
  });
  active.addEventListener("click", function () {
    console.log("active");
  });
  complated.addEventListener("click", function () {
    console.log("complated");
  });
}
