import { FC, memo, useState, CSSProperties, ChangeEvent } from 'react';

interface ChildComponentProps {
  id: number;
  value: string;
  onChange: (id: number, value: string) => void;
}

const ChildComponent: FC<ChildComponentProps> = memo(
  ({ id, value, onChange }): JSX.Element => {
    const [renderCount, setRenderCount] = useState<number>(1);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setRenderCount((prevCount: number) => prevCount + 1);
      onChange(id, e.target.value);
    };

    return (
      <div style={childStyles}>
        <div style={countStyles}>Render Count: {renderCount}</div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          style={inputStyles}
          placeholder="Insert a value"
        />
      </div>
    );
  }
);

export default ChildComponent;

//styles
const childStyles: CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '10px',
};

const countStyles: CSSProperties = {
  color: '#888888',
  fontSize: '16px',
  fontFamily: 'cursive',
  fontWeight: 'bold',
  margin: '5px',
};

const inputStyles: CSSProperties = {
  border: '1px solid #dddddd',
  borderRadius: '5px',
  color: '#888888',
  padding: '8px',
  fontFamily: 'cursive',
  width: '200px',
};
