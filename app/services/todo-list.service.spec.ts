import TodoListService from "./todo-list.service"
import {todoListServiceModuleName} from "."
import { MockStorage } from "app/test-utils"

describe('TodoListService', () => {
  let $httpBackend: ng.IHttpBackendService
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
    _$httpBackend_: ng.IHttpBackendService,
    _$q_: ng.IQService,
    _$timeout_: ng.ITimeoutService,
    _todoListService_: TodoListService,
  ) => {
    $httpBackend = _$httpBackend_
    $q = _$q_
    $timeout = _$timeout_
    todoListService = _todoListService_
  }))

  it('sends post request to store current todo items', () => {
    // setup current data
    const storedTodos = [{
      id: 0,
      title: 'foo',
      done: false,
    }]
    localStorageMock.setItem(TodoListService.TASKS_KEY, JSON.stringify(storedTodos))

    // create new todo to store
    const newTodo = {
      id: 1,
      title: 'bar',
      done: false,
    }

    todoListService.storeRemote(newTodo)

    // flush http queue
    $httpBackend.flush()
  })
})
