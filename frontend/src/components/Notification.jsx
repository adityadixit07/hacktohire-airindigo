import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

function Notification() {
  const { notification, clearNotification } = useContext(NotificationContext);

  if (!notification) return null;

  return (
    <div className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
      <p>{notification}</p>
      <button onClick={clearNotification} className="ml-2 text-sm underline">
        Dismiss
      </button>
    </div>
  );
}

export default Notification;
