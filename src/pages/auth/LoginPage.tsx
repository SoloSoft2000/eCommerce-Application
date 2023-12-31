import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import Title from '../../сomponents/forms/Title';
import SwitchPageLinks from '../../сomponents/forms/SwitchPageLinks';
import Input from '../../сomponents/forms/Input';
import Password from '../../сomponents/forms/Password';
import SubmitFormButton from '../../сomponents/forms/SubmitFormBtn';
import getCustomers from '../../utils/sdk/getCustomers';
import { setCustomer } from '../../utils/reducers/customerReducer';
import loginSchema from '../../utils/validationSchemas/loginSchema';
import { RootState } from '../../utils/reducers/store';
import LoginStyles from '../../assets/styles/login.module.scss';
import FormStyles from '../../assets/styles/form.module.scss';

function LoginPage(): React.JSX.Element {
  const navigate = useNavigate();
  const customer = useSelector((state: RootState) => state.customer);

  useEffect(() => {
    if (customer.id) {
      navigate('/');
    }
  }, [customer, navigate]);

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
      .catch(() => setError('Invalid Email or Password'));
  });

  return (
    <main className={LoginStyles.main}>
      <div className={LoginStyles.wrapper}>
        <Title classes={FormStyles.title} value="Sign in" />
        <SwitchPageLinks />

        <FormProvider {...methods}>
          <form
            onSubmit={onSubmit}
            onBlur={(): void => setError('')}
            noValidate
            className={FormStyles.form}
          >
            <div className="mb-12">
              <Input type={'text'} placeholder={'Email*:'} name={'email'} />
              <Password />
            </div>
            {succsessLogin && (
              <div className={FormStyles.success_text_login}>
                You have successfully logged in
              </div>
            )}
            {error && (
              <div className={FormStyles.mistake_text_login}>{error}</div>
            )}
            <SubmitFormButton value="Sign in" classes={FormStyles.submit_btn} />
          </form>
        </FormProvider>
      </div>
    </main>
  );
}

export default LoginPage;
