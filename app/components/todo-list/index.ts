
import {TodoListController} from './todo-list.component'

export const todoListModuleName: string = angular
  .module('testingWorkshop.app.components.todoList', [
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
            </tr>
        </table>
    </div>
    `,
    bindings: {
        todos: '<',
        onTodoChanged: '&',
    },
    controller: TodoListController,
})
  .name
