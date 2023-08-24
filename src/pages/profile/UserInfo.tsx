import { Customer } from '@commercetools/platform-sdk';
import React, { useCallback, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/reducers/store';
import profileSchema from '../../utils/validationSchemas/profileSchema';

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
          <div className="form_container">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              E-Mail:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="E-Mail*"
              type="text"
              width="half_field"
              readOnly={!isEditing}
              {...methods.register('email')}
            />
            {methods.formState.errors.email && (
              <span>{methods.formState.errors.email.message}</span>
            )}
            <label
              className="block text-gray-700 mt-3 mb-2"
              htmlFor="firstName"
            >
              First Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="First Name*"
              type="text"
              width="half_field"
              readOnly={!isEditing}
              {...methods.register('firstName')}
            />
            {methods.formState.errors.firstName && (
              <span>{methods.formState.errors.firstName.message}</span>
            )}
            <label className="block text-gray-700 mt-3 mb-2" htmlFor="lastName">
              Last Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Last Name*"
              type="text"
              width="half_field"
              readOnly={!isEditing}
              {...methods.register('lastName')}
            />
            {methods.formState.errors.lastName && (
              <span>{methods.formState.errors.lastName.message}</span>
            )}
            <label className="block text-gray-700 mt-3 mb-2" htmlFor="birthday">
              BirthDay:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              readOnly={!isEditing}
              {...methods.register('dateOfBirth')}
            />
            {methods.formState.errors.dateOfBirth && (
              <span>{methods.formState.errors.dateOfBirth.message}</span>
            )}
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
