import React, { createContext, useState } from "react";

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
  };

  const clearNotification = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider
      value={{ notification, showNotification, clearNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
