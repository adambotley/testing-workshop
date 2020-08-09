export interface TodoFormControllerBindings {
    onNewTodo: (args: {title: string}) => void
}

export class TodoFormController {
    onNewTodo!: TodoFormControllerBindings['onNewTodo']
    value: string = ''

    constructor() {}

    addTodo() {
        this.onNewTodo({title: this.value})
        this.value = ''
    }
}
