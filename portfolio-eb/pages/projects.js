import { Element } from "react-scroll";
import Image from "next/image";
import BTImage from "../public/Images/BoredToursImage.png";
import Spotify from "../public/Images/SpotifyImage.png";
import Product from "../public/Images/ProductImage.png";
import Hulu from "../public/Images/HuluImage.png";
import CatWalk from "../public/Images/Catwalk.png";
import Portfolio from "../public/Images/PortfolioImage.png";
export const Projects = () => {

  return (
    <div>
        <Element id="projects" name="projects">
          <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
            <h2 className="text-blue-600 text-6xl font-bold text-center">My Projects</h2>
          </div>

          <div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
            <div className="rounded w-80 h-60 shadow-xl relative">
              <a href="https://hulu-yt-clone-1hxk4x178-ericbaldwinn.vercel.app/?genre=fetchTrending" target="_blank" rel="noreferrer">
              <Image src={Hulu} alt="Hulu" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
              <p className="relative bottom-6 text-center text-sm uppercase text-gray-400">Hulu Clone</p>
              </a>
            </div>
            <div className="rounded w-80 h-60 shadow-xl relative">
            <a href="https://github.com/EricBaldwinn/Spotify-Clone" target="_blank" rel="noreferrer">
              <Image src={Spotify} alt="Spotify" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
              <p className="relative bottom-6 text-center text-sm uppercase text-gray-400">Spotify Clone</p>
              </a>
            </div>
            <div className="rounded w-80 h-60 shadow-xl relative">
              <a href="https://github.com/EricBaldwinn/Product-API" target="_blank" rel="noreferrer">
              <Image src={Product} alt="ProductAPI" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
              <p className="relative bottom-6 text-center text-sm uppercase text-gray-400">Scaling backend</p>
              </a>
            </div>
          </div>

          <div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
            <div className="rounded w-80 h-60 shadow-xl relative">
              <a href="https://github.com/EricBaldwinn/bored-tour" target="_blank" rel="noreferrer">
              <Image src={BTImage} alt="BoredTours" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
              <p className="relative bottom-6 text-center text-sm uppercase text-gray-400">Event Registration Web App</p>
              </a>
            </div>
            <div className="rounded w-80 h-60 shadow-xl relative">
            <a href="https://github.com/EricBaldwinn/project_catwalk" target="_blank" rel="noreferrer">
              <Image src={CatWalk} alt="CatWalk" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
              <p className="relative bottom-6 text-center text-sm uppercase text-gray-400">E-commerce Site</p>
              </a>
            </div>
            <div className="rounded w-80 h-60 shadow-xl relative">
              <a href="https://github.com/EricBaldwinn/Portfolio" target="_blank" rel="noreferrer">
              <Image src={Portfolio} alt="Portfolio" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer" />
              <p className="relative bottom-6 text-center text-sm uppercase text-gray-400">This Portfolio</p>
              </a>
            </div>
          </div>
        </Element>
    </div>
  )
}