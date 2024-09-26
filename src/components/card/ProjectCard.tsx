import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import { Accordion, AccordionItem, Card } from '@nextui-org/react';
import React from 'react';
import { FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import { projectData } from '@/data/projectData';

const ProjectCard = () => {
  return (
    <Accordion>
      {projectData.map((project) => (
        <AccordionItem
          key={project.id}
          aria-label={`Accordion ${project.id}`}
          title={project.title}
          classNames={{ title: 'text-white' }}
        >
          <Card isBlurred classNames={{ body: "shadow-md" }} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center shadow-2xl text-white bg- p-5 rounded-3xl ">
            <div className='space-y-5 order-2 lg:order-1'>
              <h2 className="text-xl font-bold text-[#40a5ab]"
                style={{
                  textShadow: '0 0 10px rgba(64, 165, 171, 0.8), 0 0 20px rgba(64, 165, 171, 0.6)',
                }}
              >{`PROJECT ${project.id}`}</h2>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <UnderlineLink href={project.link} className="text-white">
                <FaGlobe className='mr-3' />
                Go to Website
              </UnderlineLink>
              <div className="flex space-x-3 items-center">
                <FaMapMarkerAlt />
                <p>{project.location}</p>
              </div>
              <Card isFooterBlurred className="block md:hidden w-full col-span-12 sm:col-span-7 shadow-xl">
                <NextImage
                  width={600}
                  height={400}
                  alt={project.title}
                  src={project.image}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </Card>

              <p className="text-lg text-gray-300 mb-4">{project.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className='space-y-3'>
                  <p className="text-lg font-semibold text-[#40a5ab]"
                    style={{
                      textShadow: '0 0 10px rgba(64, 165, 171, 0.8), 0 0 20px rgba(64, 165, 171, 0.6)',
                    }}
                  >
                    Project Created With
                  </p>
                  <div className="flex space-x-5">
                    {project.technologies.map((tech, index) => (
                      <li key={index} className="text-white">
                        <span className=" text-white">{tech}</span>
                      </li>
                    ))}
                  </div>
                </div>
                <div className='space-y-3'>
                  <p className="text-lg font-semibold text-[#40a5ab]"
                    style={{
                      textShadow: '0 0 10px rgba(64, 165, 171, 0.8), 0 0 20px rgba(64, 165, 171, 0.6)',
                    }}>
                    Jobdesk
                  </p>
                  <ul>
                    {project.jobdesk.map((task, index) => (
                      <li key={index} className=" text-white">
                        <span className=" text-white">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center order-1 lg:order-2'>
              <Card isFooterBlurred className="w-full hidden md:block col-span-12 sm:col-span-7 shadow-xl">
                <NextImage
                  width={600}
                  height={400}
                  alt={project.title}
                  src={project.image}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </Card>
            </div>
          </Card>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ProjectCard;
