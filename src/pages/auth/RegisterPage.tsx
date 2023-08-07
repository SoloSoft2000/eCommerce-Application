import React from 'react';
import Title from '../../components/forms/Title';
import SwitchPageLinks from '../../components/forms/SwitchPageLinks';
import Email from '../../components/forms/Email';
import Password from '../../components/forms/Password';

function RegisterPage(): React.JSX.Element {
  return (
    <main className="flex justify-center py-16">
      <div className="text-black w-[32rem] max-w-full	text-left">
        <Title />
        <SwitchPageLinks pageName="register" />
        <form>
          <Email />
          <Password />
        </form>
      </div>
    </main>
  );
}

export default RegisterPage;
