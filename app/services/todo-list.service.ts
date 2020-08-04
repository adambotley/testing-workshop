import {TodoItem} from "app/types/todo.types"
import {TodoItemsResource, UpdateTodoItemResource} from "app/resources/todo.resource"


export default class TodoListService {
    static TASKS_KEY = 'testing-workshop'

    constructor(
        private $q: ng.IQService,
        private $window: ng.IWindowService,
        private TodoItems: TodoItemsResource,
        private UpdateTodoItem: UpdateTodoItemResource,
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

    getAll(): TodoItem[] {
        return this.getAllStored()
    }

    store(todo: TodoItem): void {
        const todos = this.getAllStored()
        todos.push(todo)
        this.storeAll(todos)
    }

    update(todo: TodoItem): void {
        const todos = this.getAllStored().map((task) => task.id === todo.id ? todo : task)
        this.storeAll(todos)
    }

    /**
     * Unused method for storing todos via an API request
     */
    storeRemote(todo: TodoItem): ng.IPromise<TodoItem | void> {
        const todos = this.getAllStored()
        todos.push(todo)

        return this.TodoItems.post(todos)
        .$promise
        .catch(console.error)
    }

    /**
     * Unused method for retrieving todos via an API request
     */
    getAllRemote(): ng.IPromise<TodoItem[] | void> {
        return this.TodoItems.get()
        .$promise
        .then((todos) => {
            this.storeAll(todos)

            return todos
        })
        .catch(console.error)
    }

    /**
     * Unused method for updating a todo via an API request
     */
    updateRemote(todo: TodoItem): ng.IPromise<TodoItem | void> {
        return this.UpdateTodoItem.put({id: todo.id}, todo)
        .$promise
        .catch(console.error)
    }
}
