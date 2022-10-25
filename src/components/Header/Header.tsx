import classes from 'src/components/Header/Header.module.scss';
import { ThemeSwitcher } from 'src/components/ThemeSwitcher/ThemeSwitcher';

export const Header = () => {
  return (
    <header className={classes.header}>
      <span className={classes.title}>
        JSON<span>2</span>TS
      </span>
      <ThemeSwitcher />
    </header>
  );
};
