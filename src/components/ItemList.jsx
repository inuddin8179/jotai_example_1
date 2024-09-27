
import React from 'react';
import { useAtom } from 'jotai';
import { itemListAtom } from '../Atoms';

const ItemList = () => {
  const [items] = useAtom(itemListAtom);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
