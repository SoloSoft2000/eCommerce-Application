import React from 'react';

type CheckboxData = {
  name: string;
  isChecked: boolean;
  onChange: (name: string) => void;
};

function Checkbox({
  name,
  isChecked,
  onChange,
}: CheckboxData): React.JSX.Element {
  return (
    <div className="flex items-center mt-2">
      <input
        type="checkbox"
        className="h-4 w-4 text-indigo-600"
        checked={isChecked}
        onChange={(): void => onChange(name)}
      />
      <label htmlFor={name} className="ml-2">
        {name}
      </label>
    </div>
  );
}

export default Checkbox;
