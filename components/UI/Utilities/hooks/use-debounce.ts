import { useRef } from 'react';

function useDebounce() {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const execute = (
    callback: CallableFunction,
    delay: number,
  ): NodeJS.Timeout | null => {
    // Clear the previous timeout if it exists
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    // Set a new timeout for the callback
    timeout.current = setTimeout(() => {
      callback();
    }, delay);

    return timeout.current
  };

  return { execute };
}

export default useDebounce;
