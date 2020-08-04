import {TodosController} from './todos.component'
import {todoFormModuleName} from '../todo-form'
import {todoListModuleName} from '../todo-list'

export const todosModuleName = angular
  .module('testingWorkshop.app.components.todos', [
    todoFormModuleName,
    todoListModuleName,
  ])
  .component('todos', {
    template: `
        <div class="row">
            <h1 class="text-center">{{$ctrl.title}}</h1>
            <todo-form on-new-element="$ctrl.addNewElement(title)"></todo-form>
            <hr/>
            <todo-list
              todos="$ctrl.todoList"
              on-done="$ctrl.markDone(todo)"
              on-undone="$ctrl.markUndone(todo)"
            ></todo-list>
        </div>
    `,
    controller: TodosController,
  })
  .name
