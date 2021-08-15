import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { ICharacter } from '../../redux/thunk/loadData';
import './card.css'

interface ICharacterCardProps {
    character: ICharacter
}

const CharacterCard: React.FunctionComponent<ICharacterCardProps> = ( props ) => {
    console.log(111111111, props)

  return (
    <Card className="card">
      <CardContent>
          <div><img src={props.character.image} className="imgCharacter"></img></div>
          <div>{props.character.name}</div>
          <div>{props.character.origin.name}</div>

          <div>{props.character.species}</div>
         
         
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default CharacterCard
