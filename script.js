function addTask(){

  const input = document.getElementById("todo-input");

  const taskText = input.value.trim();

  if(taskText === ""){
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `

    <span onclick="toggleTask(this)">
      ${taskText}
    </span>

    <button
      class="delete-btn"
      onclick="deleteTask(this)"
    >
      ✖
    </button>

  `;

  document
    .getElementById("todo-list")
    .appendChild(li);

  input.value = "";

}

function deleteTask(button){

  button.parentElement.remove();

}

function toggleTask(task){

  task.classList.toggle("completed");

}
