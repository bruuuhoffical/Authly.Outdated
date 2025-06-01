import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import NotificationBox from '../components/NotificationBox';

let idCounter = 0;

type Notification = {
  id: number;
  message: string;
};

type ContextType = {
  notify: (msg: string) => void;
};

const NotificationContext = createContext<ContextType>({ notify: () => {} });

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const notify = (message: string) => {
    const id = ++idCounter;
    setNotifications((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 4000); 
  };

  const remove = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <div className="notification-wrapper">
        {notifications.map((n, index) => (
          <NotificationBox
            key={n.id}
            id={n.id}
            message={n.message}
            onClose={() => remove(n.id)}
            offset={index}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
