import React, { useEffect, useState, ChangeEvent, FC } from "react";
import { FixedCropper, ImageRestriction, AbstractCropperInstanceCallback, ExtendedSettings, FixedCropperSettings, FixedCropperProps } from 'react-advanced-cropper';
import "react-advanced-cropper/dist/style.css";
import { AbstractCropperRef } from "react-advanced-cropper/dist/components/AbstractCropper";
import useDebounce from "../../Utilities/hooks/use-debounce";

export interface BaseImageCropperProps extends Omit<FixedCropperProps, "onChange"> {
  image: string | null
  onChange?: (file: File, dataURL: string) => void
}

const BaseImageCropper: FC<BaseImageCropperProps> = (props) => {

  const {
    image,
    onChange
  } = props

  const [show, setShow] = useState(true)
  const debounce = useDebounce();

  function dataURLToFile(dataURL: string): File {
    // Split the dataURL to separate the MIME type and base64 data
    const [header, base64Data] = dataURL.split(',');
    const mimeType = header.match(/:(.*?);/)?.[1] || '';

    // Decode the base64 string to binary data
    const binaryString = atob(base64Data);
    const binaryData = new Uint8Array(binaryString.length);

    for (let i = 0; i < binaryString.length; i++) {
      binaryData[i] = binaryString.charCodeAt(i);
    }

    // Create and return a File object
    return new File([binaryData], Date.now().toString(), { type: mimeType });
  }

  const onChangeHandler: AbstractCropperInstanceCallback<AbstractCropperRef<ExtendedSettings<FixedCropperSettings>>> | undefined = (cropper) => {
    if (onChange && cropper) {
      const canvas = cropper.getCanvas();

      if (canvas) {
        debounce.execute(() => {
          const dataUrl = canvas?.toDataURL()
          onChange(dataURLToFile(dataUrl), dataUrl)
        }, 100)
      }
    }
  }

  const onLoadImage = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value = "";
  };

  useEffect(() => {
    setShow(false)
    setTimeout(() => {
      setShow(true)
    }, 150)
    // Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  if (!show) return <></>

  return (
    <div className="image-cropper">
      <div className="image-cropper__cropper-wrapper">
        <FixedCropper
          // stencilSize={{
          //   width: 200,
          //   height: 200
          // }}
          {...props}
          src={image}
          onChange={onChangeHandler}
          autoReconcileState
          imageRestriction={ImageRestriction.stencil}
        />
      </div>
    </div>
  );
};

export default BaseImageCropper