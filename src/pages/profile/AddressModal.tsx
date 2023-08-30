import { Address } from '@commercetools/platform-sdk';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import AddressComp from '../../сomponents/forms/Adress';

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
    <div className='modal'>
      <h1>modal {isOpen}</h1>
      <div className="modal-content">
        <span className="close cursor-pointer" onClick={onClose}>
          &times;
        </span>
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <AddressComp type="new" />
            <button type="submit">Save</button>
          </form>
        </FormProvider>
      </div>
    </div> ) : null }</>
  );
}

export default AddressModal;
