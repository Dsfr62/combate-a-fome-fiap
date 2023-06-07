import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"

const Layout = ({ children }) => {
    return (
    <div className="flex flex-col h-screen w-full bg-fourth">
        <Navbar />
        {children}
        <Footer />
    </div>
    )
}

export default Layout