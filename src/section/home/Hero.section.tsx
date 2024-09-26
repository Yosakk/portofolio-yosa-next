import Link from 'next/link';
import Button from "@/components/buttons/Button";
import IconLink from "@/components/links/IconLink";
import { Reveal } from "@/components/reveal/Reveal";
import Image from "next/image";
import { FaChevronCircleRight, FaDownload, FaFileDownload, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ProfileImage from '@/../public/images/Profile-Page.png';
import NextImage from '@/components/NextImage';
import UnstyledLink from '@/components/links/UnstyledLink';
import ButtonLink from '@/components/links/ButtonLink';

export default function HeroSection() {
  return (
    <section className="relative z-20 text-white px-10 md:px-16 lg:px-20 pt-20 lg:pt-10">
      <div className="relative z-20 w-full h-full flex flex-row lg:px-20 md:px-10 px-5">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#090f1d] to-transparent z-10"></div>
        <div className="relative w-full lg:w-1/2 z-20  flex items-center justify-center">
          <div className="space-y-4 text-justify">
            <Reveal>
              <h1 className="text-2xl md:text-5xl font-bold leading-tight">
                Hello, I am <span className='bg-gradient-to-r from-[#40a5ab] to-[#388ec1] bg-clip-text text-transparent'>Yosa Bagas</span>
              </h1>
            </Reveal>

            <p className="text-lg">
              Fullstack Developer
            </p>
            <p>A passionate Fullstack Developer skilled in React.js, Next.js, Nest.js, TypeScript, Flutter, gRPC, Redux, Tailwind CSS, and Microservices. Currently interning at Quadra Karya Sentosa, where I’m expanding my expertise with Docker and modern web technologies. I enjoy solving complex problems and delivering scalable, efficient solutions through collaboration and innovative coding.</p>
            <div className="flex space-x-4 justify-start">
              <ButtonLink
                href="/file/CV.pdf"
                download="CV-Made-Yosa-Bagas-Brawijaya.pdf"
                className="group inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#40a5ab] to-[#388ec1] text-white font-bold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <div className="relative flex items-center mr-5 ">
                  <FaDownload className="absolute group-hover:translate-y-4 group-hover:opacity-0 transition-all duration-300" />
                  <FaFileDownload className="absolute -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                Download CV
              </ButtonLink>

              <IconLink icon={FaLinkedin} variant='ghost' isDarkBg href='https://www.linkedin.com/in/yosa-bagas/' />
              <IconLink icon={FaInstagram} variant='ghost' isDarkBg href='https://www.linkedin.com/in/yosa-bagas/' />
              <IconLink icon={FaWhatsapp} variant='ghost' isDarkBg href='https://www.linkedin.com/in/yosa-bagas/' />
            </div>
          </div>
        </div>
        <div className='relative hidden lg:block w-1/2 mt-8 md:mt-0 z-0'>
          <div className="flex justify-center items-center ">
            <NextImage
              src={ProfileImage}
              alt="Profile Image"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
