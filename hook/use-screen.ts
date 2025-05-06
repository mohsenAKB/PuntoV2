import { useEffect, useMemo, useState } from "react"

const mobile = 640;
const tablet1 = 768;
const tablet2 = 1024;
const desktop = 1280;

export const useScreen = () => {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      setWidth(document.body.clientWidth)
      setHeight(document.body.clientHeight)
    })

    observer.observe(document.body)

    return () => {
      observer.disconnect();
    };
  }, [])

  const isTabletMode = useMemo<boolean>(() => {
    return width <= tablet1 && width > mobile
  }, [width])

  const isMobileMode = useMemo<boolean>(() => {
    return width <= mobile
  }, [width])

  const isDesktopMode = useMemo<boolean>(() => {
    return width > tablet1
  }, [width])


  return {
    width,
    height,
    isTabletMode,
    isMobileMode,
    isDesktopMode,
  }
}