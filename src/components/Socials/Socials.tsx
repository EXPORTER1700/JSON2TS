import Image from 'next/image';
import { instagram, git, telegram, linkedin } from 'src/constants/socials';
import classes from 'src/components/Socials/Socials.module.scss';

export const Socials = () => {
  return (
    <div className={classes.container}>
      <a href={instagram} target="_blank" rel="noreferrer">
        <Image src="/instagram-icon.png" width={30} height={30} />
      </a>
      <a href={telegram} target="_blank" rel="noreferrer">
        <Image src="/telegram-icon.png" width={30} height={30} />
      </a>
      <a href={linkedin} target="_blank" rel="noreferrer">
        <Image src="/linkedin-icon.png" width={30} height={30} />
      </a>
      <a href={git} target="_blank" rel="noreferrer">
        <Image src="/git-icon.png" width={30} height={30} />
      </a>
    </div>
  );
};
