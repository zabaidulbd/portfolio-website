import img1 from '../../assets/Images/Projects/projects-1.png'
import img2 from '../../assets/Images/Projects/projects-2.png'
import img3 from '../../assets/Images/Projects/projects-10.png'
import { Link } from 'react-router-dom';


const Project = () => {
    return (
        <div className="flex gap-5 my-24 ms-10 me-10">
            <div>
                <div className="card w-100 bg-base-100 shadow-xl">
                    <figure><img className='w-100 h-100' src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <Link to='https://assignment-twelve-client-side.web.app/'><div className="badge badge-outline p-4">Live-Demo</div></Link>
                            <Link to='https://github.com/zabaidulbd/summar-camp-academy-server-side'><div className="badge badge-outline p-4">Server-Side</div></Link>
                            <Link to='https://github.com/zabaidulbd/summar-camp-academy-client-side '><div className="badge badge-outline p-4">Client-Side</div></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card w-100 bg-base-100 shadow-xl">
                    <figure><img className='w-100 h-100' src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <Link to='https://assignment-eleven-44711.web.app/'><div className="badge badge-outline p-4">Live-Demo</div></Link>
                            <Link to='https://github.com/zabaidulbd/toy-marketplace-server-side'><div className="badge badge-outline p-4">Server-Side</div></Link>
                            <Link to='https://github.com/zabaidulbd/toy-marketplace-client-side'><div className="badge badge-outline p-4">Client-Side</div></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card w-100 bg-base-100 shadow-xl">
                    <figure><img className='w-100 h-100' src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <Link to='https://assignment-ten-client-side.web.app/'><div className="badge badge-outline p-4">Live-Demo</div></Link>
                            <Link to='https://github.com/zabaidulbd/african-food-sever-side'><div className="badge badge-outline p-4">Server-Side</div></Link>
                            <Link to='https://github.com/zabaidulbd/african-food-client-side'><div className="badge badge-outline p-4">Client-Side</div></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Project;