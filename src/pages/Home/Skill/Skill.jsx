
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Skill = () => {

    const numbersArray = [

        {
            id: 1,
            name: 'HTML',
            number: 90
        },
        {
            id: 2,
            name: 'CSS',
            number: 90
        },
        {
            id: 3,
            name: 'JavaScript',
            number: 80
        },
        {
            id: 4,
            name: 'React',
            number: 80
        },
        {
            id: 5,
            name: 'Node.js',
            number: 40
        },
        {
            id: 6,
            name: 'Express.js',
            number: 40
        },
        {
            id: 7,
            name: 'MongoDB',
            number: 40
        },

    ];



    return (
        <div className="mt-10">
            <h1 className="font-bold text-5xl text-center mb-10">Skills</h1>
            <div className='ms-20'>
                <AreaChart className='container'
                    width={1000}
                    height={500}
                    data={numbersArray}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="number" stroke="#2ECC71" fill="#FF6384" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Skill;