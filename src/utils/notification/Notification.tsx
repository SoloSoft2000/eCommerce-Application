import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import NotificationStyles from '../../assets/styles/notification.module.scss';
import { NotificationType } from './NotificationContext';

type NotificationProps = {
  message: string;
  noteType: NotificationType;
  onClose: () => void;
};

const Notification = ({
  message,
  noteType,
  onClose,
}: NotificationProps): React.JSX.Element => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  let classname = NotificationStyles.portaldef;
  if (noteType === 'success') {
    classname = NotificationStyles.success;
  }
  if (noteType === 'error') {
    classname = NotificationStyles.error;
  }

  return ReactDOM.createPortal(
    <div onClick={onClose} className={classname}>
      {message}
    </div>,
    document.body
  );
};

export default Notification;
