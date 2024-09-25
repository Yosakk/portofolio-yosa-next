import NextImage from "@/components/NextImage";
import Yosa2 from "@/../public/images/Yosa2.jpg";

export default function AboutSection() {
  return (
    <section className='relative z-20 p-20'>
      <div className="grid grid-cols-2 max-w-7xl">
        <div className="relative flex items-center justify-center">
          <NextImage
            src={Yosa2}
            alt="Profile Image"
            width={300}
            height={300}
            className='absolute z-20 rotate-6 shadow-2xl rounded-lg shadow-[#263a45]'
          />
          <NextImage
            src={Yosa2}
            alt="Profile Image"
            width={300}
            height={300}
            className='absolute z-30 shadow-2xl rounded-lg shadow-[#263a45]'
          />
          <NextImage
            src={Yosa2}
            alt="Profile Image"
            width={300}
            height={300}
            className='-rotate-6 z-10 shadow-2xl rounded-lg shadow-[#263a45]'
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <p className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#40a5ab] to-[#388ec1] bg-clip-text text-transparent  flex justify-center">
              About Me
            </p>
            <p className='text-white text-justify'>
              I am a Junior Fullstack Developer with a passion for front-end and back-end development. My goal is to bridge the gap between design and technology, ensuring seamless user experiences and optimized performance. I have been involved in various development projects that enhanced my ability to work in both solo and team-based environments.

              In addition to my hands-on development work, I have a background in social media management and content creation, which allows me to approach problems from both technical and user-focused perspectives.
            </p>
            <p className="text-xl font-bold text-start bg-gradient-to-r my-3 from-[#40a5ab] to-[#388ec1] bg-clip-text text-transparent ">
              Education
            </p>
            <p className="text-white">
              Universitas Atma Jaya Yogyakarta
              Bachelor's Degree in Informatics (GPA: 3.79/4.00)
              Expected Graduation: Jul 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}