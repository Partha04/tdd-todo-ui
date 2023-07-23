import React, {createContext, useState} from "react";

type TodoContextType = {
  showNotification: (text: string) => void;
};

export const TodoContext = createContext<TodoContextType>({
  showNotification: () => {},
});

type TodoProviderProps = {
  children: React.ReactNode;
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [openNotifications, setOpenNotifications] = useState<boolean>(false);
  const [notificationsMessage, setNotificationsMessage] = useState<string>("");

  const showNotification = (text: string) => {
    setNotificationsMessage(text);
    console.log("here");
    setOpenNotifications(true);
    setTimeout(() => {
      setOpenNotifications(false);
      setNotificationsMessage("");
    }, 3000);
  };

  return (
    <TodoContext.Provider
      value={{
        showNotification,
      }}
    >
      {children}
      {openNotifications && <p>{notificationsMessage}</p>}
    </TodoContext.Provider>
  );
};
