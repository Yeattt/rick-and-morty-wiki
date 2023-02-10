import { FC } from 'react';

import { Searcher } from '../searcher/Searcher';

import './navbar.css';

type Props = {
   handleSetFilter: (value: string) => void;
}

export const Navbar: FC<Props> = ({ handleSetFilter }) => {
   return (
      <nav className="navbarContainer">
         <div className="navbarWrapper">
            <Searcher handleSetFilter={ handleSetFilter } />
         </div>
      </nav>
   );
}