import React, { createRef } from 'react';
// eslint-disable-next-line import/no-cycle
import { Item } from '../index';
import './ItemList.css';

const ItemList = () => {
  const ref = createRef();

  const handleClick = () => ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  return (
    <ul className="ItemList" ref={ref}>
      <Item />
      <Item />
      <Item />
      <button type="button" onClick={handleClick}>
        Scroll Into View
      </button>
    </ul>
  );
};

export default ItemList;
