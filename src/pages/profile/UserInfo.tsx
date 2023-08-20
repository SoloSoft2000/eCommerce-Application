import { Customer } from "@commercetools/platform-sdk";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/reducers/store";
import FormClasses from "../../helpers/enum/form/classes";

function UserInfo(): React.JSX.Element {
  const user: Customer = useSelector((state: RootState) => state.customer);
  
  const [tempFirstName, setFirstName] = useState(user.firstName);
  const [tempLastName, setLastName] = useState(user.lastName);
  const [tempEmail, setEmail] = useState(user.email);
  const [tempBDay, setBDay] = useState(user.dateOfBirth);

  const [isEditing, setIsEditing] = useState(false);

  const startEditing = useCallback(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setBDay(user.dateOfBirth);
    setIsEditing(true);
  }, [setIsEditing, user]);

  const cancelEditing = useCallback(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setBDay(user.dateOfBirth);
    setIsEditing(false);
  }, [setIsEditing, user]);

  const saveChanges = useCallback(() => {
    console.log('save changes', tempFirstName, tempLastName, tempEmail, tempBDay);
    setIsEditing(false);
  }, [setIsEditing, tempFirstName, tempLastName, tempEmail, tempBDay]);

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
              value = {tempEmail}
              readOnly={!isEditing}
              onChange={(e): void => setEmail(e.target.value)}
            />
          <label className="block text-gray-700 mt-3 mb-2" htmlFor="firstName">First Name:</label>
            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="firstName"
              placeholder="First Name*"
              type="text"
              width={FormClasses.HALF_FIELD}
              value = {tempFirstName}
              readOnly={!isEditing}
              onChange={(e): void => setFirstName(e.target.value)}
            />
          <label className="block text-gray-700 mt-3 mb-2"  htmlFor="lastName">Last Name:</label>
            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="lastName"
              placeholder="Last Name*"
              type="text"
              width={FormClasses.HALF_FIELD}
              value = {tempLastName}
              readOnly={!isEditing}
              onChange={(e): void => setLastName(e.target.value)}
            />
          <label className="block text-gray-700 mt-3 mb-2"  htmlFor="birthday">BirthDay:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="birthday"
                type="date"
                readOnly={!isEditing}
                value = {tempBDay}
                onChange={(e): void => setBDay(e.target.value)}
              />
        </div>
      </form>
      {isEditing ? (
        <>
          <button onClick={saveChanges}>Save</button>
          <button onClick={cancelEditing}>Cancel</button>
        </>
      ) : (
        <button onClick={startEditing}>Edit</button>
      )}
  </div>
)}

export default UserInfo;
