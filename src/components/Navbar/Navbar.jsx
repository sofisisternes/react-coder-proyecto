//import './Navbar.scss'
import { FaCartPlus } from "react-icons/fa";
import NavLink from "./Navlink";
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <header>
      <div className="flex items-center">
        <FaCartPlus className="bg-white w-10 h-auto m-1 justify-start" />
        <Link to="/" className="max-w-5xl mx-auto">
          <img className="w-72 h-auto" src='./img/logo.jpg' alt='logo' />
        </Link>
      </div>
      <nav className="bg-black p-2.5 my-15">
        <div className="flex justify-around max-w-5xl m-auto">
          <NavLink href={"/"} text={"INICIO"} />
          <Link to="/category/Vestidos" className="text-white hover:text-zinc-200 no-underline text-base mx-5">VESTIDOS</Link>
          <Link to="/category/Abrigos" className="text-white hover:text-zinc-200 no-underline text-base mx-5">ABRIGOS</Link>
          <Link to="/category/Conjuntos" className="text-white hover:text-zinc-200 no-underline text-base mx-5">CONJUNTOS</Link>
          <Link to="/category/Remerasytops" className="text-white hover:text-zinc-200 no-underline text-base mx-5">REMERAS Y TOPS</Link>
          <Link to="/category/Pollerasyshorts" className="text-white hover:text-zinc-200 no-underline text-base mx-5">POLLERAS Y SHORTS</Link>

        </div>
      </nav>
    </header>
  )
}
export default Navbar