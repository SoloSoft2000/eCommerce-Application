import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Title from '../../components/forms/Title';
import SwitchPageLinks from '../../components/forms/SwitchPageLinks';
import Email from '../../components/forms/Email';
import Password from '../../components/forms/Password';
import SubmitFormButton from '../../components/forms/SubmitFormBtn';
import getCustomers from '../../sdk/getCustomers';

function LoginPage(): React.JSX.Element {
  const methods = useForm();

  const [emailType, setEmailType] = useState('');
  const [passwordType, setPasswordType] = useState('');

  const onSubmit = methods.handleSubmit((data) => {
    const { email, password } = data;
    console.log(data);
    getCustomers(email, password)
      .then((customerData) => console.log('customers=', customerData))
      .catch((err) => console.error(err));
  });

  const handlePasswordChange = (value: string): void => {
    setPasswordType(value);
  };

  return (
    <main className="flex justify-center py-16">
      <div className="text-black w-[32rem] max-w-full text-left">
        <Title />
        <SwitchPageLinks pageName="login" />

        <FormProvider {...methods}>
          <form onSubmit={onSubmit} noValidate className="px-2 sm:px-0">
            <div className="mb-12">
              <Email
                onChange={(e): void => setEmailType(e.target.value)}
                value={emailType}
              />
              <Password onPasswordChange={handlePasswordChange} />
            </div>
            <SubmitFormButton value="Sign in" />
          </form>
        </FormProvider>
      </div>
    </main>
  );
}

export default LoginPage;
