import React, { useState, useCallback } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Title from '../../components/forms/Title';
import SwitchPageLinks from '../../components/forms/SwitchPageLinks';
import Email from '../../components/forms/Email';
import Password from '../../components/forms/Password';
import SubmitFormButton from '../../components/forms/SubmitFormBtn';
import TextField from '../../components/forms/TextFiled';
import BirtdayDate from '../../components/forms/BirtdayDate';
import Address from '../../components/forms/Address';
import registerSchema from '../../validationSchemas/registerSchema';

function RegisterPage(): React.JSX.Element {
  const methods = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'all',
  });
  const [defaultAdress, setDefaultAdress] = useState(true);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  const handleChange = useCallback((): void => {
    setDefaultAdress((prev) => !prev);
  }, [setDefaultAdress]);

  return (
    <main className="flex justify-center pt-6 pb-16">
      <div className="text-black w-[32rem] max-w-full	text-left">
        <div className="m-auto bg-black w-10 h-10 rounded-full flex justify-center items-center mb-2">
          <p className="text-white">13+</p>
        </div>
        <Title />
        <SwitchPageLinks pageName="register" />
        <FormProvider {...methods}>
          <form onSubmit={onSubmit} noValidate className="px-2 sm:px-0">
            <Email />
            <Password />

            <div className="flex justify-between flex-wrap">
              <TextField name="firstName" placeholder="First Name*" />
              <TextField name="lastName" placeholder="Last Name*" />
            </div>

            <div className="flex justify-between flex-wrap">
              <BirtdayDate />
            </div>
            <Address name="Shipping" value="ship" />

            <div className="mb-12">
              <input
                type="checkbox"
                name="defaultAdress"
                className="mr-2 inline-block my-3"
                checked={defaultAdress}
                onChange={handleChange}
              />
              <label htmlFor="defaultAdress">
                Set as address for billing and shipping
              </label>
              {!defaultAdress && <Address name="Billing" value="bill" />}
            </div>

            <SubmitFormButton value="Create an account" />
          </form>
        </FormProvider>
      </div>
    </main>
  );
}

export default RegisterPage;
