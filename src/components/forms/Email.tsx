import React from 'react';

function Email(): React.JSX.Element {
  return (
    <div className="w-full">
      <input
        className="w-full border-b-2 border-zinc-200 py-3 px-1"
        placeholder="Email*"
        type="email"
        name="Email"
      />
      <p className="text-xs text-red-500 h-3"></p>
    </div>
  );
}

export default Email;
