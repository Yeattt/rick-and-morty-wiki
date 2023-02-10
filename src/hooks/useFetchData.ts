import { useState, useEffect } from 'react';

import { fetchRickMortyApi } from '../helpers/fetchRickMortyApi';
import { ICharacter } from '../interfaces';

export const useFetchData = (characterName: string) => {
   const [isLoading, setIsLoading] = useState(true);
   const [data, setData] = useState<ICharacter[] | Record<string, any>>([]);

   const getData = async () => {
      let finalResults: ICharacter[] = [];

      if (characterName !== ''.trim()) {
         const { results } = await fetchRickMortyApi(`character/?name=${characterName}`);
         finalResults = results;
      } else {
         const { results } = await fetchRickMortyApi('character');
         finalResults = results;
      }

      const cleanedResults: ICharacter[] = finalResults?.map((result: ICharacter) => {
         return {
            id: result.id,
            name: result.name,
            image: result.image,
            species: result.species,
            gender: result.gender,
            status: result.status,
            origin: result.origin
         }
      });

      setData(cleanedResults);
      setIsLoading(false);
   }

   useEffect(() => {
      getData();
   }, [characterName]);

   return {
      isLoading,
      data
   }
}