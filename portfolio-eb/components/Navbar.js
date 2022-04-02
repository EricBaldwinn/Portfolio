import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { useState } from "react";



export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className="fixed z-20 bg-white w-11/12">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center sm:mx-10 md:mx-20 justify-between w-full">

							{/* For logo */}
							<div className="flex justify-center items-center flex-shrink-0">
								<h1 className="font-bold text-xl cursor-pointer">
									Eric<span className="text-blue-600">Baldwin</span>
								</h1>
							</div>

							{/* For links */}
							<div className="hidden md:block">
								<div className="flex justify-start px-10 sm:px-20 whitespace-nowrap space-x-5 sm:space-x-10">
									<Link activeClass='Home' to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md">Home</Link>
									<Link activeClass='Projects' to="projects" smooth={true} offset={50} duration={500} className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md">Projects</Link>
									<Link activeClass='Socials' to="socials" smooth={true} offset={50} duration={500} className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md">Socials</Link>
								</div>
							</div>
							<div className="flex justify-end items-center flex-shrink-0">
								<h1 className="font-semibold cursor-pointer hidden md:block">
									<a href="/resume" target="_blank" rel="noreferrer" className="text-blue-600">Resume</a>
								</h1>
								<div className="relative left-10">
								<a href="https://www.linkedin.com/in/ericbaldwinn/" target="_blank" rel="noreferrer">
									<p className="text-blue-600 font-semibold cursor-pointer hidden md:block">Instagram</p>
								</a>
							</div>
							</div>
						</div>
						<div className="flex ml-20 w-10 md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-black focus:outline-none focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white mx-4 mr-20 pt-4 pb-4 space-y-1"
							>
								<Link
									href="/home"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/projects"
									activeClass="projects"
									to="projects"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Projects
								</Link>

								<a
									href="/resume"
									target="_blank"
									rel="noreferrer"
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									<p>Resume</p>
								</a>
								<a href="https://www.linkedin.com/in/ericbaldwinn/" rel="noreferrer" target="_blank" className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<p>Instagram</p>
								</a>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	)
}