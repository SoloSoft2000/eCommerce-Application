import React, { useState, useCallback } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
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
import Country from '../../components/forms/Country';
import FormClasses from '../../enum/form/classes';
import RegisterPageClasses from '../../enum/pages/regitester';

function RegisterPage(): React.JSX.Element {
  const [defaultAdress, setDefaultAdress] = useState(true);
  const methods = useForm({
    resolver: yupResolver(
      defaultAdress ? registerSchemaOne : registerSchemaTwo
    ),
    mode: 'all',
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  const handleChange = useCallback((): void => {
    setDefaultAdress((prev) => !prev);
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

            <fieldset>
              <legend className={FormClasses.ADDRESS_TITLE}>
                Shipping address*:
              </legend>
              <Country name="shipCountry" />
              <div className={FormClasses.FORM_CONTAINER}>
                <Input
                  name="shipCity"
                  placeholder="City / Town*"
                  type="text"
                  width={FormClasses.HALF_FIELD}
                />
                <Input
                  name="shipPostcode"
                  placeholder="Postcode / ZIP *"
                  width={FormClasses.HALF_FIELD}
                />
              </div>
              <Input
                name="shipStreet"
                placeholder="Street Address*"
                width={FormClasses.FULL_FIELD}
              />
            </fieldset>

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

              {!defaultAdress && (
                <fieldset>
                  <legend className={FormClasses.ADDRESS_TITLE}>
                    Billing address*:
                  </legend>
                  <Country name="billCountry" />
                  <div className={FormClasses.FORM_CONTAINER}>
                    <Input
                      name="billCity"
                      placeholder="City / Town*"
                      type="text"
                      width={FormClasses.HALF_FIELD}
                    />
                    <Input
                      name="billPostcode"
                      placeholder="Postcode / ZIP *"
                      type="text"
                      width={FormClasses.HALF_FIELD}
                    />
                  </div>
                  <Input
                    name="billStreet"
                    placeholder="Street Address*"
                    type="text"
                    width={FormClasses.FULL_FIELD}
                  />
                </fieldset>
              )}
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
