const dataWrap = document.querySelector("#myUL");
const addForm = document.querySelector(".form");
const input = document.querySelector("input");
var list = document.querySelector('ul');

const readFromStorage = (key = "todo", dataType = "array") => {
  let data;
  try {
    data = JSON.parse(localStorage.getItem(key)) || [];
    if (!Array.isArray(data) && dataType == "array")
      throw new Error("data is not an array");
  } catch (e) {
    data = [];
  }
  return data;
};


const writeToStorage = (data, key = "todo") => {
  localStorage.setItem(key, JSON.stringify(data));
};

const draw = (tasks) => {
  dataWrap.innerHTML = ''
  if (tasks.length == 0) {
    const li = document.createElement("li");
    li.innerHTML = "no data found"
  }
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = task;
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X"
    delBtn.classList.add("btn")
    dataWrap.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn)
    delBtn.addEventListener("click", () => delTask(tasks, i));
    li.addEventListener("click", function() {
      span.classList.toggle("lineThrough");
  });  }
  )
}



if (addForm) {
  const tasks = readFromStorage();
  draw(tasks)
  addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const task = input.value;
    if(task == '') {alert("please fill")}
    else{
    tasks.push(task);
    writeToStorage(tasks);
    draw(tasks);
  }
  });
}
const jf = (ev) =>{
  ev.classList.add('checked');
};

const delTask = (tasks, i) => {
  tasks.splice(i, 1);
  writeToStorage(tasks);
  draw(tasks);
};
