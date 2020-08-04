import TodoListService from './todo-list.service';
import { todoResourceModuleName } from 'app/resources/todo.resource';

export const todoListServiceModuleName = angular
    .module('testingWorkshop.app.services.todoList', [
        todoResourceModuleName,
    ])
    .service('todoListService', TodoListService)
    .name
