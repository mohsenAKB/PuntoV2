'use client';
import {
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import classNames from 'classnames';
import BasePortal from '../BasePortal/BasePortal';
import { IRenderModalElementsHandler } from './@types/modal';
import useDebounce from '../../Utilities/hooks/use-debounce';

export interface ModalProps {
  className?: string;
  wrapperClassName?: string;
  backdropClassName?: string;
  children?: ReactNode;
  show?: boolean;
  hideOnBackdropClick?: boolean;
  destroyOnClose?: boolean;
  onChangeShow?: (visibility: boolean) => void;
  renderHeader?: IRenderModalElementsHandler;
  renderFooter?: IRenderModalElementsHandler;
  onBackdropClick?: () => void;
}

const BaseModal: FC<ModalProps> = ({
  children,
  show = false,
  hideOnBackdropClick,
  backdropClassName,
  className,
  wrapperClassName,
  destroyOnClose = true,
  onChangeShow,
  renderFooter,
  renderHeader,
  onBackdropClick,
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(show);
  const [showBody, setShowBody] = useState<boolean>(show);
  const debounce = useDebounce();

  const open = (): void => {
    setIsOpen(true);
  };

  const close = (): void => {
    setIsOpen(false);
  };

  useEffect(() => {
    onChangeShow && onChangeShow(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (show !== isOpen) {
      setIsOpen(show);
    }
  }, [show]);

  const headerElement = useMemo<ReactNode>(() => {
    if (renderHeader) {
      return (
        <>
          {renderHeader({
            open: open,
            close,
            isShow: isOpen,
          })}
        </>
      );
    }

    return <></>;
  }, [renderHeader, isOpen, close, open]);

  const footerElement = useMemo<ReactNode>(() => {
    if (renderFooter) {
      return (
        <div>
          {renderFooter({
            open,
            close,
            isShow: isOpen,
          })}
        </div>
      );
    }

    return <></>;
  }, [renderFooter, isOpen, close, open]);

  const onBackdropClickHandler = (): void => {
    if (onBackdropClick) onBackdropClick();

    if (hideOnBackdropClick) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (destroyOnClose) {
      if (isOpen) {
        setShowBody(true);
      } else {
        debounce.execute(() => setShowBody(false), 200);
      }
    } else {
      setShowBody(true);
    }
  }, [isOpen, destroyOnClose]);

  return (
    <BasePortal>
      <div
        className={classNames('base-modal', {
          'base-modal--hide': !isOpen,
          wrapperClassName,
        })}
      >
        <div
          className={classNames(
            'base-modal__backdrop',
            { [`${className}__backdrop`]: className },
            backdropClassName,
          )}
          onClick={onBackdropClickHandler}
        ></div>

        <div
          className={classNames(
            'base-modal__main',
            { 'base-modal__main--visible': isOpen },
            { 'base-modal__main--hide': !isOpen },
            className,
            {
              [`${className}--visible`]:
                className && isOpen,
            },
            {
              [`${className}--hide`]: className && !isOpen,
            },
          )}
        >
          {headerElement}

          <div
            className={classNames(
              'base-modal__children',
              {
                [`${className}__children`]: className,
              },
            )}
          >
            {showBody && children}
          </div>
          {footerElement}
        </div>
      </div>
    </BasePortal>
  );
};

export default BaseModal;
