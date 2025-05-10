import { toast } from 'sonner';
import type { ExternalToast } from 'sonner';
import type { ReactNode } from 'react';

type ToastTitle = ReactNode | (() => ReactNode);
type ToastOptions = ExternalToast;

const DEFAULT_OPTIONS: ToastOptions = {
  position: 'top-right',
  richColors: true
};

export class Toast {
  static success(title: ToastTitle, options?: ToastOptions) {
    return toast.success(title, { ...DEFAULT_OPTIONS, ...options });
  }

  static error(title: ToastTitle, options?: ToastOptions) {
    return toast.error(title, { ...DEFAULT_OPTIONS, ...options });
  }

  static warning(title: ToastTitle, options?: ToastOptions) {
    return toast.warning(title, { ...DEFAULT_OPTIONS, ...options });
  }

  static info(title: ToastTitle, options?: ToastOptions) {
    return toast.info(title, { ...DEFAULT_OPTIONS, ...options });
  }

  static loading(title: ToastTitle, options?: ToastOptions) {
    return toast.loading(title, { ...DEFAULT_OPTIONS, ...options });
  }

  static message(title: ToastTitle, options?: ToastOptions) {
    return toast.message(title, { ...DEFAULT_OPTIONS, ...options });
  }

  static custom(id: number | string, jsx: React.ReactElement, options?: ToastOptions) {
    return toast.custom(() => jsx, { ...DEFAULT_OPTIONS, ...options });
  }

  static dismiss(id?: number | string) {
    return toast.dismiss(id);
  }
}
