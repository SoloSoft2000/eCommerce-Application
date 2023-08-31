import React, { useContext, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { CustomerAddAddressAction } from '@commercetools/platform-sdk';
import AddressComp from '../../сomponents/forms/Adress';
import UserInfoStyles from '../../assets/styles/userinfo.module.scss';
import FormStyles from '../../assets/styles/form.module.scss';
import addressSchema from '../../utils/validationSchemas/addressSchema';
import updateUser from '../../utils/sdk/updateUser';
import { RootState } from '../../utils/reducers/store';
import { setCustomer } from '../../utils/reducers/customerReducer';
import NotificationContext from '../../utils/notification/NotificationContext';

export type AddressEdit = {
  Country: 'US' | 'CA';
  City: string;
  Postcode: string;
  Street: string;
  Id: string;
  shipping: boolean;
  defaultShipping: boolean;
  billing: boolean;
  defaultBilling: boolean;
};

type AddressModalProps = {
  isOpen: boolean;
  onClose: () => void;
  address?: AddressEdit;
};

function AddressModal({
  isOpen,
  onClose,
  address,
}: AddressModalProps): React.JSX.Element {
  const customer = useSelector((state: RootState) => state.customer);

  const methods = useForm({
    resolver: yupResolver(addressSchema),
    mode: 'all',
  });

  useEffect(() => {
    if (isOpen && address) {
      methods.reset({
        Country: address.Country,
        City: address.City,
        Postcode: address.Postcode,
        Street: address.Street,
        billing: address.billing,
        shipping: address.shipping,
        defaultBilling: address.defaultBilling,
        defaultShipping: address.defaultShipping,
      });
    }
  }, [isOpen, address, methods.reset]);

  const dispatch = useDispatch();
  const showNotification = useContext(NotificationContext);

  const onSubmit = methods.handleSubmit((data) => {
    if (address) {
      const action: CustomerAddAddressAction = {
        action: 'addAddress',
        address: {
          country: data.Country,
          city: data.City,
          postalCode: data.Postcode,
          streetName: data.Street,
        },
      };
      updateUser(customer, action).then((newUser) => {
        dispatch(setCustomer(newUser));
      });
    }
    console.log(address ? 'new' : 'edit');

    showNotification('edit');

    console.log(
      'save to server',
      address?.Id === '' ? 'new' : address?.Id,
      data
    );
    onClose();
  });

  return (
    <>
      {isOpen ? (
        <div className={UserInfoStyles.modal} onClick={onClose}>
          <div
            className={UserInfoStyles.modal__content}
            onClick={(e): void => e.stopPropagation()}
          >
            <div className={UserInfoStyles.close} onClick={onClose}>
              &times;
            </div>
            <FormProvider {...methods}>
              <form className={FormStyles.form} onSubmit={onSubmit}>
                <AddressComp type="" />

                <div className="mt-2 flex justify-around items-center">
                  <div>
                    <div className="flex items-center text-xs text-gray-500">
                      <input
                        type="checkbox"
                        className="ml-2 mr-2 accent-black"
                        {...methods.register('billing')}
                        onChange={(e): void => {
                          if (!e.target.checked) {
                            methods.setValue('defaultBilling', false);
                          }
                        }}
                      />
                      Billing address
                    </div>
                  { address?.Id ? null :  <div className="flex items-center text-xs text-gray-500">
                      <input
                        type="checkbox"
                        className="ml-2 mr-2 accent-black"
                        {...methods.register('defaultBilling')}
                        onChange={(e): void => {
                          if (e.target.checked) {
                            methods.setValue('billing', true);
                          }
                        }}
                      />
                      Default Billing
                    </div> }
                  </div>
                  <div className="text-right">
                    <div className="flex justify-end items-center text-xs text-gray-500">
                      Shipping address
                      <input
                        type="checkbox"
                        className="ml-2 mr-2 accent-black"
                        {...methods.register('shipping')}
                        onChange={(e): void => {
                          if (!e.target.checked) {
                            methods.setValue('defaultShipping', false);
                          }
                        }}
                      />
                    </div>
                    { address?.Id ? null : <div className="flex justify-end items-center text-xs text-gray-500">
                      Default Shipping
                      <input
                        type="checkbox"
                        className="ml-2 mr-2 accent-black"
                        {...methods.register('defaultShipping')}
                        onChange={(e): void => {
                          if (e.target.checked) {
                            methods.setValue('shipping', true);
                          }
                        }}
                      />
                    </div> }
                  </div>
                </div>

                <button className={UserInfoStyles.addressBtn} type="submit">
                  Save
                </button>
                <button
                  className={UserInfoStyles.addressBtn}
                  type="reset"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </form>
            </FormProvider>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AddressModal;
