import {todoModuleName} from './app/components/todo'
import {todoListServiceModuleName} from 'app/services'

angular
  .module('testingWorkshop', [
    'ngRoute',
    todoModuleName,
    todoListServiceModuleName,
  ])
  .config((
    $routeProvider: ng.route.IRouteProvider,
  ) => {
    $routeProvider
      .when('/', {
        template: '<todo></todo>',
      })
      .otherwise('/')
  })
