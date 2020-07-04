import React from 'react';

import Character from '../../models/Character';

interface Props {
  item: Character;
}

const CharacterItem: React.FC<Props> = ({ item }) => {
  return (
    <div>
      {item.name} - {item.nickname}
    </div>
  )
}

export default CharacterItem;