import authorImg from '../../assets/Images/Author/successful-businessman.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={authorImg} className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Zabaidul Islam</h1>
                    <h2 className='text-3xl font-semibold'>MERN Developer</h2>
                    <p className="py-6">Hello! I am Md. Zabaidul Islam, a Junior MERN developer passionate about creating web applications. With a focus on MERN (MongoDB, Express.js, React, and Node.js) stack, I enjoy building interactive and user-friendly websites. My goal is to contribute my skills and creativity to a supportive and growth-oriented team, where I can continue to learn and make a meaningful impact. I am eager to take on new challenges, broaden my horizons, and create exceptional web experiences.Feel free to explore my portfolio to see some of my projects and get in touch if you have any exciting opportunities or ideas to discuss. Let us build something great together</p>
                    <button className="btn btn-primary">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default About;