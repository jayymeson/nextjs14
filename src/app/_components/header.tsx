import Image from 'next/image';
import Link from 'next/link';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon
} from '@/components/ui/social-icons';

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-x-44 p-6">
      <Image
        src="/logo.png"
        alt="Jaymeson Mendes"
        width={97}
        height={59}
        quality="95"
        priority={true}
        className="aspect-square object-cover "
      />
      <nav className="flex gap-5">
        <Link href="#home">
          <p className="text-base text-dark-content">Home</p>
        </Link>
        <Link href="#about">
          <p className="text-base text-dark-content">About</p>
        </Link>
        <Link href="#tech-stack">
          <p className="text-base text-dark-content">Tech Stack</p>
        </Link>
        <Link href="#projects">
          <p className="text-base text-dark-content">Projects</p>
        </Link>
        <Link href="#contact">
          <p className="text-base text-dark-content">contact</p>
        </Link>
      </nav>
      <div className="flex justify-center md:justify-start gap-6 ">
        <SocialLink
          href="https://www.instagram.com/jayymeson/"
          icon={InstagramIcon}
        />
        <SocialLink
          href="https://www.linkedin.com/in/jaymesonmendes/"
          icon={LinkedInIcon}
        />
        <SocialLink
          href="https://www.github.com/jayymeson/"
          icon={GitHubIcon}
        />
      </div>
    </header>
  );
};

export default Header;
