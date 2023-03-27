import styled from "@emotion/styled";
import Image from "next/image";

export const IconDiv = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    right: 20px;
    bottom: 10px;
    cursor: pointer;
`;
export const Circle = styled(Image)`
    position: relative;
    z-index: 0;
`;
export const Triangle = styled(Image)`
    position: absolute;
    z-index: 1;
    top: 23px;
    left: 13px;
    filter: drop-shadow(0px 2px 0.5px #ae6159);
`;
export const Rectangle = styled(Image)`
    position: absolute;
    z-index: 2;
    top: 30px;
    left: 24px;
    filter: drop-shadow(0px 2px 0.5px #ae6159);
    clip-path: circle(79.1% at 51% 100%);
`;
