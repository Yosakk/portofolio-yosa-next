import ButtonLink from '@/components/links/ButtonLink';
import React from 'react';
import {
  FaWhatsapp,
  FaMailBulk,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-[#090f1d] text-white py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">

            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl font-bold">My Portfolio</h1>
              <p className="text-gray-400 mt-2 max-w-xs">
                A modern solution for all your needs. We're here to help you
                achieve your goals and make the web a better place.
              </p>
            </div>

            <div className="flex space-x-4">
              <ButtonLink
                variant='ghost'
                href="https://wa.me/6285337921513"
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
                aria-label="Facebook"
              >
                <FaWhatsapp />
              </ButtonLink>
              <ButtonLink
                variant='ghost'
                href="mailto:bagasbrawijaya100@gmail.com"
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
                aria-label="Twitter"
              >
                <FaMailBulk />
              </ButtonLink>
              <ButtonLink
                variant='ghost'
                href="https://www.instagram.com/yosaabagas_/"
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
                aria-label="Instagram"
              >
                <FaInstagram />
              </ButtonLink>
              <ButtonLink
                variant='ghost'
                href="https://www.linkedin.com/in/yosa-bagas/"
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </ButtonLink>
              <ButtonLink
                variant='ghost'
                href="https://github.com/Yosakk"
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
                aria-label="GitHub"
              >
                <FaGithub />
              </ButtonLink>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
