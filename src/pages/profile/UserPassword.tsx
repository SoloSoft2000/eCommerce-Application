import { Customer } from '@commercetools/platform-sdk';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/reducers/store';
import passwordSchema from '../../utils/validationSchemas/passwordSchema';
import Password from '../../сomponents/forms/Password';
import SubmitFormButton from '../../сomponents/forms/SubmitFormBtn';
import FormStyles from '../../assets/styles/form.module.scss';

function UserPassword(): React.JSX.Element {
  const user: Customer = useSelector((state: RootState) => state.customer);

  const methods = useForm({
    resolver: yupResolver(passwordSchema),
    mode: 'all',
  });

  const onSubmit = methods.handleSubmit((data) => {
    // data
    console.log(data, user);
  });

  return (
    <div className="w-full">
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div>
            <label>Old Password:</label>
            <Password fieldName="oldPassword" />
          </div>
          <div>
            <label>New Password:</label>
            <Password fieldName="password" />
          </div>
          <div>
            <label>Repeat password:</label>
            <Password fieldName="repeatPassword" />
          </div>
          <SubmitFormButton
            value="Change password"
            classes={FormStyles.submit_btn}
          />
        </form>
      </FormProvider>
    </div>
  );
}

export default UserPassword;
