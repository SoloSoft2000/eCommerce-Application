import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AddressComp from '../../сomponents/forms/Adress';
import UserInfoStyles from '../../assets/styles/userinfo.module.scss';
import FormStyles from '../../assets/styles/form.module.scss';
import addressSchema from '../../utils/validationSchemas/addressSchema';

export type AddressEdit = {
  Country: 'US' | 'CA';
  City: string;
  Postcode: string;
  Street: string;
  Id: string;
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
      });
    }
  }, [isOpen, address, methods.reset]);

  const onSubmit = methods.handleSubmit((data) => {
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
          <div className={UserInfoStyles.modal__content} onClick={(e): void => e.stopPropagation()}>
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
                        // checked={user.billingAddressIds?.includes(
                        //   address.id as string
                        // )}
                      />
                      Billing address
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <input
                        type="checkbox"
                        className="ml-2 mr-2 accent-black"
                        // checked={address.id === user.defaultBillingAddressId}
                      />
                      Default Billing
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex justify-end items-center text-xs text-gray-500">
                      Shipping address
                      <input
                        type="checkbox"
                        className="ml-2 mr-2 accent-black"
                        // checked={user.shippingAddressIds?.includes(
                        //   address.id as string
                        // )}
                      />
                    </div>
                    <div className="flex justify-end items-center text-xs text-gray-500">
                      Default Shipping
                      <input
                        type="checkbox"
                        className="ml-2 mr-2 accent-black"
                        // checked={address.id === user.defaultShippingAddressId}
                      />
                    </div>
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
