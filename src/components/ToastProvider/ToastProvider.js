import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  function popToast(variant, message) {
    const newToast = {
      id: crypto.randomUUID(),
      variant: variant,
      message: message,
    };
    setToasts([...toasts, newToast]);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  function removeToast(id) {
    const remainingToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(remainingToasts);
  }

  const value = {
    message,
    setMessage,
    variant,
    setVariant,
    toasts,
    setToasts,
    popToast,
    removeToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
