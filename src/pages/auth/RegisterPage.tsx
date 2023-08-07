import React from 'react';
import Title from '../../components/forms/Title';
import SwitchPageLinks from '../../components/forms/SwitchPageLinks';
import Email from '../../components/forms/Email';
import Password from '../../components/forms/Password';
import SubmitFormButton from '../../components/forms/SubmitFormBtn';
import TextField from '../../components/forms/TextFiled';
import BirtdayDate from '../../components/forms/BirtdayDate';
import Country from '../../components/forms/Country';

function RegisterPage(): React.JSX.Element {
  return (
    <main className="flex justify-center py-16">
      <div className="text-black w-[32rem] max-w-full	text-left">
        <Title />
        <SwitchPageLinks pageName="register" />
        <form className="px-2 sm:px-0">
          <Email />
          <Password />
          <div className="flex justify-between flex-wrap">
            <TextField name="firstName" placeholder="First Name*" />
            <TextField name="lastName" placeholder="Last Name*" />
          </div>
          <div className="flex justify-between flex-wrap">
            <BirtdayDate />
            <Country />
          </div>
          <TextField name="address" placeholder="Street Address*" />
          <div className="flex justify-between flex-wrap">
            <TextField name="city" placeholder="City / Town*" />
            <TextField name="postcode" placeholder="Postcode / ZIP *" />
          </div>
          <div className="mb-12">
            <input
              type="checkbox"
              name="defaultAdress"
              className="mr-2 inline-block my-3"
            />
            <label htmlFor="defaultAdress">Set as default address</label>
          </div>

          <SubmitFormButton value="Create an account" />
        </form>
      </div>
    </main>
  );
}

export default RegisterPage;
