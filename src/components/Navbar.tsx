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
                    <iconify-icon className="text-primary" icon="ic:round-settings"></iconify-icon>
                </div>
            </div>
        </div>
    )
};

export default Navbar;