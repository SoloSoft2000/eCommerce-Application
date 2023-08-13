import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import Title from '../../components/forms/Title';
import SwitchPageLinks from '../../components/forms/SwitchPageLinks';
import Input from '../../components/forms/Input';
import Password from '../../components/forms/Password';
import SubmitFormButton from '../../components/forms/SubmitFormBtn';
import getCustomers from '../../sdk/getCustomers';
import { setCustomer } from '../../reducers/customerReducer';
import loginSchema from '../../validationSchemas/loginSchema';
import LoginPageClasses from '../../enum/pages/login';
import FormClasses from '../../enum/form/classes';

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
        <p className="p-3">sowa4il@gmail.com </p>
        <p className="p-3">JS&dontStop2023q1</p>
      </div>
    </main>
  );
}

export default LoginPage;
