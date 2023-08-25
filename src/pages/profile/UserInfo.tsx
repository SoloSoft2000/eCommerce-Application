import { Customer } from '@commercetools/platform-sdk';
import React, { useCallback, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/reducers/store';
import profileSchema from '../../utils/validationSchemas/profileSchema';
import FormStyles from '../../assets/styles/form.module.scss';
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
    <div className="w-full ">
      <FormProvider {...methods}>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={onSubmit}
        >
          <div className={FormStyles.container}>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              E-Mail:
            </label>
            <Input
              type="text"
              placeholder="Email*:"
              name="email"
              width={FormStyles.full_field}
              readonly={String(!isEditing)}
            />
            <label
              className="block text-gray-700 mt-3 mb-2"
              htmlFor="firstName"
            >
              First Name:
            </label>
            <Input
              type="text"
              placeholder="First Name*:"
              name="firstName"
              width={FormStyles.full_field}
              readonly={String(!isEditing)}
            />
            <label className="block text-gray-700 mt-3 mb-2" htmlFor="lastName">
              Last Name:
            </label>
            <Input
              type="text"
              placeholder="Last Name*:"
              name="lastName"
              width={FormStyles.full_field}
              readonly={String(!isEditing)}
            />
            <label className="block text-gray-700 mt-3 mb-2" htmlFor="birthday">
              BirthDay:
            </label>
            <BirtdayDate readonly={!isEditing} />
          </div>
          {isEditing ? (
            <>
              <button type="submit">Save</button>
              <button onClick={cancelEditing}>Cancel</button>
            </>
          ) : (
            <button onClick={startEditing}>Edit</button>
          )}
        </form>
      </FormProvider>
    </div>
  );
}

export default UserInfo;
