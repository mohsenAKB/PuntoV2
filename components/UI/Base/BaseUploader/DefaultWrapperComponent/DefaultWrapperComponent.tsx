import { FC, MutableRefObject } from 'react';
import { IFile, IThumbnails } from '../BaseUploader';

export interface IBaseUploaderWrapperComponentProps {
  children?: JSX.Element;
  value?: IFile;
  thumbnails?: IThumbnails
  onClear?: () => void
  onChangeFile?: () => void
}

const DefaultWrapperComponent: FC<
  IBaseUploaderWrapperComponentProps
> = ({ children }): JSX.Element => {
  return <>{children}</>;
};

export default DefaultWrapperComponent;
