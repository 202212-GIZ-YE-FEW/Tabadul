import { useEffect, useState } from "react";
import { HeroButton } from "./hero.style";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/router";

const DonateButton = () => {
    const route = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const Listerner = onAuthStateChanged(auth, async (user) => {
            setIsAuthenticated(Boolean(user));
        });
        return () => {
            Listerner();
        };
    }, []);

    function handleclick() {
        if (isAuthenticated) {
            route.push("/AddItems");
        } else {
            route.push("/Signin");
        }
    }
    return <HeroButton onClick={handleclick}> Donate Now</HeroButton>;
};

export default DonateButton;
