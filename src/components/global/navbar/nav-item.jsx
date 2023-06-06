
const NavItem = ({ path, currentPath, text }) => {

    const isActive = path === currentPath
  
    return (
      <a
        href={path}
        className={`navbar-item ${isActive ? "navbar-item-selected" : ""}`}
      >
        {text}
      </a>
    )
}

export default NavItem