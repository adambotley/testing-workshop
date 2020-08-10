import {TodoItem} from "app/types/todo.types"
export interface TodoListControllerBindings {
    todos: TodoItem[]
    onTodoChanged: () => void
    onDeleteTodo: (args: {todo: TodoItem}) => void
}

export class TodoListController implements TodoListControllerBindings {
    todos!: TodoItem[]
    onTodoChanged!: TodoListControllerBindings['onTodoChanged']
    onDeleteTodo!: TodoListControllerBindings['onDeleteTodo']

    deleteTodo(todo: TodoItem): void {
        this.onDeleteTodo({todo})
    }
}
