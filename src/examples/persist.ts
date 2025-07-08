import { Persist } from "../decorators/persist.decorator"

export class TestPersist {
  private _id: string

  @Persist
  get id() {
    return this._id
  }
  set id(id: string) {
    this._id = id
  }

}
