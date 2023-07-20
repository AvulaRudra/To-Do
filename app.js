
// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var dateInput = document.getElementById("dateInput");

  if (taskInput.value === "") {
    alert("Please enter a task");
    return;
  }

  var taskList;
  var taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  var taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.textContent = taskInput.value + " (Due: " + dateInput.value + ")";
  taskItem.appendChild(taskText);

  // Add an edit button to each task
  var editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.innerHTML = "Edit";
  editButton.onclick = function() {
    var newTask = prompt("Edit task:", taskText.textContent.split(" (Due: ")[0]);
    if (newTask) {
      taskText.textContent = newTask + " (Due: " + dateInput.value + ")";
    }
  };
  taskItem.appendChild(editButton);

  // Add a checkbox to mark tasks as completed
  var checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";
  checkbox.onchange = function() {
    if (checkbox.checked) {
      taskItem.classList.add("completed");
      taskList = document.getElementById("completedTasks");
    } else {
      taskItem.classList.remove("completed");
      taskList = document.getElementById("pendingTasks");
    }
    taskList.appendChild(taskItem);
  };

  var dueDate = new Date(dateInput.value);
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  if (dueDate < today) {
    taskItem.classList.add("overdue");
    taskList = document.getElementById("overdueTasks");
  } else {
    taskList = document.getElementById("pendingTasks");
  }

  taskItem.appendChild(checkbox);
  taskList.appendChild(taskItem);
  taskInput.value = "";
  dateInput.value = "";
}
