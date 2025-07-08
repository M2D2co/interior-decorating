import { TestPersist } from "../examples/persist"

describe('Persist Accessor Decorator', () => {
  let example: TestPersist
  let localStorage: any

  beforeEach(() => {
    example = new TestPersist()
    localStorage = globalThis.localStorage
  })

  it('continues to get/set as expected', () => {
    example.id = 'foo123'
    expect(example.id).toEqual('foo123')
  })

  it('sets to localStorage', () => {
    example.id = 'foo55'
    expect(localStorage.getItem('TestPersist/Persist/id')).toEqual('foo55')
  })

  it('gets from localStorage', () => {
    localStorage.setItem('TestPersist/Persist/id', 'foo77')
    expect(example.id).toEqual('foo77')
  })

  it('overrides localStorage on set', () => {
    localStorage.setItem('TestPersist/Persist/id', 'bar13')
    example.id = 'baz92'
    expect(example.id).toEqual('baz92')
  })

})
