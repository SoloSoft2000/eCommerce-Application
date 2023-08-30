import { Customer } from '@commercetools/platform-sdk';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/reducers/store';
import UserInfoStyles from '../../assets/styles/userinfo.module.scss';

function UserAdresses(): React.JSX.Element {
  const user: Customer = useSelector((state: RootState) => state.customer);
  console.log(user);

  return (
    <div>
      <ul>
        {user.addresses.map((address, idx) => (
          <li key={idx} className="border border-gray-200">
            <div className="p-4">
              <div className="text-sm font-semibold text-gray-700">
                {address.country === 'US' ? 'USA' : 'Canada'},{' '}
                {address.postalCode}, {address.city}
              </div>
              <div className="text-sm text-gray-600 mt-1 mb-1">
                {address.streetName}
              </div>
              <div className="flex justify-around items-center">
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
              <button className={UserInfoStyles.addressBtn}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserAdresses;
