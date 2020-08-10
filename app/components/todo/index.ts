import {TodoController} from './todo.component'
import {todoFormModuleName} from 'app/components/todo-form'
import {todoListModuleName} from 'app/components/todo-list'
import {todoListServiceModuleName} from 'app/services'

export const todoModuleName = angular
  .module('testingWorkshop.app.components.todo', [
    'ui.bootstrap',
    todoFormModuleName,
    todoListModuleName,
    todoListServiceModuleName,
  ])
  .component('todo', {
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
    controller: TodoController,
  })
  .name
