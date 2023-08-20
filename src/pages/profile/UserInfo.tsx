import { Customer } from "@commercetools/platform-sdk";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/reducers/store";
import FormClasses from "../../helpers/enum/form/classes";

function UserInfo(): React.JSX.Element {
  const user: Customer = useSelector((state: RootState) => state.customer);
  
  return (
    <div className="w-full ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className={FormClasses.FORM_CONTAINER}>
          <label className="block text-gray-700 mb-2" htmlFor="email">E-Mail:</label>
            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              placeholder="E-Mail*"
              type="text"
              width={FormClasses.HALF_FIELD}
              value = {user.email as string}
              readOnly
            />
          <label className="block text-gray-700 mt-3 mb-2" htmlFor="firstName">First Name:</label>
            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="firstName"
              placeholder="First Name*"
              type="text"
              width={FormClasses.HALF_FIELD}
              value = {user.firstName as string}
              readOnly
            />
          <label className="block text-gray-700 mt-3 mb-2"  htmlFor="lastName">Last Name:</label>
            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="lastName"
              placeholder="Last Name*"
              type="text"
              width={FormClasses.HALF_FIELD}
              value = {user.lastName as string}
              readOnly
            />
          <label className="block text-gray-700 mt-3 mb-2"  htmlFor="birthday">BirthDay:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="birthday"
                type="date"
                readOnly
                value = {user.dateOfBirth} />
        </div>
      </form>
      <button>Edit</button>
  </div>
)}

export default UserInfo;
