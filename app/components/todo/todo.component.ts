import {TodoItem} from "app/types/todo.types"
import TodoListService from "app/services/todo-list.service"
import {openDeleteTodoModal} from "app/components/delete-todo-modal"

export class TodoController {
  todoList: any[] = []
  title = 'Testing Workshop'

  constructor(
    private $uibModal: ng.ui.bootstrap.IModalService,
    private todoListService: TodoListService,
  ) {
    this.todoList = this.todoListService.getAll()
  }

  addNewTodo(title: string) {
    const todo: TodoItem = {
      id: this.todoList.length + 1,
      title,
      done: false,
    }

    this.todoList = this.todoListService.store(todo)
  }

  deleteTodo(todo: TodoItem): void {
    openDeleteTodoModal(this.$uibModal, todo)
    .result
    .then((confirmed) => {
        if (confirmed) {
          this.todoList = this.todoListService.remove(todo)
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
