import {todoFormModuleName} from "."
import {run} from "app/test-utils"
import {TodoFormController, TodoFormControllerBindings} from "./todo-form.component"

describe('TodoFormComponent', () => {
  let bindings: TodoFormControllerBindings

  const runComponent = () => {
    return run(`
      <todo-form
        on-new-todo="onNewTodo(title)"
      ></todo-form>
    `,
    bindings,
    TodoFormController)
  }

  // Mock the module being tested. Remember this loads the module dependencies for us
  beforeEach(angular.mock.module(todoFormModuleName))

  beforeEach(() => {
    bindings = {
      onNewTodo: jest.fn(),
    }
  })

  it('calls addTodo when saving ', () => {
    const element = runComponent()
    const scope = element.isolateScope()
    const $ctrl = scope.$ctrl
    // set the value on the input model
    $ctrl.value = 'foo'

    // Spy on the addTodo method

    const saveButton = element.find('[data-selenium="save-button"]')
    // click the save button
    saveButton.click()
    scope.$digest()

    // assert the addTodo method was called

    // assert that the onNewTodo binding was called
    // and with the expected value
  })
})
