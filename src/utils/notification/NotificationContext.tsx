import React from 'react';

export type NotificationType = 'success' | 'error' | 'default';

const NotificationContext = React.createContext<
  (message: string, noteType: NotificationType) => void
>(() => {});

export default NotificationContext;
