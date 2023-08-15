import React, { useState, useCallback } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CustomerDraft } from '@commercetools/platform-sdk';
import { yupResolver } from '@hookform/resolvers/yup';
import Title from '../../components/forms/Title';
import SwitchPageLinks from '../../components/forms/SwitchPageLinks';
import Input from '../../components/forms/Input';
import Password from '../../components/forms/Password';
import SubmitFormButton from '../../components/forms/SubmitFormBtn';
import BirtdayDate from '../../components/forms/BirtdayDate';
import {
  registerSchemaOne,
  registerSchemaTwo,
} from '../../validationSchemas/registerSchema';
import FormClasses from '../../enum/form/classes';
import RegisterPageClasses from '../../enum/pages/regitester';
import handleUserData from '../../sdk/utils/handleUserRegistrationData';
import Address from '../../components/forms/Adress';
import newCustomers from '../../sdk/newCustomers';
import { setCustomer } from '../../reducers/customerReducer';

function RegisterPage(): React.JSX.Element {
  const [defaultAdress, setDefaultAdress] = useState(true);
  const methods = useForm({
    resolver: yupResolver(
      defaultAdress ? registerSchemaOne : registerSchemaTwo
    ),
    mode: 'all',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = methods.handleSubmit((data) => {
    const userRegistrationData: CustomerDraft = handleUserData(data);
    newCustomers(userRegistrationData)
      .then((customerData) => {
        dispatch(setCustomer(customerData));
        navigate('/');
      })
      .catch(() => console.error);
  });

  const handleChange = useCallback((): void => {
    setDefaultAdress((prev) => !prev);
    methods.reset({
      [defaultAdress ? 'billCountry' : 'shipCountry']: '',
      [defaultAdress ? 'billCity' : 'shipCity']: '',
      [defaultAdress ? 'billPostcode' : 'shipPostcode']: '',
      [defaultAdress ? 'billStreet' : 'shipStreet']: '',
    });
  }, [setDefaultAdress]);

  return (
    <main className={RegisterPageClasses.MAIN}>
      <div className={RegisterPageClasses.WRAPPER}>
        <div className={RegisterPageClasses.AGE_LIMIT}>
          <p>13+</p>
        </div>
        <Title classes={FormClasses.TITLE} value="Create an account" />
        <SwitchPageLinks pageName="register" />
        <FormProvider {...methods}>
          <form onSubmit={onSubmit} noValidate className={FormClasses.FORM}>
            <Input
              type="email"
              placeholder="Email*:"
              name="email"
              width={FormClasses.FULL_FIELD}
            />
            <Password />
            <div className={FormClasses.FORM_CONTAINER}>
              <Input
                name="firstName"
                placeholder="First Name*"
                type="text"
                width={FormClasses.HALF_FIELD}
              />
              <Input
                name="lastName"
                placeholder="Last Name*"
                type="text"
                width={FormClasses.HALF_FIELD}
              />
            </div>

            <div className={FormClasses.FORM_CONTAINER}>
              <BirtdayDate />
            </div>
            <Address name={'Shipping'} type={'ship'} />
            <div className="mb-12">
              <input
                type="checkbox"
                name="defaultAdress"
                className={FormClasses.CHECKBOX}
                checked={defaultAdress}
                onChange={handleChange}
              />
              <label htmlFor="defaultAdress">
                Set as address for billing and shipping
              </label>

              {!defaultAdress && <Address name={'Billing'} type={'bill'} />}
            </div>

            <SubmitFormButton
              value="Create an account"
              classes={FormClasses.SUBMIT_BTN}
            />
          </form>
        </FormProvider>
      </div>
    </main>
  );
}

export default RegisterPage;
