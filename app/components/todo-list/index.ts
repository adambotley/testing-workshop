
import {TodoListController} from './todo-list.component'

export const todoListModuleName: string = angular
  .module('testingWorkshop.app.components.todoList', [
  ])
  .component('todoList', {
    template: `
    <div class="col-xs-12">
        <table class="table" ng-show="$ctrl.todos.length > 0">
            <caption>Count: {{$ctrl.todos.length}}</caption>
            <tr ng-repeat="todo in $ctrl.todos track by $index">
                <td ng-class="{'task-done': todo.done}">{{todo.id}}</td>
                <td ng-class="{'task-done': todo.done}">{{todo.title}}</td>
                <td>
                    <button class="pull-right btn btn-default"
                        ng-click="$ctrl.onDone({todo: todo})"
                        ng-show="!todo.done"
                    >
                        Done
                    </button>
                    <button class="pull-right btn btn-default"
                        ng-click="$ctrl.onUndone({todo: todo})"
                        ng-show="todo.done"
                    >
                        Redo
                    </button>
                </td>
            </tr>
        </table>
    </div>
    `,
    bindings: {
        todos: '<',
        onDone: '&',
        onUndone: '&',
    },
    controller: TodoListController,
})
  .name
