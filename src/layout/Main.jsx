
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default Main;