
import {TodoFormController} from './todo-form.component'

export const todoFormModuleName: string = angular
  .module('testingWorkshop.app.components.todoForm', [
  ])
  .component('todoForm', {
    template: `
    <div class="row">
      <div class="input-group mb-3">
        <input type="text"
          class="form-control"
          placeholder="Add Todo..."
          ng-model="$ctrl.value"
          autocomplete="off"
        />
        <div class="input-group-append">
          <button
            type="button"
            class="btn btn-primary"
            ng-disabled="!$ctrl.value"
            ng-click="$ctrl.addTodo()"
          >Save</button>
        </div>
      </div>
    </div>
    `,
    bindings: {
        onNewTodo: '&'
    },
    controller: TodoFormController
})
  .name
