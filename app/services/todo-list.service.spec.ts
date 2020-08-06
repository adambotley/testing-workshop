import {MockStorage} from "app/test-utils"
import {TodoItem} from "app/types/todo.types"
import TodoListService from "./todo-list.service"
import {todoListServiceModuleName} from "."

describe('TodoListService', () => {
  let localStorageMock: MockStorage
  let $q: ng.IQService
  let $timeout: ng.ITimeoutService
  let $window: any
  let todoListService: TodoListService

  // extract the item from our mock storage
  // TodoListService has a static key which we expect to be used
  const getStored = () =>
    JSON.parse(localStorageMock.getItem(TodoListService.TASKS_KEY) || '')

  const setStored = (toStore: TodoItem[]): void => {
    localStorageMock.setItem(
      TodoListService.TASKS_KEY,
      JSON.stringify(toStore),
    )
  }

  // Mock the module being tested. Remember this loads the module dependencies for us
  beforeEach(angular.mock.module(todoListServiceModuleName))

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

  it('returns expected data from localStorage', () => {
    const expectedStored = [{
      id: 0,
      title: 'foo',
      done: false,
    }]
    setStored(expectedStored)

    expect(todoListService.getAll()).toEqual(expectedStored)
  })
  it('returns empty array if no data in localStorage', () => {
    expect(todoListService.getAll()).toEqual([])
  })

  it('stores a single item in storage', () => {
    const todo: TodoItem = {
      id: 0,
      title: 'foo',
      done: false,
    }

    todoListService.store(todo)

    expect(localStorageMock.length).toBe(1)
    expect(getStored()).toEqual([todo])
  })

  it('adds stored todos with existing data', () => {
    const existingTodo: TodoItem = {
      id: 0,
      title: 'foo',
      done: false,
    }
    const newTodo: TodoItem = {
      id: 1,
      title: 'bar',
      done: false,
    }

    setStored([existingTodo])

    todoListService.store(newTodo)

    expect(localStorageMock.length).toBe(1)
    expect(getStored()).toEqual([existingTodo, newTodo])
  })
})
