import styled from "@emotion/styled";
import Link from "next/link";

export const Header = styled.header`
    position: sticky;
    z-index: 10;\n
    width: 100%;
`;

export const Nav = styled.nav`
    display: flex;
    padding: 6px;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f1f1;

    @media only screen and (max-width: 767px) {
     {
          width: 100%;
        }

    
        @media only screen and (min-width: 768px) {
         
              width: 768px;
             
            }
`;

export const Navmenubar = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 6px;

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
    flex-direction: column;
    position: fixed;
    top: 100px;
    left: 0px;
    width: 100%;
    row-gap: 24px;
    padding: 24px 16px;
    min-height: calc(100vh - 60px);
    text-align: center;
    transition: all 0.2s;
    background-color: #f1f1f1;

    @media screen and (min-width: 768px) {
        position: unset;
        min-height: fit-content;
        width: auto;
        flex-direction: row;
        align-items: center;
        column-gap: 24px;
    }

    @media screen and (max-width: 768px) {
        gap: 10px;
        right: 0;
    }
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
            width: 70px;\n    }
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
    padding-left: 30px;
`;

export const IconVector = styled.img`
    &:before {
        padding-left: 26px;
    }
`;

export const Dropbtn = styled.button`
    background-color: transparent;
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
    position: relative;
    display: inline-block;
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
    margin-left: 25px;
`;
