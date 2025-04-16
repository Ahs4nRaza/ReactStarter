
import { notification } from "antd";
import { NOTIFICATION_TYPES } from "../constants";

export const notify = ({ type, message, description }) => {
    if (!type) {
        console.error("Notification type is required");
        return;
    }
    if (!Object.values(NOTIFICATION_TYPES).includes(type)) {
        console.error(`Invalid notification type: ${type}`);
        return;
    }

    const notificationClassName = `notification-${type}`;

    notification[type]({
        message,
        description,
        placement: "topRight",
        duration: 3,
        className: notificationClassName

    });
};

