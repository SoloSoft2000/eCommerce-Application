import { Customer } from "@commercetools/platform-sdk";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/reducers/store";

function Adresses(): React.JSX.Element {
  const user: Customer = useSelector((state: RootState) => state.customer);
  return (
    <div>
      <ul>
        {user.addresses.map((adress, idx) => (
          <li key={idx}>
            {adress.streetName}, {adress.city}, {adress.country}, {adress.postalCode}
            {adress.id === user.defaultShippingAddressId && <span> Default Shipping </span>}
            {adress.id === user.defaultBillingAddressId && <span> Default Billing </span>}
          </li>
        ))}
      </ul>
  </div>
)}

export default Adresses;
