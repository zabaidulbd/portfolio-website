import bannerImg from '../../../assets/Images/Banner/young-man-wearing-blue-outfit-holding-red-folder.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h6 className='text-3xl font-semibold'>This is me</h6>
                        <h1 className="text-5xl font-bold">Zabaidul Islam</h1>
                        <p className="py-6">As a junior developer, I am constantly expanding my skills and gaining experience through various projects. From simple websites to more complex applications, I am passionate about creating exceptional web experiences. Take a look at my portfolio to explore some of my work. If you have any exciting opportunities or ideas to discuss, I'd love to hear from you. Let's build something great together!"</p>
                        <button className="btn btn-neutral me-3">Learn more</button>
                        <button className="btn btn-neutral">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;