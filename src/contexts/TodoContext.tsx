import React, {createContext, useContext, useState} from "react";
import {ThemeContext} from "./ThemeContext";

type TodoProviderProps = {
    children: React.ReactNode;
};
type NotificationProps = {
    text: string;
    type?: "info" | "warning" | "danger" | "success"
}

type TodoContextType = {
    showNotification: (props: NotificationProps) => void;
};

export const TodoContext = createContext<TodoContextType>({
    showNotification: () => {
    },
});


export const TodoProvider = ({children}: TodoProviderProps) => {
    const [openNotifications, setOpenNotifications] = useState<boolean>(false);
    const [notificationsMessage, setNotificationsMessage] = useState<string>("");
    const {pallet} = useContext(ThemeContext);
    const [notificationColor, setNotificationColor] = useState<string>(pallet.primary)
    const showNotification = ({text, type}: NotificationProps) => {
        setNotificationsMessage(text);
        switch (type) {
            case "danger":
                setNotificationColor(pallet.danger)
                break
            case "warning":
                setNotificationColor(pallet.warning)
                break
            case "success":
                setNotificationColor(pallet.success)
                break
            case "info":
                setNotificationColor(pallet.primary)
                break;
            default:
                setNotificationColor(pallet.background)
        }
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
            {openNotifications && <div style={
                {
                    position: "fixed",
                    padding: "0.5rem 1rem",
                    top: "2rem",
                    right: "2rem",
                    borderRadius: "0.3rem",
                    backgroundColor: `${notificationColor}`,
                    animation: 'slideInAndOut 1s linear forwards',
                    color: "#d2d2d2",
                    fontWeight:"bold"
                }
            }>{notificationsMessage}</div>}
        </TodoContext.Provider>
    );
};
