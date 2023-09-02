import React from 'react';

const NotificationContext = React.createContext<(message: string) => void>(
  () => {}
);

export default NotificationContext;
