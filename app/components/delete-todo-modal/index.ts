import {TodoItem} from "app/types/todo.types"
import {DeleteTodoModalController} from "./delete-todo-modal"

export const openDeleteTodoModal = (
  $uibModal: ng.ui.bootstrap.IModalService,
  todo: TodoItem,
): ng.ui.bootstrap.IModalInstanceService => (
  $uibModal.open({
    template: `
      <div class="modal-header">
        <div class="modal-title">Delete Todo</div>
      </div>
      <div class="modal-body">
        <p>{{$ctrl.message}}</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary"
          type='submit'
          ng-click='$ctrl.confirm()'
        >Confirm</button>
        <button class="btn btn-secondary"
          type='cancel'
          ng-click='$ctrl.cancel()'
        >Cancel</button>
      </div>
    `,
    controller: DeleteTodoModalController,
    controllerAs: '$ctrl',
    animation: false,
    resolve: {
      todo: () => todo,
    },
    size: 'md',
  })
)
