import {TodoItem} from "app/types/todo.types"


export default class TodoListService {
    static TASKS_KEY = 'testing-workshop'

    constructor(
        private $q: ng.IQService,
        private $window: ng.IWindowService,
    ) {}

    private get storage(): Storage {
        return this.$window.localStorage
    }

    private getAllStored(): TodoItem[] {
        return JSON.parse(this.storage.getItem(TodoListService.TASKS_KEY) || '[]')
    }

    private storeAll(todos: TodoItem[]) {
        this.storage.setItem(TodoListService.TASKS_KEY, JSON.stringify(todos))
    }

    store(todo: TodoItem) {
        const todos = this.getAllStored()
        todos.push(todo)
        this.storeAll(todos)

        return this.$q.resolve(todo)
    }

    getAll() {
        return this.$q.resolve(this.getAllStored())
    }

    update(todo: TodoItem) {
        const todos = this.getAllStored().map((task) => task.id === todo.id ? todo : task)
        this.storeAll(todos)

        return this.$q.resolve(todo)
    }

    remove(todo: TodoItem) {
        const todos = this.getAllStored().filter((task) => task.id !== todo.id)
        this.storeAll(todos)

        return this.$q.resolve(todos)
    }
}
