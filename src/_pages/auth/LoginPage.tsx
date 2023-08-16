import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import Title from '../../_components/forms/Title';
import SwitchPageLinks from '../../_components/forms/SwitchPageLinks';
import Input from '../../_components/forms/Input';
import Password from '../../_components/forms/Password';
import SubmitFormButton from '../../_components/forms/SubmitFormBtn';
import getCustomers from '../../utils/sdk/getCustomers';
import { setCustomer } from '../../utils/reducers/customerReducer';
import loginSchema from '../../utils/validationSchemas/loginSchema';
import LoginPageClasses from '../../helpers/enum/pages/login';
import FormClasses from '../../helpers/enum/form/classes';

function LoginPage(): React.JSX.Element {
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'all',
  });

  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = methods.handleSubmit((data) => {
    const { email, password } = data;

    getCustomers(email, password) // 'sowa4il@gmail.com', 'JS&dontStop2023q1'
      .then((customerData) => {
        dispatch(setCustomer(customerData));
        setError(null);
        navigate('/');
      })
      .catch(() => {
        setError(`Invalid Email or Password`);
      });
  });

  return (
    <main className={LoginPageClasses.MAIN}>
      <div className={LoginPageClasses.WRAPPER}>
        <Title classes={FormClasses.TITLE} value="Sign in" />
        <SwitchPageLinks />

        <FormProvider {...methods}>
          <form onSubmit={onSubmit} noValidate className={FormClasses.FORM}>
            <div className="mb-12">
              <Input type={'email'} placeholder={'Email*:'} name={'email'} />
              <Password />
            </div>
            {error && (
              <div className={FormClasses.MISTAKE_TEXT_LOGIN}>{error}</div>
            )}
            <SubmitFormButton
              value="Sign in"
              classes={FormClasses.SUBMIT_BTN}
            />
          </form>
        </FormProvider>
      </div>
    </main>
  );
}

export default LoginPage;
