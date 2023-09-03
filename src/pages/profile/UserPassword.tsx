import { Customer } from '@commercetools/platform-sdk';
import React, { useContext, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../utils/reducers/store';
import passwordSchema from '../../utils/validationSchemas/passwordSchema';
import Password from '../../сomponents/forms/Password';
import SubmitFormButton from '../../сomponents/forms/SubmitFormBtn';
import FormStyles from '../../assets/styles/form.module.scss';
import UserInfoStyles from '../../assets/styles/userinfo.module.scss';
import updatePassword from '../../utils/sdk/updatePassword';
import NotificationContext from '../../utils/notification/NotificationContext';
import { setCustomer } from '../../utils/reducers/customerReducer';

function UserPassword(): React.JSX.Element {
  const user: Customer = useSelector((state: RootState) => state.customer);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const showNotification = useContext(NotificationContext);
  
  const methods = useForm({
    resolver: yupResolver(passwordSchema),
    mode: 'all',
  });

  const onSubmit = methods.handleSubmit((data) => {
    setLoading(true);
    updatePassword(user, data.oldPassword, data.password)
      .then((updatedUser) => {
        dispatch(setCustomer(updatedUser));
        showNotification('User info updated');
      })
      .catch((err) => showNotification(err.message))
      .finally(() => {
        methods.reset({
          oldPassword: '',
          password: '',
          repeatPassword: ''
        })
        setLoading(false);
      })
  });

  return (
    <div className="w-full">
      {loading && (
        <div className={UserInfoStyles.modal}>
          <div className={UserInfoStyles.loader}></div>
          <p>Please wait...</p>
        </div>
      )}
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
