import { FormEvent, FC, useState } from 'react';

import './searcher.css';

type Props = {
   handleSetFilter: (value: string) => void;
}

export const Searcher: FC<Props> = ({ handleSetFilter }) => {
   const [inputValue, setInputValue] = useState('');

   const handleInputValue = (event: FormEvent<HTMLInputElement>) => {
      setInputValue(event.currentTarget.value);
   }

   const handleOnFormSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleSetFilter(inputValue);
   }
   
   return (
      <form onSubmit={ handleOnFormSubmit }>
         <input
            className="inputSearcher"
            onChange={ handleInputValue }
            type="text"
            value={ inputValue }
            placeholder="Search a character..."
         />
      </form>
   );
}
