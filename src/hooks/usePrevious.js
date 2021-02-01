const { useRef, useEffect } = require('react');

export default function usePrevious(value) {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
