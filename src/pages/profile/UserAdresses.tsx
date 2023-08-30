import { Address, Customer } from '@commercetools/platform-sdk';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/reducers/store';
import UserInfoStyles from '../../assets/styles/userinfo.module.scss';
import FormStyles from '../../assets/styles/form.module.scss';
import AddressModal from './AddressModal';

function UserAdresses(): React.JSX.Element {
  const user: Customer = useSelector((state: RootState) => state.customer);
  console.log(user);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState({
    country: '',
  });

  const openModal = (address?: Address): void => {
    console.log('openModal', address);

    setSelectedAddress(
      address || {
        country: '',
      }
    );
    setModalOpen(true);
  };

  const closeModal = (): void => {
    setSelectedAddress({
      country: '',
    });
    setModalOpen(false);
  };

  const saveAddress = (address: Address): void => {
    console.log('Saved address:', address);
  };

  return (
    <div>
      <ul>
        {user.addresses.map((address, idx) => (
          <li key={idx} className="border border-gray-200 mb-3 shadow-lg">
            <div className="p-4">
              <div className="ml-5 text-sm font-semibold text-gray-700">
                {address.country === 'US' ? 'USA' : 'Canada'},{' '}
                {address.postalCode}, {address.city}
              </div>
              <div className="ml-6 text-sm text-gray-600 mt-1 mb-1">
                {address.streetName}
              </div>
              <hr />
              <div className="mt-2 flex justify-around items-center">
                <div>
                  <div className="flex items-center text-xs text-gray-500">
                    <input
                      type="checkbox"
                      className="ml-2 mr-2 accent-black"
                      checked={user.billingAddressIds?.includes(
                        address.id as string
                      )}
                      readOnly
                    />
                    Billing address
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <input
                      type="checkbox"
                      className="ml-2 mr-2 accent-black"
                      checked={address.id === user.defaultBillingAddressId}
                      readOnly
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
                      checked={user.shippingAddressIds?.includes(
                        address.id as string
                      )}
                      readOnly
                    />
                  </div>
                  <div className="flex justify-end items-center text-xs text-gray-500">
                    Default Shipping
                    <input
                      type="checkbox"
                      className="ml-2 mr-2 accent-black"
                      checked={address.id === user.defaultShippingAddressId}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <button
                  className={UserInfoStyles.addressBtn}
                  onClick={(): void => openModal(address)}
                >
                  Edit
                </button>
                <button className={UserInfoStyles.addressBtn}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        className={FormStyles.submit_btn}
        onClick={(): void => openModal()}
      >
        Add new address
      </button>

      <AddressModal
        isOpen={modalOpen}
        onClose={closeModal}
        address={selectedAddress}
        onSave={saveAddress}
      />
    </div>
  );
}

export default UserAdresses;
