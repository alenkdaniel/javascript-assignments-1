const task = document.getElementById('task');

const addtaskButton = document.getElementById('addtask');


const taskList = document.getElementById('displaytask');

addtaskButton.addEventListener('click', function() {
    const taskText = task.value;

    if (taskText.trim() !== '') {
        const newTaskItem = document.createElement('li');
        newTaskItem.textContent = taskText;

        taskList.appendChild(newTaskItem);

        taskInput.value = '';
    }
});
