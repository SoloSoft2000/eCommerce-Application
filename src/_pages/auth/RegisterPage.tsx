import React, { useState, useCallback, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CustomerDraft } from '@commercetools/platform-sdk';
import { yupResolver } from '@hookform/resolvers/yup';
import Title from '../../_components/forms/Title';
import SwitchPageLinks from '../../_components/forms/SwitchPageLinks';
import Input from '../../_components/forms/Input';
import Password from '../../_components/forms/Password';
import SubmitFormButton from '../../_components/forms/SubmitFormBtn';
import BirtdayDate from '../../_components/forms/BirtdayDate';
import {
  registerSchemaOne,
  registerSchemaTwo,
} from '../../utils/validationSchemas/registerSchema';
import FormClasses from '../../helpers/enum/form/classes';
import RegisterPageClasses from '../../helpers/enum/pages/regitester';
import handleUserData from '../../utils/sdk/utils/handleUserRegistrationData';
import Address from '../../_components/forms/Adress';
import newCustomers from '../../utils/sdk/newCustomers';
import { setCustomer } from '../../utils/reducers/customerReducer';

function RegisterPage(): React.JSX.Element {
  const [defaultAdress, setDefaultAdress] = useState(true);
  const methods = useForm({
    resolver: yupResolver(
      defaultAdress ? registerSchemaOne : registerSchemaTwo
    ),
    mode: 'all',
  });

  const [error, setError] = useState(false);
  const [succsessRegistration, setSuccsessRegistration] = useState(false);
  const [localCustomerData, setLocalCustomerData] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (succsessRegistration) {
      setTimeout(() => {
        dispatch(setCustomer(localCustomerData));
      }, 3000);
    }
  }, [succsessRegistration, navigate]);

  const onSubmit = methods.handleSubmit((data) => {
    const userRegistrationData: CustomerDraft = handleUserData(data);
    newCustomers(userRegistrationData)
      .then((customerData) => {
        setLocalCustomerData(customerData);
        setError(false);
        setSuccsessRegistration(true);
      })
      .catch(() => setError(true));
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

            {succsessRegistration && (
              <div className={FormClasses.SUCCESS_TEXT_LOGIN}>
                You have been successfully registered.
              </div>
            )}
            {error && (
              <div className={FormClasses.MISTAKE_TEXT_LOGIN}>
                A user with this email already exists.
              </div>
            )}

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
