import { FC } from "react";
import BasePortal from "../Base/BasePortal/BasePortal";
import ImageItems from "./ImageItems/ImageItems";
import ImageView from "./ImageView/ImageView";
import classNames from "classnames";

interface ImagePreviewSliderProps {
  open: boolean
}

const ImagePreviewSlider: FC<ImagePreviewSliderProps> = ({
  open
}): JSX.Element => {



  return <BasePortal>
    <div className={classNames(
      "image-preview-slider",
      { "image-preview-slider--close": !open },
    )}>

      <ImageView />

      <ImageItems />
    </div>
  </BasePortal>
}

export default ImagePreviewSlider