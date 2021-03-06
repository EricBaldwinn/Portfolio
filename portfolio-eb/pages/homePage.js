import Image from "next/image";
import heroImage from "../public/Images/Headshot.jpg";

const HomePage = () => {
  return(
    <div name="home">
      <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28">
        <div className="w-5/6 h-128 shadow-xl rounded-full relative px-10 hidden md:block">
          <Image src={heroImage} alt="heroImage" layout="fill" objectFit="cover" className="rounded-full cursor-pointer hidden md:block"/>
        </div>
        <div className="flex flex-col md:ml-20 mx-10 mt-10 left-24 relative">
          <h1 className="font-bold text-7xl text-left mb-5">
            Hello, I am <span className="text-blue-600"> Eric </span>
          </h1>
          <p className="text-left w-5/6 text-lg font-serif">I&apos;m an aspiring software engineer pursuing a goal of creating impactful and user friendly websites and applications </p>
          <a href="https://github.com/EricBaldwinn" target="_blank" rel="noreferrer" className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-blue-600 rounded-md w-60 h-16 text-lg hover:text-black">
            See My Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage;