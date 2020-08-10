
import {TodoListController} from './todo-list.component'

export const todoListModuleName: string = angular
  .module('testingWorkshop.app.components.todoList', [
      'ui.bootstrap',
  ])
  .component('todoList', {
    template: `
    <div class="row">
        <table class="table table-hover" ng-show="$ctrl.todos.length > 0">
            <caption>Count: {{$ctrl.todos.length}}</caption>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Done</th>
              <th scope="col">Delete</th>
            </tr>
            <tr ng-repeat="todo in $ctrl.todos track by todo.id">
                <td scope="col" ng-class="{'task-done': todo.done}">{{todo.id}}</td>
                <td scope="col" ng-class="{'task-done': todo.done}">{{todo.title}}</td>
                <td scope="col">
                    <input type="checkbox"
                        ng-model="todo.done"
                        class="pull-right btn btn-default"
                        ng-change="$ctrl.onTodoChanged({todo: todo})"
                    />
                </td>
                <td scope="col">
                    <button
                        type="button"
                        class="pull-right btn btn-danger"
                        ng-click="$ctrl.deleteTodo(todo)"
                    >
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    </button>
                </td>
            </tr>
        </table>
    </div>
    `,
    bindings: {
        todos: '<',
        onTodoChanged: '&',
        onDeleteTodo: '&',
    },
    controller: TodoListController,
})
  .name
