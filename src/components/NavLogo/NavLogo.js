import React from "react";

import logo from "../NavLogo/logo.png";

function NavLogo() {
    return(
        <>
        <div >
            <img src={logo} className="logo" alt="logo" />
        </div>
        </>
    );
}

export default NavLogo