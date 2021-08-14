import { MyImmerActionCreater } from "../appReducer"

export type Origin = {
  name: string
  url: string
}
export type Location = {
  name: string
  url: string
}
export interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: Array<string>
  url: string
  created: string
}

export const fetchCharacters = () => {
  return (dispatch: (callback: any) => void) => {
    // dispatch(MyImmerActionCreater.setIsLoading(true))
    fetch('https://rickandmortyapi.com/api/character/5')
      .then((response): Promise<ICharacter[]> => response.json())
      .then((data) => {
        console.log(data, 123)

        dispatch(MyImmerActionCreater.setCharacters(data))
        // dispatch(MyImmerActionCreater.setIsLoading(false))
      })
  }
}
