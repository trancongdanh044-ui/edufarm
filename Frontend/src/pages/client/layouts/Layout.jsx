import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Contacts from "../../../components/Contacts";

function Layout(){
    return(
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Contacts></Contacts>
            <Footer></Footer>
        </>
    );
}

export default Layout;