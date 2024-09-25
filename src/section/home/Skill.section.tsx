import Skills from "@/components/card/SkillCard";
import { Reveal } from "@/components/reveal/Reveal";

export default function SkillSection() {
  return (
    <section className="relative z-20 ">
        <div className="container mx-auto max-w-7xl">
          <p className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#40a5ab] to-[#388ec1] bg-clip-text text-transparent">
            Skills
          </p>
          <Reveal classname='flex justify-center flex-col md'>
            <Skills />
          </Reveal>
        </div>
      </section>
  )
}