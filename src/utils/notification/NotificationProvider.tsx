import React, { ReactNode, useCallback, useState } from 'react';
import Notification from './Notification';
import NotificationContext from './NotificationContext';

const NotificationProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  const [notification, setNotification] = useState('');

  const showNotification = useCallback((message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 5000);
  }, []);

  const onClose = useCallback(() => {
    setNotification('');
  }, []);

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      {notification && (
        <Notification message={notification} onClose={onClose} />
      )}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
