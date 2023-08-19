import React, { useState, useCallback, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { CustomerDraft } from '@commercetools/platform-sdk';
import { yupResolver } from '@hookform/resolvers/yup';
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
import FormClasses from '../../helpers/enum/form/classes';
import RegisterPageClasses from '../../helpers/enum/pages/regitester';
import handleUserData from '../../utils/sdk/utils/handleUserRegistrationData';
import Address from '../../сomponents/forms/Adress';
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
          <form
            onSubmit={onSubmit}
            onBlur={(): void => setError('')}
            noValidate
            className={FormClasses.FORM}
          >
            <Input
              type="text"
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
              <div className={FormClasses.MISTAKE_TEXT_LOGIN}>{error}</div>
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
