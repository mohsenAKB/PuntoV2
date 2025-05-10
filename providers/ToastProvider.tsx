'use client';

import { ILayout } from "@/@types/component";
import { FC, JSX } from "react";
import { Toaster } from 'sonner'

const ToastProvider: FC<ILayout> = ({
  children
}): JSX.Element => {

  return <>
    <Toaster />

    {children}
  </>
}

export default ToastProvider