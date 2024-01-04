import Settings from "./Settings";
import Help from "./Help";
const Navbar = () => {
    return (
        <div className="navbar absolute max-w-3xl mx-auto">
            <div className="navbar-start">
                <div className="btn btn-ghost">
                    <a href="/" className="text-xl font-black flex items-center">Pomo<span className="text-primary">Flow</span></a>
                </div>
            </div>
            <div className="navbar-center">
            </div>
            <div className="navbar-end">
                <Help/>
                <Settings/>
            </div>
        </div>
    )
}

export default Navbar;
