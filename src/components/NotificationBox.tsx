import { useEffect, useState } from 'react';
import logo from '../assets/logo/authly-nobg.png';

const NotificationBox = ({
  message,
  onClose,
  offset,
}: {
  message: string;
  onClose: () => void;
  offset: number;
}) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const duration = 4000;
    const step = 100 / (duration / 50);
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p - step;
        if (next <= 0) {
          clearInterval(interval);
          return 0;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="notification-box"
      style={{
        bottom: `${offset * 80 + 20}px`,
      }}
    >
      <img src={logo} alt="logo" className="notification-logo" />
      <span className="notification-text">{message}</span>
      <button className="notification-close" onClick={onClose}>×</button>
      <div className="notification-progress" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default NotificationBox;
