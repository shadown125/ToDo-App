class List {
    constructor() {
        const btn = document.querySelector('.add__button');
        const input = document.querySelector('.add__input');
        const listItems = document.getElementsByClassName('task-list__single-item');
        const ulItems = document.querySelector('.task-list__item-list');
        const completeUl = document.querySelector('.complete-task__item-list');
        let _taskToday = document.querySelector('.task-list__span');
        let _taskComplete = document.querySelector('.complete-task__span');
        let _counter = 0;

        const remove = (e) => {
            e.target.parentNode.parentNode.remove(this.parentNode);
            taskToday.textContent = listItems.length;
        }


        const complete = (e) => {
            const completeTask = document.createElement('li');
            completeTask.className = 'complete-task__single-item'
            completeUl.appendChild(completeTask);
            completeTask.textContent = e.target.parentNode.parentNode.textContent.slice(0, -14);
            e.target.parentNode.parentNode.remove(this.parentNode);
            _taskToday.textContent = listItems.length;
            _counter++;
            _taskComplete.textContent = _counter;
            
        }
    
        
        const add = (e) => {
            e.preventDefault();
            let taskText = input.value;
            if (taskText == '') return;
            const task = document.createElement('li');
            task.className = 'task-list__single-item';
            task.innerHTML = taskText + "<div class=buttons><button class=task-list__btn-complete>Complete</button>" + "<button class=task-list__btn-delete>Delete</button></div>";
            ulItems.appendChild(task);
            input.value = '';
            _taskToday.textContent = listItems.length;
            task.querySelector('button.task-list__btn-delete').addEventListener('click', remove);
            task.querySelector('button.task-list__btn-complete').addEventListener('click', complete);
            }

        btn.addEventListener('click', add);
    }
}