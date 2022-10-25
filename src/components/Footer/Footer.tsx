import classes from 'src/components/Footer/Footer.module.scss';
import { Socials } from 'src/components/Socials/Socials';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Socials />
    </footer>
  );
};
