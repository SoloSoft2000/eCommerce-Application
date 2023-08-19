import React, { useState } from 'react';
import {Customer
} from '@commercetools/platform-sdk';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RootState } from '../utils/reducers/store';

function UserProfilePage(): React.JSX.Element {
  const user: Customer = useSelector((state: RootState) => state.customer);

  const [editMode, setEditMode] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [addresses, setAddresses] = useState(user.addresses || []);
  
  const methods = useForm();

  const onSubmit = methods.handleSubmit(console.log);
  
  const handleEditAddress = (index: number): void => {
    console.log('edit', index);
    
  };

  const handleDeleteAddress = (index: number): void => {
    console.log('delete', index);
    
  };

  const handleAddAddress = (): void => {
    console.log('add adress');
    setAddresses([]);
    
  };

  return (
    <main className="container mx-auto">
      <h3 className="text-xl font-bold pt-20 text-center">User Profile</h3>
      <div>
      {editMode ? (
        <form onSubmit={onSubmit}>
          <input name="firstName" defaultValue={user.firstName} required />
          <input name="lastName" defaultValue={user.lastName} required />
          <input type="email" name="email" defaultValue={user.email} required />
          <input type="date" name="dob" defaultValue={user.dateOfBirth} required />
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        <div>
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Date of Birth: {user.dateOfBirth}</p>
        </div>
      )}

      <button onClick={(): void => setEditMode(!editMode)}>
        {editMode ? "Cancel Editing" : "Edit Profile"}
      </button>

      <button onClick={(): void => setShowChangePasswordModal(true)}>Change Password</button>

      {showChangePasswordModal && (
        <div className="password-modal">
          <form onSubmit={onSubmit}>
            <input type="password" name="currentPassword" placeholder="Current Password" required />
            <input type="password" name="newPassword" placeholder="New Password" required />
            <input type="password" name="confirmPassword" placeholder="Confirm New Password" required />
            <button type="submit">Update Password</button>
          </form>
          <button onClick={(): void => setShowChangePasswordModal(false)}>Close</button>
        </div>
      )}

      <h2>Addresses</h2>
      {addresses.map((address, index) => (
        <div key={index} className="address">
          <p>{address.streetName}, {address.city}, {address.state}, {address.postalCode}, {address.country}</p>
          {editMode && (
            <div>
              <button onClick={(): void => handleEditAddress(index)}>Edit</button>
              <button onClick={(): void => handleDeleteAddress(index)}>Delete</button>
            </div>
          )}
        </div>
      ))}

      {editMode && (
        <button onClick={handleAddAddress}>Add New Address</button>
      )}
    </div>
        
    </main>
  );
}

export default UserProfilePage;
