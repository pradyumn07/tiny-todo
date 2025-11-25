const list = document.getElementById("list");
const form = document.getElementById("form");
const input = document.getElementById("task");
let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

function render(){
  list.innerHTML = "";
  tasks.forEach((t,i) => {
    const li = document.createElement("li");
    li.textContent = t;
    const btn = document.createElement("button");
    btn.textContent = "x";
    btn.onclick = () => { tasks.splice(i,1); saveAndRender(); };
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function saveAndRender(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render();
}

form.onsubmit = e => {
  e.preventDefault();
  if(input.value.trim()){
    tasks.push(input.value.trim());
    input.value = "";
    saveAndRender();
  }
};

render();
