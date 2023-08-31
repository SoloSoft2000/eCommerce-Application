// import { useSelector } from "react-redux";
import { Customer, CustomerSetDefaultBillingAddressAction, CustomerSetDefaultShippingAddressAction } from "@commercetools/platform-sdk";
// import { RootState } from "../reducers/store";
import updateUser from './updateUser';

function updateDefaultAddressStatus(customer: Customer, typeDefault: string, addressId: string): Promise<Customer> {
  // const customer = useSelector((state: RootState) => state.customer);

  const action: CustomerSetDefaultBillingAddressAction | CustomerSetDefaultShippingAddressAction = {
      action: typeDefault === 'Shipping' ? 'setDefaultShippingAddress' : 'setDefaultBillingAddress',
      addressId
  }
  const body = updateUser(customer, action);
  
  return body;
}

export default updateDefaultAddressStatus;
