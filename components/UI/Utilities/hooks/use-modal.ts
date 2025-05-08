import { useState } from 'react';

const useModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  const show = (): void => {
    setOpen(true);
  };

  const hide = (): void => {
    setOpen(false);
  };

  const toggle = (): void => {
    setOpen((prevIsOpen) => !prevIsOpen);
  };

  return {
    isOpen: open,
    hide,
    show,
    toggle,
    changeVisibility: setOpen,
  };
};

export default useModal;
