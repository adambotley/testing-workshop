
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
