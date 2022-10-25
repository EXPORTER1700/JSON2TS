import { useEffect, useState, useCallback } from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const onResize = useCallback(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return size;
};
