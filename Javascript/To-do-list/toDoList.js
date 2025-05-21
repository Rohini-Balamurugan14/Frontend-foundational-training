let taskCount = 1;
function addTask() {
    const newTaskName = document.getElementById("input-text").value;
    console.log(newTaskName);

    taskCount++
    const newAddedTask = document.createElement('div');
    newAddedTask.id = "task-" + taskCount;
    newAddedTask.classList.add('task-item');
    
    const taskname = document.createElement("p");
    taskname.id = "name-" + taskCount;
    taskname.innerText = newTaskName;

    const iconTick = document.createElement("i");
    iconTick.className = "fa-solid fa-circle-check";
    iconTick.id = "tick-" + taskCount;
    iconTick.setAttribute("onclick", "strikeTask(this)")
    
    const iconDelete = document.createElement("i");
    iconDelete.className = "fa-solid fa-trash";
    iconDelete.id = "delete-" + taskCount;
    iconDelete.setAttribute("onclick", "deleteTask(this)")

    newAddedTask.appendChild(taskname);
    newAddedTask.appendChild(iconTick);
    newAddedTask.appendChild(iconDelete);
        
    document.getElementById('task-field').appendChild(newAddedTask);

    document.getElementById("input-text").value = "";
}

function strikeTask(icon) {
    const taskItem = icon.parentElement;
    const taskName = taskItem.querySelector("p");
    if (taskName.style.textDecoration === "line-through") {
        taskName.style.textDecoration = "none";
    } else {
        taskName.style.textDecoration = "line-through";
    }
}

function deleteTask(icon) {
    const taskItem = icon.parentElement;
    taskItem.remove();
}