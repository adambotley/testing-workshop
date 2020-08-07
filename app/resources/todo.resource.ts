import {TodoItem} from "app/types/todo.types"


export interface TodoItemsResource {
  get: ng.resource.IResourceMethod<ng.resource.IResource<TodoItem[]>>
  post: ng.resource.IResourceMethod<ng.resource.IResource<TodoItem>>
}

export interface UpdateTodoItemResource {
  put: ng.resource.IResourceMethod<ng.resource.IResource<TodoItem>>
  delete: ng.resource.IResourceMethod<ng.resource.IResource<null>>
}

export const todoResourceModuleName: string = angular
  .module('testingWorkshop.app.resources.todoResource', [
    'ngResource',
  ])
  .factory('TodoItems', ($resource: ng.resource.IResourceService) => $resource(
    '/api/v1/todo',
    {},
    {
      get: {
        method: 'GET',
        responseType: 'json',
        isArray: true,
      },
      post: {
        method: 'POST',
        responseType: 'json',
      },
    },
  ))
  .factory('UpdateTodoItem', ($resource: ng.resource.IResourceService) => $resource(
    '/api/v1/todo/:id',
    {id: '@id'},
    {
      put: {
        method: 'PUT',
        responseType: 'json',
      },
      delete: {
        method: 'DELETE',
        responseType: 'json',
      },
    },
  ))
  .name
