import React from 'react';
import FormProps from '../../interfaces/forms/form-props';

function SubmitFormButton({ value }: FormProps): React.JSX.Element {
  return (
    <input
      type="submit"
      value={value}
      className="w-full text-center rounded bg-black p-3 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer"
    />
  );
}

export default SubmitFormButton;
