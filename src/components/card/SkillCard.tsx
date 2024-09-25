// src/components/Skills/Skills.js
import React from 'react';
import Tilt from 'react-parallax-tilt';
import skillsData from '../../data/skillData';

const Skills = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillsData.map((skillCategory, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            scale={1.05}
            transitionSpeed={400}
          >
            <div className="bg-[#263a45] min-h-[17rem] p-5 rounded-lg transform transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-rotate-y-6">
              <h3 className="text-xl font-bold text-white">{skillCategory.category}</h3>
              <ul className="text-white">
                {skillCategory.skills.map((skill, idx) => (
                  <li key={idx} className="mb-1">
                    {skill.name} - <span className="italic text-gray-400">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Skills;
