import React from 'react';
import debounce from 'lodash.debounce';

export default function useDebounce(callback: () => void, debounceTime = 1500) {
  const ref = React.useRef<() => void>();

  React.useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = React.useMemo(() => {
    const func = () => {
      ref.current?.();
    };
    return debounce(func, debounceTime);
  }, [debounceTime]);

  return debouncedCallback;
}
