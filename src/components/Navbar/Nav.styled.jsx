import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

export const Header = styled.header`
    position: sticky;
    z-index: 10000;
    width: 100%;
`;

export const Nav = styled.nav`
    display: flex;
    padding: 6px;
    justify-content: space-between;
    align-items: center;
`;

export const Navmenubar = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    padding: 0 30px 0 30px;
    @media screen and (min-width: 768px) {
        display: none;
        gap: 10px;
    }
`;

export const Navmenubardiv = styled.div`
    width: 40px;
    height: 8px;
    background-color: #33956d;
    border-radius: 2px;
    cursor: pointer;
`;

export const Navmenulist = styled.div`
    display: flex;
    flex-direction: row;
    left: 0px;
    padding: 24px 16px;
    text-align: center;
    transition: all 0.2s;
    min-height: fit-content;
    width: auto;
    flex-direction: row;
    align-items: center;
    column-gap: 24px;

    & div:last-child {
        display: none;
    } //this is the CancelIcon

    ${(props) =>
        !props.navActive &&
        css`
            @media screen and (max-width: 768px) {
                display: none;
            }
        `}

    ${(props) =>
        props.navActive &&
        css`
            @media screen and (max-width: 768px) {
                gap: 20px;
                & a {
                    color: white;
                    font-size: 1rem;
                }
                background-color: #33956d;
                opacity: 0.9;
                position: relative;
                flex-direction: column;
                width: 100%;
                height: 100vh;
                position: fixed;
                z-index: 100000;
                top: 0px;
                align-items: center;
                justify-content: center;
                /* transition: 10s; */
                & div:last-child {
                    display: inline;
                    /* background-color: #cb6641; */
                }
            }
        `}
`;
export const CancelIcon = styled.div`
    color: white;
    font-size: 25px;
    position: absolute;
    top: 120px;
    right: 100px;
`;

export const Navlink = styled.a`
    font-size: 18px;
    position: relative;
    text-decoration: none;
    color: #3c4347;
    transition: all 0.2s;

    &:hover {
        font-weight: bold;
    }

    @media screen and (min-width: 768px) {
        &:before {
            content: "";
            position: absolute;
            width: 0px;
            bottom: -16px;
            height: 6px;
            transition: all 0.2s;
            background-color: #33956d;
        }

        &:hover:before {
            width: 70px;
        }
    }
`;

export const Homeiconlink = styled(Link)`
    text-decoration: none;

    @media screen and (max-width: 768px) {
        gap: 10px;
        display: none;
    }
`;

export const Homeicon = styled.div`
    height: 60px;
    width: 60px;
    padding: 0 30px 0 30px;
`;

export const IconVector = styled.img`
    &:before {
        padding-left: 26px;
    }
`;

export const Dropbtn = styled.button`
    /* background-color: black; */
    position: relative;
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin-right: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Dropdown = styled.div`
    /* display: flex; */
    position: relative;
    /* background-color: #cfd3a3; */
`;

export const Dropdowncontent = styled.div`
    position: absolute;
    /* margin: 0 20px 0 20px; */
    /* padding: 30px ; */
    top: 70px;
    width: fit-content;

    /* display: flex;
    flex-direction: column; */
    /* top: 100px; */
    right: -30px;
    left: -30px;
    background-color: #ffffff;
    /* min-width: 160px; */
    font-size: 15px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
`;

export const Lanlink = styled(Link)`
    color: black;
    padding: 16px 0;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;

    /* gap: 10px; */
    height: 100%;
    /* text-align: center; */
    /* border: 2px solid black; */
    /* margin: 0 20px 0 20px; */
    /* display: flex;
    flex-direction: row; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    /* background-color: #d4b3b3; */
    font-size: 18px;
    &:hover {
        background-color: #33956d;
    }
`;
export const LinkDiv = styled.div`
    /* border: 2px solid black; */
    width: 100%;
    /* background-color: red; */

    cursor: pointer;
    &:hover {
        background-color: #33956d;
    }
`;
export const Mynav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const NavButtons = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        gap: 10px;
    }
`;

export const Imageicon = styled.img`
    height: 50px;
    width: 50px;
`;

export const Arrow = styled.img`
    margin-left: 10px;
    height: 12px;
`;

export const Lan = styled.img`
    border-radius: 20px;
    height: 30px;
    /* margin: 10px; */
    /* width: 100%; */
    /* background-color: #a82929; */
    /* margin-left: 25px; */
`;
