//import './Navbar.scss'
import { FaCartPlus } from "react-icons/fa";
import NavLink from "./Navlink";

const Navbar = () => {

    return (
        <header>
            <div className="flex items-center">
                <FaCartPlus className="bg-white w-10 h-auto m-1 justify-start" /> 
                 
                <img className="w-72 h-auto mx-auto" src='./img/logo.jpg' alt='logo'/>
            </div>
            <nav className="bg-black p-2.5 my-15">
                <div className="flex justify-around max-w-5xl m-auto">
                    <NavLink href={"#"} text={"INICIO"}/>
                    <NavLink href={"#"} text={"CATALOGO"}/>
                    <NavLink href={"#"} text={"SOBRE NOSOTROS"}/>
                    <NavLink href={"#"} text={"CONTACTO"}/>
                </div>            
            </nav>
        </header>
    )
}
export default Navbar