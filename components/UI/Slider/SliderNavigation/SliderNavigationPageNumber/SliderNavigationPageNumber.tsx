import { convertToPersian } from "@/utils";
import { FC, useMemo } from "react";

interface SliderNavigationPageNumberProps {
  total: number
  current: number
}

const SliderNavigationPageNumber: FC<SliderNavigationPageNumberProps> = ({
  current,
  total
}): JSX.Element => {

  const currenValue = useMemo<number>(() => {
    if (total !== 0) return current + 1

    return current
  }, [current, total])

  return <div className="slider-navigation-pagination">
    {convertToPersian(total)} / {convertToPersian(currenValue)}
  </div>
}

export default SliderNavigationPageNumber