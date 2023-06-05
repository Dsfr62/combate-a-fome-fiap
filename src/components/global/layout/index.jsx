import Navbar from "../navbar"

const Layout = ({ children }) => {
    return (
    <div className="flex flex-col h-screen w-full bg-fourth">
        <Navbar />
        {children}
    </div>
    )
}

export default Layout