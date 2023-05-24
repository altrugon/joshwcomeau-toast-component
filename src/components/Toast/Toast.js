import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import { ToastContext } from "../ToastProvider";
import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ index }) {
  const { toasts, removeToast } = React.useContext(ToastContext);
  const toast = toasts[index];
  const Icon = ICONS_BY_VARIANT[toast.variant];

  function handlekeyDown(event, id) {
    event.preventDefault();
    if (event.code === "Enter" || event.code === "Space") {
      removeToast(id);
    }
  }

  return (
    <div className={`${styles.toast} ${styles[toast.variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{toast.variant}</VisuallyHidden>
        {toast.message}
      </p>
      <button
        className={styles.closeButton}
        tabIndex={0}
        onKeyDown={(event) => {
          handlekeyDown(event, toast.id);
        }}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X
          size={24}
          onClick={() => {
            removeToast(toast.id);
          }}
        />
      </button>
    </div>
  );
}

export default Toast;
