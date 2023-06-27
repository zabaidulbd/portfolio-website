import img1 from '../../../assets/Images/Experience/html.png'
import img2 from '../../../assets/Images/Experience/css.png'
import img3 from '../../../assets/Images/Experience/js.png'
import img4 from '../../../assets/Images/Experience/react.png'
import img5 from '../../../assets/Images/Experience/node.png'
import img6 from '../../../assets/Images/Experience/mongodb.png'
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
        <div className='mt-20'>
            <div>
                <h1 className='text-5xl text-center font-bold'>Experience</h1>
            </div>
            <div data-aos="fade-up" className='grid grid-cols-3 gap-5 mt-20 ms-32'>
                <div className='w-1/2 h-1/2'>
                    <img src={img1} alt="" />
                </div>
                <div className='w-1/2 h-1/2'>
                    <img src={img2} alt="" />
                </div>
                <div className='w-1/2 h-1/2'>
                    <img src={img3} alt="" />
                </div>
                <div className='w-1/2 h-1/2'>
                    <img src={img4} alt="" />
                </div>
                <div className='w-1/2 h-1/2'>
                    <img src={img6} alt="" />
                </div>
                <div className='w-1/2'>
                    <img src={img5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Experience;