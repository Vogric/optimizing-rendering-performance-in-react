import React, { FC, useState } from 'react';
import ChildComponent from './ChildComponent';

interface ItemValue {
  id: number;
  value: string;
}

const ParentComponent: FC = (): JSX.Element => {
  const initialItemValues: ItemValue[] = [
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
  ];

  const [itemValues, setItemValues] = useState<ItemValue[]>(initialItemValues);

  const changeValue = (id: number, value: string): void => {
    setItemValues((prevItemValues) =>
      prevItemValues.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  return (
    <div style={parentStyles}>
      {itemValues.map((item) => (
        <ChildComponent
          key={item.id}
          id={item.id}
          value={item.value}
          onChange={changeValue}
        />
      ))}
    </div>
  );
};

export default ParentComponent;

//styles
const parentStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  justifyContent: 'space-evenly',
  backgroundColor: '#f0f0f0',
};
