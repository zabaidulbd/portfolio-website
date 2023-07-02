import img1 from '../../../assets/Images/Experience/html.png'
import img2 from '../../../assets/Images/Experience/css.png'
import img3 from '../../../assets/Images/Experience/javascript.png'
import img4 from '../../../assets/Images/Experience/react.png'
import img5 from '../../../assets/Images/Experience/node.png'
import img6 from '../../../assets/Images/Experience/mongodb.png'
import img7 from '../../../assets/Images/Experience/tailwind.png'
import img8 from '../../../assets/Images/Experience/bootstrap.png'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);




    return (
        <div className='mt-5 mb-32'>
            <div>
                <h1 className='text-5xl text-center font-bold text-[#35495E]'>Technical Skills</h1>
                <p className='font-semibold mt-7 mb-10 ms-28 me-36 text-[#35495E]'>I have a good understanding of HTML, CSS, and JavaScript, which are the building blocks of websites. I can create attractive and user-friendly web designs using these languages. With my knowledge of React, I can make websites more interactive and engaging for users. I am also skilled in using MongoDB, Node.js, and Express to manage data and handle the server-side of web applications. With my combined skills, I can develop complete web applications from start to finish efficiently and effectively.</p>
            </div>
            <div className='grid grid-cols-4 gap-8 ms-12'>
                <div data-aos="fade-up" className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-7 pt-9">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div data-aos="fade-down" className="items-center text-center my-3">
                        <progress className="progress w-44 me-5" value={80} max="100"></progress>
                        <span style={{ "--value": 80, "--size": "3rem" }}>80%</span>
                    </div>
                </div>
                <div data-aos="fade-down" className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-7 pt-9">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div data-aos="fade-down" className="items-center text-center mt-3">
                        <progress className="progress w-44 me-5" value={80} max="100"></progress>
                        <span style={{ "--value": 80, "--size": "3rem" }}>80%</span>
                    </div>
                </div>
                <div data-aos="fade-left" className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-7 pt-9">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="items-center text-center mt-3">
                        <progress className="progress w-44 me-5" value={80} max="100"></progress>
                        <span style={{ "--value": 70, "--size": "3rem" }}>70%</span>
                    </div>
                </div>
                <div data-aos="fade-right" className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-7 pt-9">
                        <img src={img4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="items-center text-center mt-3">
                        <progress className="progress w-44 me-5" value={80} max="100"></progress>
                        <span style={{ "--value": 70, "--size": "3rem" }}>70%</span>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-7 pt-9">
                        <img src={img5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div data-aos="fade-down" className="items-center text-center my-3">
                        <progress className="progress w-44 me-5" value={40} max="100"></progress>
                        <span style={{ "--value": 40, "--size": "3rem" }}>40%</span>
                    </div>
                </div>
                <div data-aos="fade-up-left" className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-7 pt-9">
                        <img src={img6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="items-center text-center mt-3">
                        <progress className="progress w-44 me-5" value={40} max="100"></progress>
                        <span style={{ "--value": 40, "--size": "3rem" }}>40%</span>
                    </div>
                </div>
                <div className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-7 pt-9">
                        <img src={img7} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div data-aos="fade-down" className="items-center text-center mt-3">
                        <progress className="progress w-44 me-5" value={70} max="100"></progress>
                        <span style={{ "--value": 70, "--size": "3rem" }}>70%</span>
                    </div>
                </div>
                <div className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-7 pt-9">
                        <img src={img8} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div data-aos="fade-down" className="items-center text-center mt-3">
                        <progress className="progress w-44 me-5" value={40} max="100"></progress>
                        <span style={{ "--value": 40, "--size": "3rem" }}>40%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;