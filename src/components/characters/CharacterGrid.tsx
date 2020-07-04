import React from 'react';

import { Character } from '../../App';

interface Props {
  isLoading: boolean;
  items: Character[];
}

const CharacterGrid: React.FC<Props> = ({ isLoading, items }) => {
  console.log(items);
  console.log(isLoading);
  return (
    <div>
      CharacterGrid
    </div>
  )
}

export default CharacterGrid;
