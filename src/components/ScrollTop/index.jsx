import React, { useEffect, useState } from "react";
import { Circle, IconDiv, Rectangle, Triangle } from "./scrollTop.styled";

const ScrollTop = () => {
    const [scrollTop, setScrollTop] = useState(false);

    useEffect(() => {
        function whenToScroll() {
            // pixels of window may change later to be greater than 300
            if (window.scrollY > 300) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        }
        window.addEventListener("scroll", whenToScroll);
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {scrollTop && (
                <IconDiv onClick={scrollUp}>
                    <Circle
                        src={"/ScrollTop/Circle.svg"}
                        alt='circle'
                        width={62}
                        height={83}
                    />
                    <Triangle
                        src={"/ScrollTop/Triangle.svg"}
                        alt='Triangle'
                        width={35}
                        height={20}
                    />
                    <Rectangle
                        src={"/ScrollTop/Rectangle.svg"}
                        alt='Rectangle'
                        width={14}
                        height={30}
                    />
                </IconDiv>
            )}
        </>
    );
};

export default ScrollTop;
