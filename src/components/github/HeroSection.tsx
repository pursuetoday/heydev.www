import Container from "@/layouts/container";

export default function GithubHeroSection() {
  return (
    <Container>
      <div className="px-5 mt-[2rem] md:mt-[5rem] pt-[2rem] md:py-[2rem] md:pb-[5rem]">
        <h1 className="text-center font-bold text-[#343434] leading-[3.1rem] text-2xl lg:text-4xl lg:whitespace-nowrap">
          GitHub App - Elevate Your Pull Request Reviews
        </h1>
        <p className="text-center my-6 text-teal-500 font-bold text-xl">
          Your ultimate partner for unparalleled pull request reviews.{" "}
          <br className="hidden md:block" />Say goodbye to manual, time-consuming reviews and embrace a{" "}
          <br className="hidden md:block" />streamlined process that enhances collaboration and code quality.
        </p>
      </div>
    </Container>
  )
}
