import React from 'react';

interface EmailProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Email(props: EmailProps): React.JSX.Element {
  return (
    <input
      className="w-full border-b-2 border-zinc-200 py-3 px-1"
      placeholder="Email*"
      type="email"
      name="Email"
      value={props.value} 
      onChange={props.onChange}
    />
  );
}

export default Email;
