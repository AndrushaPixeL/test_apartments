import { createActionCreators, ImmerReducer } from 'immer-reducer'
import { IData, Info, ICharacter } from './thunk/loadData';


export interface MyImmerReducerInitialStateInt {
  data: IData
  info: Info
  characters: Array<ICharacter>
}
export const myImmerReducerInitialState: MyImmerReducerInitialStateInt = {
  data: { info: {count: 0, next: "", pages: 0, prev: ""}, results: []},
  info: {count: 0, next: "", pages: 0, prev: ""},
  characters: []
}

class MyImmerReducer extends ImmerReducer<MyImmerReducerInitialStateInt> {
  setData(data: IData) {
  
    this.draftState.data = data
    this.draftState.info = data.info
    this.draftState.characters = data.results

  }
  // setIsLoading(isLoading: boolean) {
  //   this.draftState.isLoading = isLoading
  // }
}

export const MyImmerActionCreater = createActionCreators(MyImmerReducer)

export default MyImmerReducer
