import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Character from './models/Character';

import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';

import './App.css';

const App: React.FC = () => {
  const [items, setItems] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get<Character[]>(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={setQuery} />
      <CharacterGrid
        isLoading={isLoading}
        items={items}
       />
    </div>
  );
}

export default App;
