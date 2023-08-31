// import { useSelector } from "react-redux";
import { Customer, CustomerUpdateAction } from "@commercetools/platform-sdk";
// import { RootState } from "../reducers/store";
import updateUser from './updateUser';

function updateDefaultAddressStatus(customer: Customer, typeDefault: string, addressId: string): Promise<Customer> {
  // const customer = useSelector((state: RootState) => state.customer);
  const actionType = typeDefault === 'Shipping' ? 'setDefaultShippingAddress' : 'setDefaultBillingAddress';
  console.log(actionType);
  const action: CustomerUpdateAction = {
      action: actionType,
      addressId
  }
  const body = updateUser(customer, action);
  
  return body;
}

export default updateDefaultAddressStatus;
