import ResumeSS from "../public/Images/ResumeSS.png";
import Image from "next/image";

const Resume = () => {
  return(
    <div className="w-128 h-screen relative">
              <Image src={ResumeSS} alt="Hulu" layout="fill" />
            </div>
  )
}

export default Resume;