import React from 'react';

function Logo(): React.JSX.Element {
  return (
    <a href="https://rs.school">
      <img
        className="w-20"
        src="https://rs.school/images/rs_school_js.svg"
        alt="RSSchool logo"
      />
    </a>
  );
}

export default Logo;
