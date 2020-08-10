import { TodoItem } from "app/types/todo.types"
export class DeleteTodoModalController {
  constructor(
    private $uibModalInstance: ng.ui.bootstrap.IModalInstanceService,
    public todo: TodoItem,
  ) {}

  get message(): string {
    return `Are you sure you want to delete "${this.todo.title}"?`
  }

  cancel(): void {
    this.$uibModalInstance.close(false)
  }

  confirm(): void {
    this.$uibModalInstance.close(true)
  }
}
