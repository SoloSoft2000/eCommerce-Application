import React from 'react';

function Email(): React.JSX.Element {
  return (
    <input
      className="w-full border-b-2 border-zinc-200 py-3 px-1"
      placeholder="Email"
      type="email"
      name="Email"
    />
  );
}

export default Email;
