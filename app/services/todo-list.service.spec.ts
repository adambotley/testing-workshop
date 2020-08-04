import TodoListService from "./todo-list.service"
import {todoListServiceModuleName} from "."

describe('TodoListService', () => {
  let $q: ng.IQService
  let $timeout: ng.ITimeoutService
  let todoListService: TodoListService

  // Mock the module being tested. Remember this loads the module dependencies for us
  beforeEach(angular.mock.module(todoListServiceModuleName))

  // mock dependencies by using $provide here
  beforeEach(angular.mock.module(($provide: ng.auto.IProvideService) => {
    //...
  }))

  // Get local references to angular components/services
  beforeEach(inject((
    _$q_: ng.IQService,
    _$timeout_: ng.ITimeoutService,
    _todoListService_: TodoListService,
  ) => {
    $q = _$q_
    $timeout = _$timeout_
    todoListService = _todoListService_
  }))
})
