
import {TodoFormController} from './todo-form.component'

export const todoFormModuleName: string = angular
  .module('testingWorkshop.app.components.todoForm', [])
  .component('todoForm', {
    template: `
        <form ng-submit="$ctrl.addTodo()">
          <div class="row">
            <div class="col-xs-10">
                <input ref="todoInput" type="text" class="form-control" id="textInput"
                  placeholder="Add Todo..."
                  ng-model="$ctrl.value"
                  autocomplete="off"
                />
            </div>
            <div class="col-xs-2">
                <input type="submit" class="btn btn-default" value="Save"/>
            </div>
          </div>
        </form>
    `,
    bindings: {
        onNewTodo: '&'
    },
    controller: TodoFormController
})
  .name
