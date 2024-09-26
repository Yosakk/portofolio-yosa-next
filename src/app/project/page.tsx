"use client";

import * as React from "react";
import {
  FaChevronCircleRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaWhatsapp,
} from "react-icons/fa";
import Yosa2 from "@/../public/images/Yosa2.jpg";
import { Divider } from "@nextui-org/react";
import NextImage from "@/components/NextImage";
import ProjectCard from "@/components/card/ProjectCard";
import Button from "@/components/buttons/Button";
import UnstyledLink from "@/components/links/UnstyledLink";
import { motion } from "framer-motion";
import SocialMediaCard from "@/components/card/socialMediaCard";


export default function ProjectPage() {
  return (
    <main className="bg-[#090f1d] text-white overflow-hidden">
      <motion.div
        className="absolute z-0 top-0 left-0 w-[12rem] h-[12rem] lg:w-[16rem] lg:h-[16rem] bg-pink-400 rounded-full blur-2xl opacity-30 animate-pulse"
        animate={{
          scale: [1, 1.5, 1.2, 1],
          opacity: [0.2, 0.4, 0.3, 0.2],
          borderRadius: ["30%", "15%", "20%", "30%"],
          translateX: [0, 30, -30, 0],
          translateY: [0, -30, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute z-0 bottom-0 right-12 w-[12rem] h-[12rem] lg:w-[16rem] lg:h-[16rem] bg-blue-700 rounded-t-full blur-2xl opacity-30 animate-pulse"
        animate={{
          scale: [1, 1.5, 1.2, 1],
          opacity: [0.2, 0.4, 0.3, 0.2],
          borderRadius: ["30%", "15%", "20%", "30%"],
          translateX: [0, -20, 20, 0],
          translateY: [0, 20, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
      <div className="relative z-10 flex flex-col justify-between">
        <section className="pt-16 lg:px-20 md:px-10 px-5 mx-auto relative z-10 max-w-7xl my-10 lg:my-20">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 z-10">
            <div className="space-y-5 lg:w-3/4">
              <p className="text-lg md:text-xl text-white">Junior Fullstack Developer</p>
              <p className="text-3xl md:text-5xl font-bold">Yosa Bagas</p>
              <Divider className="my-4 bg-white w-1/4" />
              <p className="text-white text-sm md:text-base lg:text-lg">
                Welcome to My Awesome Portfolio! Here, you'll discover a showcase
                of my most exciting projects, creative work, and technical
                expertise. Each project reflects my passion for development,
                problem-solving, and delivering exceptional results.
              </p>
              <div className="block md:hidden">
                <div className="flex flex-row justify-start space-x-10">
                  <div className="flex-col">
                    <p className="text-start font-light italic text-lg lg:text-xl">Years of <br />Experience</p>
                    <p className="text-5xl md:text-7xl text-start font-bold">3+</p>
                  </div>
                  <div className="flex-col">
                    <p className="text-start font-light italic text-lg lg:text-xl">Projects <br /> Created</p>
                    <p className="text-5xl md:text-7xl text-start font-bold">5+</p>
                  </div>
                </div>
              </div>
              <Button
                className="group bg-transparent hover:bg-transparent outline-none"
                rightIcon={FaChevronCircleRight}
                classNames={{
                  rightIcon:
                    "transition-transform duration-300 group-hover:rotate-90 ml-3",
                }}
              >
                My Project
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="flex md:justify-end">
                <div className="space-y-5">
                  <div className="flex-col space-y-3">
                    <p className="text-end font-light italic text-lg lg:text-xl">Years of <br />Experience</p>
                    <p className="text-5xl md:text-7xl text-end font-bold">3+</p>
                  </div>
                  <div className="flex-col space-y-3">
                    <p className="text-end font-light italic text-lg lg:text-xl">Projects Created</p>
                    <p className="text-5xl md:text-7xl text-end font-bold">5+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SocialMediaCard className="hidden lg:block" />
      </div>
      <SocialMediaCard className="block lg:hidden" />
      <section className="relative mx-auto max-w-7xl pt-16 px-5 ">
        <div className="z-10 space-y-5">
          <p className="text-4xl font-semibold">See My Best Projects</p>
          <p className="text-gray-400">From building dynamic web applications to solving real-world challenges, these projects showcase the diversity of my experience and the dedication I put into every detail. Take a look and explore the journey behind each one.</p>
          <Divider className="bg-gray-400 opacity-20"></Divider>
          <ProjectCard />
          <Divider className="bg-gray-400 opacity-20"></Divider>
        </div>
      </section>

      <div className="hidden md:block">
        <div className="absolute hid inset-0 m-auto z-2 opacity-50 lg:opacity-60 xl:opacity-70 flex justify-center items-start pt-10 pointer-events-none">
          <NextImage
            src={Yosa2}
            width={300}
            height={300}
            alt="Profile Background"
            className="object-cover object-center py-10"
            classNames={{ image: "rounded-xl" }}
          />
        </div>
      </div>
    </main>
  );
}
