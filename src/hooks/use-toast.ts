
import { useState, useCallback } from "react";

type ToastProps = {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
  action?: React.ReactNode;
};

type Toast = ToastProps & {
  id: string;
};

let toastCount = 0;

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(
    (props: ToastProps) => {
      const id = `toast-${++toastCount}`;
      const newToast = { ...props, id };
      
      setToasts((prevToasts) => [...prevToasts, newToast]);

      // Auto-dismiss after 5 seconds
      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
      }, 5000);

      return id;
    },
    []
  );

  const dismissToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
  }, []);

  return {
    toasts,
    toast,
    dismissToast,
  };
};

export const toast = (props: ToastProps) => {
  // This is a fallback method when used outside of components
  console.log("Toast outside of React component:", props);
  return "";
};
