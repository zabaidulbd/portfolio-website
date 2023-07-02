import img3 from '../../../assets/Images/Projects/projects-1.png'
import img4 from '../../../assets/Images/Projects/projects-2.png'
import img5 from '../../../assets/Images/Projects/projects-10.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {

    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);

    return (
        <>
            <div>
                <h1 className='text-center font-bold text-5xl mt-12'>Portfolio</h1>
                <p className='font-semibold text-center mt-5 ms-24 me-24'>As a MERN developer, my portfolio showcases a collection of projects that highlight my expertise in creating dynamic web applications. With skills in HTML, CSS, JavaScript, and the MERN stack, I have built responsive interfaces, integrated APIs, and implemented user authentication systems. I prioritize clean code practices, attention to detail, and timely project delivery, aiming to create impactful web solutions that exceed expectations.</p>
            </div>
            <div className="flex gap-5 my-24 ms-10 me-10">
                <div>
                    <div data-aos="fade-up" className="card w-100 bg-base-100 shadow-xl">
                        <figure><img className='w-100 h-100' src={img3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div>
                                <p className='font-semibold'>Name: Summer Camp Learning Academy</p>
                                <p className='font-semibold'>Type: Educational</p>
                            </div>
                            <div className="card-actions justify-end pt-1">
                                <Link to='https://assignment-twelve-client-side.web.app/'><div className="badge badge-outline p-4">Live-Demo</div></Link>
                                <Link to='https://github.com/zabaidulbd/summar-camp-academy-server-side'><div className="badge badge-outline p-4">Server-Side</div></Link>
                                <Link to='https://github.com/zabaidulbd/summar-camp-academy-client-side '><div className="badge badge-outline p-4">Client-Side</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div data-aos="fade-down" className="card w-100 bg-base-100 shadow-xl">
                        <figure><img className='w-100 h-100' src={img4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div>
                                <p className='font-semibold'>Name: Toy Marketplace</p>
                                <p className='font-semibold'>Type: Commercial</p>
                            </div>
                            <div className="card-actions justify-end pt-1">
                                <Link to='https://assignment-eleven-44711.web.app/'><div className="badge badge-outline p-4">Live-Demo</div></Link>
                                <Link to='https://github.com/zabaidulbd/toy-marketplace-server-side'><div className="badge badge-outline p-4">Server-Side</div></Link>
                                <Link to='https://github.com/zabaidulbd/toy-marketplace-client-side'><div className="badge badge-outline p-4">Client-Side</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div data-aos="fade-left" className="card w-100 bg-base-100 shadow-xl">
                        <figure><img className='w-100 h-100' src={img5} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div>
                                <p className='font-semibold'>Name: African Food Blog</p>
                                <p className='font-semibold'>Type: Food Blog</p>
                            </div>
                            <div className="card-actions justify-end pt-1">
                                <Link to='https://assignment-ten-client-side.web.app/'><div className="badge badge-outline p-4">Live-Demo</div></Link>
                                <Link to='https://github.com/zabaidulbd/african-food-sever-side'><div className="badge badge-outline p-4">Server-Side</div></Link>
                                <Link to='https://github.com/zabaidulbd/african-food-client-side'><div className="badge badge-outline p-4">Client-Side</div></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Portfolio;