import { Customer } from '@commercetools/platform-sdk';
import React, { useCallback, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { MdEditOff, MdEdit } from 'react-icons/md';
import { RootState } from '../../utils/reducers/store';
import profileSchema from '../../utils/validationSchemas/profileSchema';
import FormStyles from '../../assets/styles/form.module.scss';
import UserInfoStyles from '../../assets/styles/userinfo.module.scss';
import Input from '../../сomponents/forms/Input';
import BirtdayDate from '../../сomponents/forms/BirtdayDate';

function UserInfo(): React.JSX.Element {
  const user: Customer = useSelector((state: RootState) => state.customer);

  const methods = useForm({
    defaultValues: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
    },
    resolver: yupResolver(profileSchema),
    mode: 'all',
  });

  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = methods.handleSubmit(() => {
    // data
    setIsEditing(false);
  });

  const startEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  const cancelEditing = useCallback(() => {
    methods.reset({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
    });
    setIsEditing(false);
  }, [user, methods]);

  return (
    <div className="w-full">
      {/* {`w-full ${  isEditing ? 'bg-white' : 'bg-zinc-200'}`}> */}
      <FormProvider {...methods}>
        <form className={FormStyles.form} onSubmit={onSubmit}>
          <div>
            <label className={UserInfoStyles.label} htmlFor="email">
              E-Mail:
              {isEditing ? (
                <MdEdit className="h-5 w-5 animate-bounce " />
              ) : (
                <MdEditOff className="h-5 w-5" />
              )}
            </label>
            <Input
              type="text"
              placeholder="Email*:"
              name="email"
              width={FormStyles.full_field}
              readonly={String(!isEditing)}
            />
            <label className={UserInfoStyles.label} htmlFor="firstName">
              First Name:
              {isEditing ? (
                <MdEdit className="h-5 w-5 animate-bounce " />
              ) : (
                <MdEditOff className="h-5 w-5" />
              )}
            </label>
            <Input
              type="text"
              placeholder="First Name*:"
              name="firstName"
              width={FormStyles.full_field}
              readonly={String(!isEditing)}
            />
            <label className={UserInfoStyles.label} htmlFor="lastName">
              Last Name:
              {isEditing ? (
                <MdEdit className="h-5 w-5 animate-bounce " />
              ) : (
                <MdEditOff className="h-5 w-5" />
              )}
            </label>
            <Input
              type="text"
              placeholder="Last Name*:"
              name="lastName"
              width={FormStyles.full_field}
              readonly={String(!isEditing)}
            />
            <label className={UserInfoStyles.label} htmlFor="birthday">
              BirthDay:
              {isEditing ? (
                <MdEdit className="h-5 w-5 animate-bounce " />
              ) : (
                <MdEditOff className="h-5 w-5" />
              )}
            </label>
            <BirtdayDate readonly={!isEditing} />
          </div>
          {isEditing ? (
            <div className="flex justify-between">
              <button type="submit" className={UserInfoStyles.btn}>
                Save
              </button>
              <button onClick={cancelEditing} className={UserInfoStyles.btn}>
                Cancel
              </button>
            </div>
          ) : (
            <button onClick={startEditing} className={FormStyles.submit_btn}>
              Edit
            </button>
          )}
        </form>
      </FormProvider>
    </div>
  );
}

export default UserInfo;
