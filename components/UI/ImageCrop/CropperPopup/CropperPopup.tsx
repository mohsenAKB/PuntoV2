import { FC, useLayoutEffect, useState } from "react";
import DashboardModal from "../../Modal/DashboardModal/DashboardModal";
import BaseImageCropper, { BaseImageCropperProps } from "../BaseImageCropper/BaseImageCropper";
import DashboardFormItem from "../../FormItem/DashboardFormItem/DashboardFormItem";
import AuthSecondaryButton from "../../Button/AuthSecondaryButton/AuthSecondaryButton";
import AuthButton from "../../Button/AuthButton/AuthButton";

export interface CropperPopupProps {
  isOpen?: boolean
  title?: string
  file?: File
  onCancel?: () => void
  onSubmit?: (file: File | undefined) => void
  cropperProps?: Omit<BaseImageCropperProps, "image">
}

const CropperPopup: FC<CropperPopupProps> = ({
  file,
  title,
  isOpen,
  cropperProps,
  onCancel,
  onSubmit
}): JSX.Element => {

  const [imageDataUrl, setImageDataUrl] = useState<string>("");
  const [convertedFile, setConvertedFile] = useState<File | undefined>(file)

  const onSubmitHandler = (): void => {
    if (!file || !onSubmit) return

    onSubmit(convertedFile)
  }

  const setFileSource = async (file: File | undefined): Promise<void> => {
    if (!file) {
      setImageDataUrl("")
      return
    }

    const source = URL.createObjectURL(file)
    setImageDataUrl(source)
  }

  useLayoutEffect(() => {
    setFileSource(file)
  }, [file])

  const onChange = (file: File | undefined, dataUrl: string): void => {
    setConvertedFile(file)
  }

  return <DashboardModal
    show={isOpen}
    className="cropper-popup__modal"
    title={title}
    destroyOnClose>

    <div className="cropper-popup__cropper">
      <BaseImageCropper
        {...cropperProps!}
        image={imageDataUrl}
        onChange={onChange} />
    </div>


    <div className="cropper-popup__footer">
      <DashboardFormItem>
        <AuthButton onClick={onSubmitHandler}>تایید</AuthButton>
      </DashboardFormItem>

      <DashboardFormItem topSpace={false}>
        <AuthSecondaryButton onClick={onCancel}>انصراف</AuthSecondaryButton>
      </DashboardFormItem>
    </div>

  </DashboardModal>
}

export default CropperPopup