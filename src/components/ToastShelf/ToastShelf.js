import React from "react";

import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  if (toasts.length < 1) return null;

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast, index) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast index={index} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
