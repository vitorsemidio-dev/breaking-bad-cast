import React from 'react';

import Character from '../../models/Character';

import CharacterItem from './CharacterItem';

interface Props {
  isLoading: boolean;
  items: Character[];
}

const CharacterGrid: React.FC<Props> = ({ isLoading, items }) => {
  return (
    isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <section className="cards">
        {items.map(item => (
          <CharacterItem
            key={item.char_id}
            item={item}
          />
        ))}
      </section>
    )
  )
}

export default CharacterGrid;
