import Image from 'next/image';
import classes from 'src/components/Socials/Socials.module.scss';

export const Socials = () => {
  return (
    <div className={classes.container}>
      <a
        href="https://www.instagram.com/i_stetsenko_/"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/instagram-icon.png" width={30} height={30} />
      </a>
      <a href="https://t.me/exporter_1700" target="_blank" rel="noreferrer">
        <Image src="/telegram-icon.png" width={30} height={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%8F-%D1%81%D1%82%D0%B5%D1%86%D0%B5%D0%BD%D0%BA%D0%BE-56b013239/"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/linkedin-icon.png" width={30} height={30} />
      </a>
      <a
        href="https://github.com/EXPORTER1700"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/git-icon.png" width={30} height={30} />
      </a>
    </div>
  );
};
