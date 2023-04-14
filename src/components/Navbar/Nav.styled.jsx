import styled from "@emotion/styled";
import Link from "next/link";

export const Header = styled.header`
    background-color: #f1f1f1;
    position: sticky;
    top: 0;
    z-index: 10;
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

    @media screen and (min-width: 768px) {
        display: none;
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
    flex-direction: column;
    position: fixed;
    top: 100px;
    width: 50%;
    row-gap: 24px;
    padding: 24px 16px;
    // right: -50%;
    // right: ${(props) => (props.$navActive ? "-50" : "0")};
    min-height: calc(100vh - 60px);
    /* background-color: yellow; */
    text-align: center;
    transition: all 0.2s;

    @media screen and (min-width: 768px) {
        position: unset;
        min-height: fit-content;
        width: fit-content;
        flex-direction: row;
        align-items: center;
        column-gap: 24px;
    }
    /* padding-right: 150px; */
`;

export const Navlink = styled.a`
    font-size: 18px;
    position: relative;
    text-decoration: none;
    color: #3c4347;
    transition: all 0.2s;
    font-weight: ${(props) => (props.$active ? "normal" : "bold")};
    &hover {
        font-weight: bold;
    }

    @media screen and (min-width: 768px) {
        &:before {
            content: "";
            position: absolute;
            width: 0;
            bottom: -16px;
            left: 0;
            height: 6px;
            transition: all 0.2s;
            background-color: #33956d;
            &:hover {
                width: 100%;
            }
            // &active {
            //     width: 100%;
            // }
        }
    }
`;

export const Homeiconlink = styled(Link)`
    text-decoration: none;
`;

export const Homeicon = styled.div`
    height: 60px;
    width: 60px;
    padding-left: 30px;
`;

export const IconVector = styled.img`
    &before {
        padding-left: 26px;
    }
`;

export const Dropbtn = styled.button`
    background-color: transparent;
    color: white;
    /* padding: 16px; */
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin-right: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;

    // &:hover {
    //     display: block;
    // }
`;

export const Dropdowncontent = styled.div`
    position: absolute;
    right: 0px;
    background-color: #f9f9f9;
    min-width: 160px;
    font-size: 15px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
`;

export const Lanlink = styled(Link)`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 18 px;
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
`;

export const Imageicon = styled.img`
    // &first-of-type {
    //     height: 40px;
    //     width: 40px;
    // }

    height: 50px;
    width: 50px;

    &hover {
    }
`;

export const Arrow = styled.img`
    margin-left: 10px;
    height: 12px;
`;

export const Lan = styled.img`
    border-radius: 20px;
    height: 30px;
    margin-left: 25px;
`;
