import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/Images/Banner/young-man-wearing-blue-outfit-holding-red-folder.jpg'
import resume from '../../../assets/resume/zabaidul-islam-resume.pdf'

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h6 className='text-3xl font-semibold text-[#35495E] mb-2'>This is me</h6>
                        <h1 className="text-5xl font-bold text-[#35495E]">Zabaidul Islam.</h1>
                        <p className="py-4 text-[#35495E] me-36">As a junior developer, I am constantly expanding my skills and gaining experience through various projects. From simple websites to more complex applications, I am passionate about creating exceptional web experiences. Take a look at my portfolio to explore some of my work. If you have any exciting opportunities or ideas to discuss, I'd love to hear from you. Let's build something great together!"</p>
                        <Link to='about'><button className="bg-[#35495E] border-2 py-2 px-7  me-3"> <span className='text-white'>About Me</span></button></Link> <button ><a className='bg-[#35495E] border-2 p-2 px-4' href={resume} download="Zabaidul-Islam-Resume"><span className='text-white'>Download Resume</span></a></button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;