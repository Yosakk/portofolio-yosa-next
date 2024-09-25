import StepperPort from "@/components/stepper/StepperPort";

export default function WorkExperience() {
  return (
    <section className="relative z-20 py-16 ">
      <div className="container mx-auto max-w-7xl space-y-10 ">
        <p className="text-4xl font-bold text-center  bg-gradient-to-r from-[#40a5ab] to-[#388ec1] bg-clip-text text-transparent">
          Work Experience
        </p>
        <p className='text-white text-center'>
          In addition to my hands-on development work, I have a background in social media management and content creation, which allows me to approach problems from both technical and user-focused perspectives.
        </p>
        <StepperPort />
      </div>
    </section>
  );
}