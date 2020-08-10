import {TodoItem} from "app/types/todo.types"
import TodoListService from "app/services/todo-list.service"
import { openDeleteTodoModal } from "../delete-todo-modal"

export class TodosController {
  todoList: any[] = []
  title = 'Testing Workshop'

  constructor(
    private $uibModal: ng.ui.bootstrap.IModalService,
    private todoListService: TodoListService,
  ) {
    this.todoListService.getAll()
      .then((todos) => this.todoList = todos)
  }

  addNewTodo(title: string) {
    const todo: TodoItem = {
      id: this.todoList.length + 1,
      title,
      done: false,
    }

    this.todoListService.store(todo)
      .then((t) => {
        this.todoList.push(t)
      })
      .catch(console.error)
  }

  deleteTodo(todo: TodoItem): void {
    openDeleteTodoModal(this.$uibModal, todo)
    .result
    .then((confirmed) => {
        if (confirmed) {
            this.todoListService.remove(todo)
            .then((todos) => {
              this.todoList =  todos
            })
        }
    })
    .catch((error) => {
        console.log(error)
    })
  }

  onTodoChanged(todo: TodoItem) {
    this.todoListService.update(todo)
  }
}
