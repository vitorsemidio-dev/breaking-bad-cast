import React, { useState } from 'react';

const Search: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <section className="search">
      <form>
        <input 
          type='text'
          className='form-control'
          placeholder='Search characters'
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search;