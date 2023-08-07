import React from 'react';
import Title from '../../components/forms/Title';
import SwitchPageLinks from '../../components/forms/SwitchPageLinks';
import Email from '../../components/forms/Email';

function LoginPage(): React.JSX.Element {
  return <main className='flex justify-center py-16'>
    <div className='text-black w-[32rem] max-w-full text-center'>
    <Title />
    <SwitchPageLinks pageName="login" />
    <Email />
    </div>
    </main>
}

export default LoginPage;
