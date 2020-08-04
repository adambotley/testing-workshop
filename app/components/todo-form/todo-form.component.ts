export interface TodoFormControllerBindings {
    onNewElement: (args: {title: string}) => void
}

export class TodoFormController {
    onNewElement!: TodoFormControllerBindings['onNewElement']
    value: string = ''

    constructor() {}

    addTodo() {
        this.onNewElement({title: this.value});
        this.value = '';
    }
}
