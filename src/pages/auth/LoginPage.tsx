import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import Title from '../../сomponents/forms/Title';
import SwitchPageLinks from '../../сomponents/forms/SwitchPageLinks';
import Input from '../../сomponents/forms/Input';
import Password from '../../сomponents/forms/Password';
import SubmitFormButton from '../../сomponents/forms/SubmitFormBtn';
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
  const [succsessLogin, setSuccsessLogin] = useState(false);
  const [localCustomerData, setLocalCustomerData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (succsessLogin) {
      setTimeout(() => {
        dispatch(setCustomer(localCustomerData));
      }, 3000);
    }
  }, [succsessLogin]);

  const onSubmit = methods.handleSubmit((data) => {
    const { email, password } = data;

    getCustomers(email, password) // 'sowa4il@gmail.com', 'JS&dontStop2023q1'
      .then((customerData) => {
        setLocalCustomerData(customerData);
        setError(null);
        setSuccsessLogin(true);
      })
      .catch((err) =>
        err.code === 400
          ? setError('Invalid Email or Password')
          : setError('Server connection error')
      );
  });

  return (
    <main className={LoginPageClasses.MAIN}>
      <div className={LoginPageClasses.WRAPPER}>
        <Title classes={FormClasses.TITLE} value="Sign in" />
        <SwitchPageLinks />

        <FormProvider {...methods}>
          <form
            onSubmit={onSubmit}
            onBlur={(): void => setError('')}
            noValidate
            className={FormClasses.FORM}
          >
            <div className="mb-12">
              <Input type={'email'} placeholder={'Email*:'} name={'email'} />
              <Password />
            </div>
            {succsessLogin && (
              <div className={FormClasses.SUCCESS_TEXT_LOGIN}>
                You have successfully logged in
              </div>
            )}
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
