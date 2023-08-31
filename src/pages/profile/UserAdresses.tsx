import { Address, Customer } from '@commercetools/platform-sdk';
import React, { useState, useCallback, useMemo, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../utils/reducers/store';
import UserInfoStyles from '../../assets/styles/userinfo.module.scss';
import FormStyles from '../../assets/styles/form.module.scss';
import AddressModal, { AddressEdit } from './AddressModal';
import updateDefaultAddressStatus from '../../utils/sdk/updateAddressType';
import NotificationContext from '../../utils/notification/NotificationContext';
import { setCustomer } from '../../utils/reducers/customerReducer';

const initialAddress: AddressEdit = {
  Country: 'US',
  City: '',
  Postcode: '',
  Street: '',
  Id: '',
  billing: false,
  shipping: false,
  defaultBilling: false,
  defaultShipping: false,
};

function UserAdresses(): React.JSX.Element {
  const user: Customer = useSelector((state: RootState) => state.customer);
  const [modalOpen, setModalOpen] = useState(false);
  const [addressToEdit, setAddress] = useState(initialAddress);

  const dispatch = useDispatch();
  const showNotification = useContext(NotificationContext);
    
  const openModal = useCallback((address: Address | null): void => {
    if (address) {
      setAddress({
        Country: address.country as 'US' | 'CA',
        City: address.city as string,
        Postcode: address.postalCode as string,
        Street: address.streetName as string,
        Id: address.id as string,
        billing: user.billingAddressIds?.includes(
          address?.id as string
        ) as boolean,
        shipping: user.shippingAddressIds?.includes(
          address?.id as string
        ) as boolean,
        defaultBilling: address.id === user.defaultBillingAddressId,
        defaultShipping: address.id === user.defaultShippingAddressId,
      });
    } else {
      setAddress(initialAddress);
    }
    setModalOpen(true);
  }, []);

  const closeModal = useCallback((): void => {
    setAddress(initialAddress);
    setModalOpen(false);
  }, []);

  const changeDefault = useCallback((typeDefault: string, dataId: string): void => {
    updateDefaultAddressStatus(user, typeDefault, dataId)
      .then((newUser) => {
        dispatch(setCustomer(newUser));
        showNotification(`Default ${typeDefault} address updated`);
      })
      .catch(() => showNotification('Error'));
  }, [user])

  const addressList = useMemo(
    () =>
      user.addresses.map((address) => (
        <li key={address.id} className="border border-gray-200 mb-3 shadow-lg">
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
                    type="radio"
                    className="ml-2 mr-2 accent-black"
                    checked={address.id === user.defaultBillingAddressId}
                    onChange = {(): void => changeDefault('Billing', address.id as string)}
                  />
                  Set as Default Billing
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
                  Set as Default Shipping
                  <input
                    type="radio"
                    className="ml-2 mr-2 accent-black"
                    checked={address.id === user.defaultShippingAddressId}
                    onChange = {(): void => changeDefault('Shipping', address.id as string)}
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
      )),
    [user, openModal]
  );

  return (
    <div>
      <ul>{addressList}</ul>
      <button
        className={FormStyles.submit_btn}
        onClick={(): void => openModal(null)}
      >
        Add new address
      </button>

      <AddressModal
        isOpen={modalOpen}
        onClose={closeModal}
        address={addressToEdit}
      />
    </div>
  );
}

export default UserAdresses;
