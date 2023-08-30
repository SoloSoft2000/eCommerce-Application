import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AddressComp from '../../сomponents/forms/Adress';
import UserInfoStyles from '../../assets/styles/userinfo.module.scss';
import addressSchema from '../../utils/validationSchemas/addressSchema';

export type AddressEdit = {
  Country: "US" | "CA",
  City: string,
  Postcode: string,
  Street: string
}

type AddressModalProps = {
  isOpen: boolean;
  onClose: () => void;
  address?: AddressEdit;
};

function AddressModal({isOpen, onClose, address}: AddressModalProps): React.JSX.Element {
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
        Street: address.Street
      })
    }
  }, [isOpen, address, methods.reset])

  const onSubmit = methods.handleSubmit((data) => {
   console.log('save to server', data);
   onClose();
  });

  return (<>
    {isOpen ? (
    <div className={UserInfoStyles.modal}>
        <div className={UserInfoStyles.modal__content}>
            <div className={UserInfoStyles.close} onClick={onClose}>
              &times;
            </div>
            <FormProvider {...methods}>
              <form onSubmit={onSubmit}>
                <AddressComp type="" />
                <button className={UserInfoStyles.addressBtn} type="submit">Save</button>
                <button className={UserInfoStyles.addressBtn} type="reset" onClick={onClose}>Cancel</button>
              </form>
            </FormProvider>
        </div>
    </div> ) : null }</>
  );
}

export default AddressModal;
