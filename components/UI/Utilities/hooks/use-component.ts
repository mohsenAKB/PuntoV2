import { useEffect, useState } from 'react';

const useComponent = () => {
  const [isMounted, setIsMounted] =
    useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return {
    isMounted,
  };
};

export default useComponent;
