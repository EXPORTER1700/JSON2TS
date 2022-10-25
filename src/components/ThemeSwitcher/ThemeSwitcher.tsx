import classes from 'src/components/ThemeSwitcher/ThemeSwitcher.module.scss';
import SunIcon from 'public/sun-icon.svg';
import MoonIcon from 'public/moon-icon.svg';
import { useTheme } from 'src/hooks/useTheme';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={classes.container} onClick={toggleTheme}>
      {theme === 'dark' && <SunIcon />}
      <div className={`${classes.switch} ${classes[theme]}`} />
      {theme === 'light' && <MoonIcon />}
    </button>
  );
};
