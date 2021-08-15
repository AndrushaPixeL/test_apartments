import { useEffect, useMemo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useMappedState } from 'redux-react-hook'
import { GlobalState } from '../../app/store'
import { fetchData } from './../thunk/loadData';

function useInitialization() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
}
function useState() {
  const mapState = useCallback(
    (state: GlobalState) => ({
      data: state.data,
      info: state.info,
      characters: state.characters,
    }),
    []
  )
  return useMappedState(mapState)
}
function useEventHandlers() {
  //  const dispatch = useDispatch()
  const eventHandlers = useMemo(
    () => ({
      loadData: (id: number) => {
      },
    }),
    []
  )

  return eventHandlers
}
export function useAppPresenter() {
  useInitialization()
  const values = useState()
  const eventHandlers = useEventHandlers()

  return {
    values,
    eventHandlers,
  }
}
