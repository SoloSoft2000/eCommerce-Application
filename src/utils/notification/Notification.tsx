import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import NotificationStyles from '../../assets/styles/notification.module.scss';

type NotificationProps = {
  message: string;
  onClose: () => void;
};

const Notification = ({
  message,
  onClose,
}: NotificationProps): React.JSX.Element => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div onClick={onClose} className={NotificationStyles.portal}>
      {message}
    </div>,
    document.body
  );
};

export default Notification;
