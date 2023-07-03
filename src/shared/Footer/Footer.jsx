import { FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer px-10 py-4 border-t bg-[#FFE4B5] text-base-content border-base-300">
                <div className="ms-10 py-10">
                    <h2 className="font-bold text-3xl text-[#35495E]">Contact Me</h2>
                    <p className="font-semibold text-[#35495E]">Phone: +8801993881464</p>
                    <p className="font-semibold text-[#35495E]">email: zislam5622@gmail.com</p>
                </div>
                <div>
                    <div className="ms-10 py-10">
                        <h2 className="font-bold ms-9 mb-2 text-3xl text-[#35495E]">Social Profiles</h2>
                        <div className="flex ms-10">
                            <Link to='https://www.linkedin.com/in/zabaidul-islam-8725b915a/'><span className="text-3xl
                             text-[#35495E]"><FaLinkedin className="hover:scale-150"></FaLinkedin></span></Link>
                            <span className="px-2"><Link to='https://github.com/zabaidulbd'><span className="text-3xl text-[#35495E]"><FaGithubSquare className="hover:scale-150"></FaGithubSquare></span></Link></span>
                            <span className="text-3xl pe-2 text-[#35495E]"><FaFacebookSquare className="hover:scale-150"></FaFacebookSquare></span>
                            <span className="text-3xl text-[#35495E]"><FaTwitterSquare className="hover:scale-150"></FaTwitterSquare></span>
                        </div>
                        <p className="mt-5">Copyright © 2023 - All right reserved</p>
                    </div>

                </div>

                <div className="md:place-self-center md:justify-self-end me-10">
                    <span className="font-bold text-[#35495E] text-3xl"> Sign-Up for Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn bg-[#35495E] text-white absolute top-0 right-0 rounded-l-none hover:bg-[#2B3A49] hover:text-[#FFFFFF]  transition-colors duration-300 transform hover:scale-105">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;