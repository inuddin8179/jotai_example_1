
import React from 'react';
import { useAtom } from 'jotai';
import { itemListAtom } from '../Atoms';

const ItemCounter = () => {
  const [items] = useAtom(itemListAtom);

  return (
    <div>
      <h2>Item Count</h2>
      <p>Total Items: {items.length}</p>
    </div>
  );
};

export default ItemCounter;
