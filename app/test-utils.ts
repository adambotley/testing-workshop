
/**
 * Mock localStorage/sessionStorage class
 */
export class MockStorage {
  __storageData: [string, string][] = []

  clear() {
    this.__storageData = []
  }

  key(index: number) {
    const item = this.__storageData[index]

    return item ? item[0] : null
  }

  getItem(key: string) {
    const item = this.__storageData.find(x => x[0] === key)

    return item ? item[1] : null
  }

  removeItem(key: string) {
    this.__storageData = this.__storageData.filter(x => x[0] !== key)
  }

  setItem(key: string, value: string) {
    const dataIndex = this.__storageData.findIndex(x => x[0] === key)

    if (dataIndex >= 0) {
      this.__storageData = this.__storageData
        .map((data, index) => index === dataIndex ? [key, value] : data)
    } else {
      this.__storageData.push([key, value])
    }
  }

  get length() {
    return this.__storageData.length
  }
}

/**
 * An AngularJS scope object with a component controller class.
 */
export interface ScopeWithController<Controller> extends ng.IScope {
  $ctrl: Controller
}

/**
 * An AngularJS component with a particular controller.
 */
export interface Component<Controller> extends ng.IAugmentedJQuery {
  isolateScope: <T extends ng.IScope>() => T & ScopeWithController<Controller>
}

export const run = function<Controller extends Object>(
  templateString: string,
  parentScopeOverride?: any,
  controllerClass?: { new (...args: any[]): Controller },
): Component<Controller> {
  // TypeScript isn't capable of checking the type for this, because it
  // cannot figure out that the value is assigned after inject(...)
  let $rootScope!: ng.IRootScopeService
  let $compile!: ng.ICompileService

  inject((
    _$rootScope_: ng.IRootScopeService,
    _$compile_: ng.ICompileService,
  ) => {
    $rootScope = _$rootScope_
    $compile = _$compile_
  })

  const parentScope = parentScopeOverride != null && parentScopeOverride.$digest == null
    // If we pass a plain object, then use it to build a scope
    // from the root scope to use.
    ? Object.assign($rootScope.$new(), parentScopeOverride)
    : parentScopeOverride || $rootScope.$new()

  const preCompilationElement = angular.element(templateString)

  const element = $compile(preCompilationElement)(parentScope)
  parentScope.$digest()

  return element as Component<Controller>
}
