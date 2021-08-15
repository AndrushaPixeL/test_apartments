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
  created: string
  episode: Array<string>
  gender: string
  id: number
  image: string
  location: Location
  name: string
  origin: Origin
  species: string
  status: string
  type: string
  url: string
}

export type Info = {
  count: number
  next: ""
  pages: number
  prev: ""
}
export interface IData {
  info: Info
  results: Array<ICharacter>
}

export const fetchData = () => {
  return (dispatch: (callback: any) => void) => {
    // dispatch(MyImmerActionCreater.setIsLoading(true))
    fetch('https://rickandmortyapi.com/api/character')
      .then((response): Promise<IData> => response.json())
      .then((data) => {
        
        dispatch(MyImmerActionCreater.setData(data))
        // dispatch(MyImmerActionCreater.setIsLoading(false))
      })
  }
}
