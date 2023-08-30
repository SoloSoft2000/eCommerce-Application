import { Address } from '@commercetools/platform-sdk';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import AddressComp from '../../сomponents/forms/Adress';
import UserInfoStyles from '../../assets/styles/userinfo.module.scss';

type AddressModalProps = {
  isOpen: boolean;
  onClose: () => void;
  address?: Address;
  onSave: (data: Address) => void;
};

function AddressModal({
  isOpen,
  onClose,
  address,
  onSave,
}: AddressModalProps): React.JSX.Element {
  const methods = useForm({
    defaultValues: {
      country: address?.country,
      city: address?.city,
      postalCode: address?.postalCode,
      streetName: address?.streetName,
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    onSave(data as Address);
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
                <AddressComp type="new" />
                <button className={UserInfoStyles.addressBtn} type="submit">Save</button>
                <button className={UserInfoStyles.addressBtn} onClick={onClose}>Cancel</button>
              </form>
            </FormProvider>
        </div>
    </div> ) : null }</>
  );
}

export default AddressModal;
