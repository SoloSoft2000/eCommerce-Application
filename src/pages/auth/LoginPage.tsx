import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Title from '../../components/forms/Title';
import SwitchPageLinks from '../../components/forms/SwitchPageLinks';
import Email from '../../components/forms/Email';
import Password from '../../components/forms/Password';
import SubmitFormButton from '../../components/forms/SubmitFormBtn';

function LoginPage(): React.JSX.Element {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <main className="flex justify-center py-16">
      <div className="text-black w-[32rem] max-w-full text-left">
        <Title />
        <SwitchPageLinks pageName="login" />
        <FormProvider {...methods}>
          <form onSubmit={onSubmit} noValidate className="px-2 sm:px-0">
            <div className="mb-12">
              <Email />
              <Password />
            </div>
            <SubmitFormButton value="Sign in" />
          </form>
        </FormProvider>
      </div>
    </main>
  );
}

export default LoginPage;
