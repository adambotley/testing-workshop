import TodoListService from "./todo-list.service"
import {todoListServiceModuleName} from "."
import { MockStorage } from "app/test-utils"

describe('TodoListService', () => {
  let $q: ng.IQService
  let $timeout: ng.ITimeoutService
  let $window: Partial<ng.IWindowService>
  let todoListService: TodoListService
  let localStorageMock: Storage

  // Mock the module being tested. Remember this loads the module dependencies for us
  beforeEach(angular.mock.module(todoListServiceModuleName))

  // mock dependencies by using $provide here
  beforeEach(angular.mock.module(($provide: ng.auto.IProvideService) => {
    // Instantiate a new MockStorage object before each test
    localStorageMock = new MockStorage()

    // assign it to a mock $window object
    $window = {
      localStorage: localStorageMock,
    }

    // replace the normal $window with out own using $provide
    $provide.constant('$window', $window)
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
