import { Link } from 'react-router-dom';
import authorImg from '../../assets/Images/Author/successful-businessman.jpg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);


    return (
        <div className="hero min-h-screen">
            <div data-aos="fade-up" className="hero-content flex-col lg:flex-row">
                <img src={authorImg} className="max-w-lg rounded-lg shadow-2xl" />
                <div data-aos="fade-left" className='ms-20'>
                    <h1 className="text-5xl font-bold">Zabaidul Islam.</h1>
                    <h2 className='text-3xl font-semibold'>MERN Developer.</h2>
                    <p className='font-semibold pt-3'>As a MERN developer with a <strong>BA (Hons) degree in English</strong>, I possess excellent communication skills that enhance my professional abilities. I excel at effectively conveying complex technical concepts in a clear and concise manner, ensuring seamless collaboration among team members and stakeholders. With a strong commitment to continuous learning, I stay updated with the latest advancements in the MERN stack and embrace new technologies. By combining my technical expertise with a proficiency in language, I strive to create exceptional web applications that deliver a seamless user experience.</p>

                    <Link to='/contact'><button className="border-2 px-7 py-2 bg-[#35495E] text-white me-28 mt-2">Contact</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;