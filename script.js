let inputField = document.getElementById("input_field");
let tasksList = document.getElementById("tasks_lists");


// Add Task Function


function addTask() {
  if (inputField.value === "") {
    alert("type something");
  }
   else {
    let li = document.createElement("li");
    li.innerHTML = inputField.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.setAttribute("onclick", "deleteTask(this)");
    li.appendChild(span);

    let editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pen";
    editIcon.setAttribute("onclick", "editTask(this)");
    li.appendChild(editIcon);

    tasksList.appendChild(li);
  }
  inputField.value = "";

  saveData()
}



// Clear All Function


function clearAll(){
    tasksList.innerHTML = "";

    saveData()
}


// Delete Single task Function


function deleteTask(span) {
  span.parentNode.remove();

  saveData()
}



// Edit Task Function


function editTask(editIcon) {
  let li = editIcon.parentNode;

  let currentTaskText = li.firstChild.textContent;
  li.innerHTML = "";

  let inputTask = document.createElement("input");
  inputTask.type = "text";
  inputTask.value = currentTaskText;
  li.appendChild(inputTask);
  li.style.backgroundColor = "yellow";

  let saveIcon = document.createElement("i");
  saveIcon.className = "fa-solid fa-check";
  saveIcon.setAttribute("onclick", "saveEditTask(this)");
  li.appendChild(saveIcon);

  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  span.setAttribute("onclick", "deleteTask(this)");
  li.appendChild(span);

  saveData()
}




// Save Edit Task Function

function saveEditTask(saveIcon) {
  let li = saveIcon.parentNode;

  let updateTaskText = li.querySelector("input").value;

  li.innerHTML = updateTaskText;

  li.style.backgroundColor = "#b3c2c9";

  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  span.setAttribute("onclick", "deleteTask(this)");
  li.appendChild(span);

  let editIcon = document.createElement("i");
  editIcon.className = "fa-solid fa-pen";
  editIcon.setAttribute("onclick", "editTask(this)");
  li.appendChild(editIcon);

  saveData()
}



// Checked Completed Task



tasksList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed");
        saveData()
    }
}, false);




// Save Data Function


function saveData(){
    localStorage.setItem("data", tasksList.innerHTML);
}


// Save Tasks Function

function showTasks(){
    tasksList.innerHTML = localStorage.getItem("data");
}

showTasks();