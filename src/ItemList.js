import React, { useState, useEffect, useContext, useReducer, useCallback } from 'react';

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
];

const selectedItemsContext = React.createContext();

const selectedItemsReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter((item) => item.id !== action.payload.id);
    default:
      throw new Error();
  }
};

const ItemList = () => {
  const [selectedItems, dispatch] = useReducer(selectedItemsReducer, []);
  const [totalSelected, setTotalSelected] = useState(0);

  useEffect(() => {
    setTotalSelected(selectedItems.length);
  }, [selectedItems]);

  const handleItemClick = useCallback(
    (item) => {
      if (selectedItems.some((selectedItem) => selectedItem.id === item.id)) {
        dispatch({ type: 'remove', payload: item });
      } else {
        dispatch({ type: 'add', payload: item });
      }
    },
    [selectedItems]
  );

  return (
    <div>
      <selectedItemsContext.Provider value={selectedItems}>
        <p className="mb-4">Total Selected: {totalSelected}</p>
        <ul className="space-y-2">
          {items.map((item) => (
            <Item key={item.id} item={item} onItemClick={handleItemClick} />
          ))}
        </ul>
      </selectedItemsContext.Provider>
    </div>
  );
};

const Item = ({ item, onItemClick }) => {
  const selectedItems = useContext(selectedItemsContext);
  const isSelected = selectedItems.some((selectedItem) => selectedItem.id === item.id);

  useEffect(() => {
    console.log('Selected Items:', selectedItems);
  }, [selectedItems]);

  return (
    <li onClick={() => onItemClick(item)} className={`cursor-pointer rounded-lg px-4 py-2 ${isSelected ? 'bg-blue-200' : ''}`}>
      {item.name}
    </li>
  );
};

export default ItemList;
