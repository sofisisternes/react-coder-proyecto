const NavLink = ({href, text}) => {
    return (
        <a className="text-white hover:text-zinc-200 no-underline text-base mx-5" href={href}>
            {text}
        </a>
    );
};

export default NavLink;