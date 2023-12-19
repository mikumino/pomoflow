import PomoFlowSwitcher from "./PomoFlowSwitcher";
import Settings from "./Settings";
import pomoflow from  "../assets/pomoflow.png";

const Navbar = () => {
    return (
        <div className="navbar absolute max-w-3xl mx-auto">
            <div className="navbar-start">
                <div className="btn btn-ghost">
                    <a href="/" className="text-xl font-black flex items-center"><img src={pomoflow.src} alt="logo" className="w-6 mr-2" />Pomo<span className="text-primary">Flow</span></a>
                </div>
            </div>
            <div className="navbar-center">
            </div>
            <div className="navbar-end">
                <Settings/>
            </div>
        </div>
    )
}

export default Navbar;