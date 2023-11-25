import { IoIosSettings } from "react-icons/io";
const Navbar = () => {
    return (
        <div className="navbar absolute max-w-3xl mx-auto">
            <div className="navbar-start">
                <div className="btn btn-ghost">
                    <a href="/" className="text-xl font-black">Pomo<span className="text-primary">Flow</span></a>
                </div>
            </div>
            <div className="navbar-center">
            </div>
            <div className="navbar-end">
                <div className="btn btn-ghost">
                    <IoIosSettings className="text-primary text-2xl" />
                </div>
            </div>
        </div>
    )
};

export default Navbar;