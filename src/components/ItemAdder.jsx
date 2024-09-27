
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { itemListAtom } from '../Atoms';

const ItemAdder = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useAtom(itemListAtom);

  const addItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h2>Add Item</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add an item"
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default ItemAdder;
