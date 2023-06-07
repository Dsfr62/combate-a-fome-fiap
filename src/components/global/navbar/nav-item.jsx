
const NavItem = ({ path, currentPath, text }) => {

    const isActive = path === currentPath
  
    return (
      <a
        href={path}
        className={`${isActive ? "navbar-item-selected" : "navbar-item"}`}
      >
        {text}
      </a>
    )
}

export default NavItem