import React, { InputHTMLAttributes } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import "react-notifications/lib/notifications.css";

export const messageSuccess = (texto: string, titulo?: string) => {
  return NotificationManager.success(texto, titulo);
};

export const messageInfo = (texto: string) => {
  return NotificationManager.info(texto);
};

export const messageError = (texto: string) => {
  return NotificationManager.error(texto);
};

export const messageWarning = (texto: string) => {
  return NotificationManager.warning(texto);
};

const Message: React.FC = ({ ...rest }) => {
  return <NotificationContainer />;
};

export default Message;
