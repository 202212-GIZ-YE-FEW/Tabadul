import React from "react";

import Signin from "@/components/Signin";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

function SignIn() {
    return (
        <div>
            <Navbar />
            <Signin />
            <Footer />
        </div>
    );
}

export default SignIn;
