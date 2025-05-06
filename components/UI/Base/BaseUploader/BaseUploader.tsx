import { ChangeEvent, FC, InputHTMLAttributes, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { InputStatus } from '@/@types/ui/input-status';
import DefaultWrapperComponent, {
  IBaseUploaderWrapperComponentProps,
} from './DefaultWrapperComponent/DefaultWrapperComponent';

export type IFile = FileList | string | string[] | null | undefined
export type IThumbnails = string[] | undefined

export interface BaseUploaderProps {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  className?: InputHTMLAttributes<HTMLInputElement>['className'];
  disabled?: InputHTMLAttributes<HTMLInputElement>['disabled'];
  id?: InputHTMLAttributes<HTMLInputElement>['id'];
  value?: IFile;
  status?: InputStatus;
  WrapperComponent?: FC<IBaseUploaderWrapperComponentProps>;
  label?: ReactNode;
  onChange?: (fileList: FileList | null, file: File | null) => void,
  multiple?: InputHTMLAttributes<HTMLInputElement>['multiple']
}

const BaseUploader: FC<BaseUploaderProps> = ({
  id,
  inputProps,
  disabled,
  className,
  value,
  status,
  WrapperComponent = DefaultWrapperComponent,
  label,
  onChange,
  multiple
}) => {

  const [thumbnails, setThumbnails] = useState<IThumbnails>()

  const ref = useRef<HTMLInputElement | null>(null)
  const selectedFileIndex = useRef<number>(0)

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      files
    } = event.target
    const file = files?.length ? files[0] : null

    onChange && onChange(files, file)
  }

  const getThumbnails = (value: IFile): IThumbnails => {
    let thumbnails: IThumbnails = []

    if (typeof value === "string") {
      return thumbnails = [value]
    } else if (Array.isArray(value)) {
      if (value?.length) {

        for (let i = 0; i < value.length; i++) {
          const file = value[i] as unknown as File;

          if (file) {
            thumbnails.push(URL.createObjectURL(file))
          }
        }

      }
    } else if (typeof value === "object" && value !== null) {
      thumbnails.push(URL.createObjectURL(value as unknown as File))
    } else {
      thumbnails = undefined
    }

    return thumbnails
  }

  const onClear = (): void => {
    if (onChange) {
      onChange(null, null)
    }
  }

  const openSelectFile = (): void => {
    ref.current?.click()
  }
  const onChangeFile = (): void => {
    openSelectFile()
  }

  useEffect(() => {
    setThumbnails(getThumbnails(value))
  }, [value])

  return (
    <WrapperComponent
      value={value}
      onClear={onClear}
      onChangeFile={onChangeFile}
      thumbnails={thumbnails}>
      <label
        className={classNames(
          'base-uploader',
          className,
          `base-uploader--${status}`,
          `${className}--${status}`,
        )}
      >
        {label}
        <input
          ref={ref}
          {...inputProps}
          type="file"
          multiple={multiple}
          id={id}
          onChange={onChangeHandler}
          disabled={disabled}
          className={classNames('base-uploader__input')}
        />
      </label>
    </WrapperComponent>
  );
};

export default BaseUploader;
