// Cache elements using selectElementById and querySelector/querySelectorAll
const todoInput = document.getElementById('todoinput');
const addTaskBtn = document.getElementById('addtask-btn');
const todoList = document.getElementById('todolist');
const todoItems = document.querySelectorAll('#todolist li');

// Use parent-child-sibling relationships to navigate elements
function removeTask(event) {
	const li = event.target.parentNode;
	todoList.removeChild(li);
}

// Iterate over a collection of elements
todoItems.forEach((item) => {
	item.addEventListener('click', removeTask);
});

// Create an element using createElement
function addTask() {
	const task = todoInput.value.trim();
	if (task) {
		const li = document.createElement('li');
		li.textContent = task;
		const removeBtn = document.createElement('button');
		removeBtn.textContent = 'Remove';
		removeBtn.addEventListener('click', removeTask);
		li.appendChild(removeBtn);
		todoList.appendChild(li);
		todoInput.value = '';
	}
}

// Use appendChild and/or prepend to add new elements
addTaskBtn.addEventListener('click', addTask);

// Modify HTML or text content of an element
todoInput.addEventListener('input', () => {
	addTaskBtn.textContent = `Add Task (${todoInput.value.length} characters)`;
});

// Modify style and/or CSS classes of an element
todoList.addEventListener('click', (event) => {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('completed');
	}
});

// Register at least two different event listeners
todoInput.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		addTask();
	}
});