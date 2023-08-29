import React from 'react';

function Checkbox({
  name,
  isChecked,
  onChange,
}: {
  name: string;
  isChecked: boolean;
  onChange: (name: string) => void;
}): React.JSX.Element {
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
