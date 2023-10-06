new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: [],
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push(this.newTask);
                this.newTask = '';
            }
        },
        editTask(index) {
            const updatedTask = prompt('Edit task:', this.tasks[index]);
            if (updatedTask !== null) {
                this.tasks[index] = updatedTask;
            }
        },
        deleteTask(index) {
            if (confirm('Are you sure you want to delete this task?')) {
                this.tasks.splice(index, 1);
            }
        },
    },
});