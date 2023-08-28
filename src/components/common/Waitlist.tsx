import Container from "@/layouts/container";
import HeroDesign from "../home/HeroDesign";
import WaitlistForm from "./WaitlistForm";
import { cn } from "@/lib/utils";

export default function Waitlist({ isGithub=false, isVSCode=false }: {
  isGithub?: boolean
  isVSCode?: boolean
}) {
  return (
    <Container>
      <div className={cn(
        "min-h-[30rem] bg-white flex flex-col items-center md:pt-0 lg:flex-row lg:space-x-16 justify-between",
        isGithub || isVSCode ? "mt-[3rem] lg:mt-0" : ""
      )}>
        <div className="w-full px-4 xs:px-5 lg:w-[60%] flex flex-col">
          <h1 className="text-center lg:text-left text-teal-500 font-bold">Join Waitlist </h1>
          <p className="my-4 text-lg leading-7 text-center lg:text-left">Join now to get front of the line access.</p>
          <div className="mt-4 md:mx-auto md:w-3/4 lg:mx-0">
            <WaitlistForm />            
          </div>
        </div>
        <div className="my-[3rem]">
          <HeroDesign isWaitlist />
        </div>
      </div>
    </Container>
  )
}
