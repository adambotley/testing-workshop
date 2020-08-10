import {todoModuleName} from "."
import {run, MockStorage} from "app/test-utils"
import {TodoController} from "./todo.component"
import TodoListService from "app/services/todo-list.service"
import * as confirmModal from 'app/components/delete-todo-modal'

describe('TodoComponent', () => {
  let $q: ng.IQService
  let $timeout: ng.ITimeoutService
  let todoListService: TodoListService

  const runComponent = () => {
    return run<TodoController>(`<todo></todo>`)
  }

  // Mock the module being tested. Remember this loads the module dependencies for us
  beforeEach(angular.mock.module(todoModuleName))

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

  it('removes todo after confirmation from user', () => {
    const todoToDelete = {id: 1, title: 'var', done: false}
    const element = runComponent()
    const scope = element.isolateScope()
    const $ctrl = scope.$ctrl

    // modal defer to use when mocking
    const modalDefer = $q.defer()

    // spy on open modal method and return promise

    // spy on remove method on storage service

    $ctrl.deleteTodo(todoToDelete)

    // resolve the modal promise
    modalDefer.resolve(true)
    // flush $timeout to trigger digest on promise resolving
    $timeout.flush()

    // expect modal to have been opened

    // expect remove method to be called
  })
})
