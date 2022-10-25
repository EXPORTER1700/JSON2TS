import { FC, PropsWithChildren } from 'react';
import { Header } from 'src/components/Header/Header';
import { Footer } from 'src/components/Footer/Footer';
import classes from 'src/components/Layout/Layout.module.scss';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};
