import {TodoItem} from "app/types/todo.types"

export interface TodoListControllerBindings {
    todos: TodoItem[]
    onTodoChanged: () => void
}

export class TodoListController implements TodoListControllerBindings {
    todos!: TodoItem[]
    onTodoChanged!: () => void

    constructor() {}
}
