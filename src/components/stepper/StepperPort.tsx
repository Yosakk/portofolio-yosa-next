import React, { useState, useEffect, useRef } from 'react';
import steps from '@/data/stepData';
import Image from 'next/image';
import NextImage from '@/components/NextImage';

export default function StepperPort() {
  const [activeStep, setActiveStep] = useState(0);
  const contentRef = useRef(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <NextImage
            src={steps[activeStep].image}
            alt={steps[activeStep].label}
            width={400}
            height={400}
            className="shadow-2xl rounded-lg shadow-[#457086]"
          />
        </div>
        <div className="relative space-y-8" ref={contentRef}>
          {steps.map((step, index) => (
            <div key={step.label} className="relative">
              {index !== steps.length - 1 && (
                <div
                  className={`absolute left-4 top-10 h-full text-white w-px ${activeStep >= index ? 'bg-blue-600' : 'bg-gray-300'} transition-all duration-300`}
                ></div>
              )}
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setActiveStep(index)}  // Set active step on click
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${activeStep >= index ? 'bg-blue-600' : 'bg-gray-400'} transition-all duration-300`}
                >
                  {index + 1}
                </div>
                <h2 className={`ml-4 text-lg font-medium text-white`}>
                  {step.label}
                </h2>
              </div>
              {activeStep === index && (
                <div className="ml-7 mt-4 p-6 rounded-lg shadow-l">
                  <p className="mb-2 text-white">
                    {step.month} - {step.year}
                  </p>
                  <p className="text-white mb-4">{step.description}</p>
                  <div className="space-x-4">
                    {activeStep < steps.length - 1 && (
                      <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300"
                        onClick={handleNext}
                      >
                        Continue
                      </button>
                    )}
                    {activeStep > 0 && (
                      <button
                        className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all duration-300"
                        onClick={handleBack}
                      >
                        Back
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
