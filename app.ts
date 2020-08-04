import {todosModuleName} from './app/components/todos'
import {todoListServiceModuleName} from 'app/services'

angular
  .module('testingWorkshop', [
    'ngRoute',
    todosModuleName,
    todoListServiceModuleName,
  ])
  .config((
    $routeProvider: ng.route.IRouteProvider,
  ) => {
    $routeProvider
      .when('/', {
        template: '<todos></todos>',
      })
      .otherwise('/')
  })
