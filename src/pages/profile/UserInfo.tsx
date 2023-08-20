import { Customer } from "@commercetools/platform-sdk";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/reducers/store";

function UserInfo(): React.JSX.Element {
  const user: Customer = useSelector((state: RootState) => state.customer);
  return (
    <div>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Date of Birth: {user.dateOfBirth}</p>
  </div>
)}

export default UserInfo;
