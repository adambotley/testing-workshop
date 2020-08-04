import { TodoItem } from "app/types/todo.types";

export interface TodoListControllerBindings {
    todos: TodoItem[]
    onDone: (args: {todo: TodoItem}) => void
    onUndone: (args: {todo: TodoItem}) => void
}

export class TodoListController implements TodoListControllerBindings {
    todos!: TodoItem[]
    onDone!: (args: {todo: TodoItem}) => void
    onUndone!: (args: {todo: TodoItem}) => void

    constructor() {}
}
