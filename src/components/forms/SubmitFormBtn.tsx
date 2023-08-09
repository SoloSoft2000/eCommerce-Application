import React from 'react';
import { ButtonSubmit } from '../../interfaces/forms/form-props';

function SubmitFormButton({ value }: ButtonSubmit): React.JSX.Element {
  return (
    <input
      type="submit"
      value={value}
      className="w-full text-center rounded bg-black p-3 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer"
    />
  );
}

export default SubmitFormButton;
