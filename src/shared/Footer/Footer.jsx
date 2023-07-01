import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer px-10 py-4 border-t bg-[#F5F5F5] text-base-content border-base-300">
                <div className="ms-10 py-10">
                    <h2 className="font-bold text-3xl text-[#35495E]">Contact Me</h2>
                    <p className="text-xl text-[#35495E]">Phone: +8801993881464</p>
                    <p className="text-xl text-[#35495E]">email: zislam5622@gmail.com</p>
                </div>
                <div>
                    <div className="ms-10 py-10">
                        <h2 className="font-bold ms-8 mb-2 text-3xl text-[#35495E]">Follow Me</h2>
                        <div className="flex ms-10">
                            <Link to='https://www.linkedin.com/in/zabaidul-islam-8725b915a/'><span className="text-3xl text-[#35495E]"><FaLinkedin></FaLinkedin></span></Link>
                            <span className="text-3xl mx-2 text-[#35495E]"><FaFacebookSquare></FaFacebookSquare></span>
                            <span className="text-3xl text-[#35495E]"><FaTwitterSquare></FaTwitterSquare></span>
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
                            <button className="btn bg-[#35495E] text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;