import React from 'react';

function Footer(): React.JSX.Element {
  return <footer className='container mx-auto fixed left-1/2 -translate-x-1/2 bottom-0 left-0 z-20 w-full p-4 bg-white border-y border-gray-200'>
    <div className='container flex justify-between'>
      <div className='flex flex-col'>
      <a className='text-xs text-gray-400' href="https://github.com/solosoft2000">Eugene Solomonyk GitHub</a>
      <a className='text-xs text-gray-400' href="https://github.com/Yasya23">Yana Zahoruiko GitHub</a>
      <a className='text-xs text-gray-400' href="https://github.com/Fault1err">Olga Buksman GitHub</a>
      </div> 
      <div><a href="https://rs.school"><img className="w-20" src="https://rs.school/images/rs_school_js.svg" alt="RSSchool logo" /></a></div>
    </div>
  </footer>;
}

export default Footer;
