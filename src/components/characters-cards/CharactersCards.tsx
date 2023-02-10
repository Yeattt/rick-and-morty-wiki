import { FC } from 'react';

import { ICharacter } from '../../interfaces/character';

import './characters.css';

type Props = {
   character: ICharacter;
}

export const CharactersCards: FC<Props> = ({ character }) => {
   return (
      <div className="cardContainer">
         <div className="cardLeft">
            <img src={ character.image } alt={ character.name } />
         </div>

         <div className="cardRight">
            <h2 className="characterName">{ character.name }</h2>

            <p className="attributes">Specie: { character.species }</p>
            <p className="attributes">Gender: { character.gender }</p>
            <p className="attributes">Status: { character.status }</p>
            <p className="attributes">Origin: { character.origin.name }</p>
         </div>
      </div>
   );
}
