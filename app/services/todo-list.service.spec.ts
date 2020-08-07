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

    const requestData = [
      // data currently stored
      ...storedTodos,
      // plus new todo
      newTodo,
    ]

    // expect post request,
    $httpBackend.expectPOST('/api/v1/todo', requestData).respond(200, newTodo)

    todoListService.storeRemote(newTodo)

    // flush http queue
    $httpBackend.flush()
  })

  it('returns given todo item after updating remotely', () => {
    const todo = {
      id: 123,
      title: 'bar',
      done: false,
    }

    $httpBackend.expectPUT(`/api/v1/todo/${todo.id}`).respond(200, todo)

    // updateRemote returns a promise
    // so we can chain it to see the returned value
    todoListService.updateRemote(todo)
      .then((returnedTodo) => {

        /**
         * angular adds $ prefixed properties to objects it passes between components
         * and from ajax requests. (eg. $promise, $resolved)
         *
         * We need to clean these properties from the object using angular.toJson
         */
        const cleanedReturn = JSON.parse(angular.toJson(returnedTodo))
        expect(cleanedReturn).toEqual(todo)
        done()
      })

    // flush http queue
    $httpBackend.flush()
  })
})
