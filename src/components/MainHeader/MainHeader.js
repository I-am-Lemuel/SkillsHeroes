import React from "react";
import { MainHeaderContainer } from "./MainHeaderStyles";

const MainHeader = () => (
    <MainHeaderContainer>
        <button><span>HOME</span></button>
        <button><span>GENRES</span></button>
        <button><span>NEW RELEASED</span></button>
        <button><span>GAMELIST</span></button>
        <button><span>FAQ</span></button>
        <button><span>CONTACT</span></button>
    </MainHeaderContainer>
);

export default MainHeader;