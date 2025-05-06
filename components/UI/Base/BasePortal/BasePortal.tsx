'use client';

import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  children?: ReactNode;
  parentSelector?: string
}

const BasePortal: FC<IProps> = ({
  children,
  parentSelector
}): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const parentElement = useMemo<Element | null>(() => {
    if (!isMounted) return null

    if (parentSelector) {
      const parentElement = document.querySelector(parentSelector)

      if (parentElement) {
        return parentElement
      }
    }

    return document.body

  }, [parentSelector, isMounted])

  return parentElement ? (
    createPortal(children, parentElement)
  ) : (
    <></>
  ); // createPortal will not be rendered on the server. Only on the client after hydration
};

export default BasePortal;
