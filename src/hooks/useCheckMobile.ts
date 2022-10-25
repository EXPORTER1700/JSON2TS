import { useWindowSize } from 'src/hooks/useWindowSize';
import { useMemo } from 'react';

export const useCheckMobile = () => {
  const { width } = useWindowSize();

  return useMemo(() => {
    return width < 800;
  }, [width]);
};
