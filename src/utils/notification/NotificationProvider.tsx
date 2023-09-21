import React, { ReactNode, useCallback, useState } from 'react';
import Notification from './Notification';
import NotificationContext, { NotificationType } from './NotificationContext';

const NotificationProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  const [notification, setNotification] = useState<{
    message: string;
    noteType: NotificationType;
  } | null>(null);

  const showNotification = useCallback(
    (message: string, noteType: NotificationType) => {
      setNotification({ message, noteType });
      setTimeout(() => setNotification(null), 5000);
    },
    []
  );

  const onClose = useCallback(() => {
    setNotification(null);
  }, []);

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      {notification && (
        <Notification
          message={notification.message}
          noteType={notification.noteType as NotificationType}
          onClose={onClose}
        />
      )}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
