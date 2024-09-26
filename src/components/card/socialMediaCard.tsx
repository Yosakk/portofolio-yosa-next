import UnstyledLink from '@/components/links/UnstyledLink';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';

interface SocialMediaCardProps {
  className?: string;
}

export default function SocialMediaCard({ className }: SocialMediaCardProps) {
  return (
    <section className={`relative z-10 ${className || ''}`}>
      <div className="bg-black/20 py-10">
        <div className="max-w-7xl flex justify-center items-center gap-x-5 md:gap-x-20 mx-auto overflow-x-auto md:overflow-visible whitespace-nowrap hide-scrollbar">
          <UnstyledLink href="mailto:bagasbrawijaya100@gmail.com">
            <FaMailBulk className="w-10 h-10 md:w-14 md:h-14 opacity-55 transition-transform duration-300 transform hover:scale-110 hover:opacity-100 inline-block" />
          </UnstyledLink>
          <UnstyledLink href="https://github.com/Yosakk">
            <FaGithub className="w-10 h-10 md:w-14 md:h-14 opacity-55 transition-transform duration-300 transform hover:scale-110 hover:opacity-100 inline-block" />
          </UnstyledLink>
          <UnstyledLink href="https://www.instagram.com/yosaabagas_/">
            <FaInstagram className="w-10 h-10 md:w-14 md:h-14 opacity-55 transition-transform duration-300 transform hover:scale-110 hover:opacity-100 inline-block" />
          </UnstyledLink>
          <UnstyledLink href="https://www.linkedin.com/in/yosa-bagas/">
            <FaLinkedin className="w-10 h-10 md:w-14 md:h-14 opacity-55 transition-transform duration-300 transform hover:scale-110 hover:opacity-100 inline-block" />
          </UnstyledLink>
          <UnstyledLink href="https://wa.me/6285337921513">
            <FaWhatsapp className="w-10 h-10 md:w-14 md:h-14 opacity-55 transition-transform duration-300 transform hover:scale-110 hover:opacity-100 inline-block" />
          </UnstyledLink>
        </div>
      </div>
    </section>
  );
}
