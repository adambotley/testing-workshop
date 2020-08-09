import TodoListService from './todo-list.service'

export const todoListServiceModuleName = angular
    .module('testingWorkshop.app.services.todoList', [])
    .service('todoListService', TodoListService)
    .name
