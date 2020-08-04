import { TodoItem } from "../../types/todo.types";
import { TodoListController } from "../todo-list/todo-list.component";
import TodoListService from "../../services/todo-list.service";

export class TodosController {
  todoList: any[] = []

  constructor(
    private todoListService: TodoListService,
  ) {
    this.todoListService.getAll()
      .then((todos) => this.todoList = todos);
  }

  addNewElement(title: string) {
    const todo: TodoItem = {
      id: this.todoList.length + 1,
      title,
      done: false,
    };

    this.todoListService.store(todo)
      .then((t) => {
        this.todoList.push(t);
      })
      .catch(console.error);
  }

  markDone(todo: TodoItem) {
    todo.done = true;
    this.todoListService.update(todo);
  }

  markUndone(todo: TodoItem) {
    todo.done = false;
    this.todoListService.update(todo);
  }
}
