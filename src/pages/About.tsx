import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import CharacterCard from '../components/card/CharacterCard'
import { useAppPresenter } from '../redux/presenters/AppPresenter'
import styled from 'styled-components'

export const About: React.FC = () => {
  const { values, eventHandlers } = useAppPresenter()
  const history = useHistory()

  return (
    <Fragment>
      <button
        type='button'
        className='btn'
        cy-data='go-back-button'
        onClick={() => history.push('/')}
      >
        Go back
      </button>
      <div>
        {values.characters.map((el) => {
          return (
            
            <Wrapper key={el.id}>
              <div>
                <CharacterCard character={el} />
              </div>
            </Wrapper>
          )
        })}
      </div>
    </Fragment>
  )
}

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 24px;
  width: 200px;
  height: 300px;
`