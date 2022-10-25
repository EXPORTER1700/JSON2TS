import { useEffect } from 'react';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { setTheme, ThemeTypes } from 'src/store/theme';

export const useTheme = () => {
  const { theme } = useAppSelector((state) => state.themeReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const appTheme = localStorage.getItem('app-theme');

    if (appTheme) {
      dispatch(setTheme(appTheme as ThemeTypes));
    } else {
      const isDarkTheme = window?.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      const defaultTheme = isDarkTheme ? ThemeTypes.DARK : ThemeTypes.LIGHT;

      dispatch(setTheme(defaultTheme));
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme =
      theme === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT;

    dispatch(setTheme(newTheme));
    localStorage.setItem('app-theme', newTheme);
  };

  return { theme, toggleTheme };
};
