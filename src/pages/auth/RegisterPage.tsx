import React, { useState, useCallback, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CustomerDraft } from '@commercetools/platform-sdk';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import Title from '../../сomponents/forms/Title';
import SwitchPageLinks from '../../сomponents/forms/SwitchPageLinks';
import Input from '../../сomponents/forms/Input';
import Password from '../../сomponents/forms/Password';
import SubmitFormButton from '../../сomponents/forms/SubmitFormBtn';
import BirtdayDate from '../../сomponents/forms/BirtdayDate';
import {
  registerSchemaOne,
  registerSchemaTwo,
} from '../../utils/validationSchemas/registerSchema';
import handleUserData from '../../utils/sdk/utils/handleUserRegistrationData';
import Address from '../../сomponents/forms/Adress';
import newCustomers from '../../utils/sdk/newCustomers';
import { setCustomer } from '../../utils/reducers/customerReducer';
import { RootState } from '../../utils/reducers/store';

function RegisterPage(): React.JSX.Element {
  const navigate = useNavigate();
  const customer = useSelector((state: RootState) => state.customer);

  useEffect(() => {
    if (customer.id) {
      navigate('/');
    }
  }, [customer, navigate]);

  const [defaultAdress, setDefaultAdress] = useState(true);
  const methods = useForm({
    resolver: yupResolver(
      defaultAdress ? registerSchemaOne : registerSchemaTwo
    ),
    mode: 'all',
  });

  const [error, setError] = useState<string | null>(null);
  const [succsessRegistration, setSuccsessRegistration] = useState(false);
  const [localCustomerData, setLocalCustomerData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (succsessRegistration) {
      setTimeout(() => {
        dispatch(setCustomer(localCustomerData));
      }, 3000);
    }
  }, [succsessRegistration]);

  const onSubmit = methods.handleSubmit((data) => {
    const userRegistrationData: CustomerDraft = handleUserData(data);
    newCustomers(userRegistrationData)
      .then((customerData) => {
        setLocalCustomerData(customerData);
        setError(null);
        setSuccsessRegistration(true);
      })
      .catch((err) =>
        err.code === 400
          ? setError('A user with this email already exists')
          : setError('Server connection error')
      );
  });

  const handleChange = useCallback((): void => {
    setDefaultAdress((prev) => !prev);
    methods.reset({
      [defaultAdress ? 'billDefault' : 'shipDefault']: false,
      [defaultAdress ? 'billCountry' : 'shipCountry']: '',
      [defaultAdress ? 'billCity' : 'shipCity']: '',
      [defaultAdress ? 'billPostcode' : 'shipPostcode']: '',
      [defaultAdress ? 'billStreet' : 'shipStreet']: '',
    });
  }, [setDefaultAdress]);

  return (
    <main className="reg-main">
      <div className="login-wrapper">
        <div className="age_limit">
          <p>13+</p>
        </div>
        <Title classes="form-title" value="Create an account" />
        <SwitchPageLinks pageName="register" />
        <FormProvider {...methods}>
          <form
            onSubmit={onSubmit}
            onBlur={(): void => setError('')}
            noValidate
            className="form"
          >
            <Input
              type="text"
              placeholder="Email*:"
              name="email"
              width="full_field"
            />
            <Password />
            <div className="form_container">
              <Input
                name="firstName"
                placeholder="First Name*"
                type="text"
                width="half_field"
              />
              <Input
                name="lastName"
                placeholder="Last Name*"
                type="text"
                width="half_field"
              />
            </div>

            <div className="form_container">
              <BirtdayDate />
            </div>
            <legend className="address_title">Shipping address*:</legend>
            <input
              type="checkbox"
              {...methods.register('shipDefault')}
              className="checkbox"
            />
            <label htmlFor={`shipDefault`}>Set as default address</label>
            <Address type={'ship'} />
            <div className="mb-12">
              <input
                type="checkbox"
                {...methods.register('defaultAdress')}
                className="checkbox"
                checked={defaultAdress}
                onChange={handleChange}
              />
              <label htmlFor="defaultAdress">
                Set as address for billing and shipping
              </label>
              {!defaultAdress && (
                <legend className="address_title">Billing address*:</legend>
              )}
              {!defaultAdress && (
                <input
                  type="checkbox"
                  {...methods.register('billDefault')}
                  className="checkbox"
                />
              )}
              {!defaultAdress && (
                <label htmlFor={`shipDefault`}>Set as default address</label>
              )}
              {!defaultAdress && <Address name={'Billing'} type={'bill'} />}
            </div>

            {succsessRegistration && (
              <div className="success_text_login">
                You have been successfully registered.
              </div>
            )}
            {error && <div className="mistake_text_login">{error}</div>}

            <SubmitFormButton value="Create an account" classes="submit_btn" />
          </form>
        </FormProvider>
      </div>
    </main>
  );
}

export default RegisterPage;
