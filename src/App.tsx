import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/ui/Header';

import './App.css';

interface Character {
  char_id: number;
  name: string;
  nickname: string;
  status: string;
  img: string;
  birthday: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get<Character[]>(`https://www.breakingbadapi.com/api/characters`);

      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
