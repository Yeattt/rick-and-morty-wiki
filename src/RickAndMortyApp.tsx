import { FC, useState } from 'react';
import { CharactersCards, Navbar } from './components';
import { useFetchData } from './hooks/useFetchData';

import { ICharacter } from './interfaces';

import './RickAndMortyApp.css';

const RickAndMortyApp: FC = () => {
   const [filter, setFilter] = useState('');
   const { isLoading, data } = useFetchData(filter);

   const handleSetFilter = (value: string) => {
      setFilter(value);
   }

   return (
      <>
         <Navbar handleSetFilter={handleSetFilter} />

         <div className="feedContainer">
            <div className="feedWrapper">
               {
                  isLoading
                     ? (<h2 className="isLoadingElement">Loading...</h2>)
                     : (
                        data
                           ? (
                              data?.map((character: ICharacter) => (
                                 <CharactersCards key={character?.id} character={character} />
                              ))
                           )
                           : (
                              <h2 className="notFoundMsg">Character not found</h2>
                           )
                     )
               }
            </div>
         </div>
      </>
   );
}

export default RickAndMortyApp;