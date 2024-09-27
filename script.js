document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const reminderInput = document.getElementById('reminderInput');
    const taskValue = taskInput.value.trim();
    const reminderValue = reminderInput.value;

    if (taskValue) {
        addTask(taskValue, reminderValue);
        taskInput.value = ''; // Clear input field
        reminderInput.value = ''; // Clear reminder field
    }
});

function addTask(task, reminder) {
    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');
    li.textContent = task;

    if (reminder) {
        const reminderText = document.createElement('span');
        reminderText.textContent = ` (Reminder: ${new Date(reminder).toLocaleString()})`;
        reminderText.classList.add('reminder');
        li.appendChild(reminderText);
    }
    
    // Mark task as completed
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Remove task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
}
