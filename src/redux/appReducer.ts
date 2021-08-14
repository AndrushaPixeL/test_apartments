import { createActionCreators, ImmerReducer } from 'immer-reducer'
import { ICharacter, Origin, Location } from './thunk/loadData';


export interface MyImmerReducerInitialStateInt {
  characters: Array<ICharacter>
}
export const myImmerReducerInitialState: MyImmerReducerInitialStateInt = {
  characters: []
}

class MyImmerReducer extends ImmerReducer<MyImmerReducerInitialStateInt> {
  setCharacters(characters: Array<ICharacter>) {
    this.draftState.characters = characters
  }
  // setIsLoading(isLoading: boolean) {
  //   this.draftState.isLoading = isLoading
  // }
}

export const MyImmerActionCreater = createActionCreators(MyImmerReducer)

export default MyImmerReducer
