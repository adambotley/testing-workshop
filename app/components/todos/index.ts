import {TodosController} from './todos.component'
import {todoFormModuleName} from 'app/components/todo-form'
import {todoListModuleName} from 'app/components/todo-list'

export const todosModuleName = angular
  .module('testingWorkshop.app.components.todos', [
    todoFormModuleName,
    todoListModuleName,
  ])
  .component('todos', {
    template: `
        <div>
          <h2 class="text-center">{{$ctrl.title}}</h2>
          <todo-form
            on-new-todo="$ctrl.addNewTodo(title)"
          ></todo-form>
          <todo-list
            todos="$ctrl.todoList"
            on-todo-changed="$ctrl.onTodoChanged(todo)"
            on-delete-todo="$ctrl.deleteTodo(todo)"
          ></todo-list>
        </div>
    `,
    controller: TodosController,
  })
  .name
