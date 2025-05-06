import { useEffect, useState } from "react"

export const useComponent = () => {
  const [isMounted, setIsMounted] = useState(false)


  useEffect(() => {
    setIsMounted(true)

    return () => {
      setIsMounted(false)
    }
  }, [])

  return {
    isMounted,
  }
}