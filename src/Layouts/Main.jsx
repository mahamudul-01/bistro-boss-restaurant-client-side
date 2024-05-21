import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";


const Main = () => {

    const location = useLocation()
    const headerNavHide=location.pathname.includes('login')
    return (
        <div >
            {headerNavHide || <Navbar></Navbar>}
            <Outlet></Outlet>
            {headerNavHide || <Footer></Footer>}
        </div>
    );
};

export default Main;