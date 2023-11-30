const Navbar = () => {

    return (
        <header>
            <div className="logo">
                <h1>Clevy Indumentaria</h1>
            </div>
            <nav className="nav">
                <div className="nav__container">
                <a className="header__link" href="#">Inicio </a>
                <a className="header__link" href="#">Catalogo </a>
                <a className="header__link" href="#">Sobre Nosotros</a>
                <a className="header__link" href="#">Contacto</a>
                </div>
            </nav>
        </header>
    )
}
export default Navbar