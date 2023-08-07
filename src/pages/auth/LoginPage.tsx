import React from 'react';
import Title from '../../components/forms/Title';
import SwitchPageLinks from '../../components/forms/SwitchPageLinks';

function LoginPage(): React.JSX.Element {
  return <main className='flex justify-center py-16'>
    <div className='text-black w-[32rem] max-w-full text-center'>
    <Title />
    <SwitchPageLinks pageName="login" />
    </div>
    </main>
}

export default LoginPage;
