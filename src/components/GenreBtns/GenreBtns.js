import React from "react";
import { GenreBtnsContainer } from "./GenreBtnsStyles";

const GenreBtns = () => (
    <GenreBtnsContainer>
        <p>POPULAR GENRES:</p>
        <button><span>ACTION</span></button>
        <button><span>ANIME</span></button>
        <button><span>RACING</span></button>
        <button><span>RPG</span></button>
        <button><span>SIMULATION</span></button>
        <button><span>SPORT</span></button>
        <button><span>STRATEGY</span></button>
        <button><span>SURVIVAL</span></button>
        <button><span>VR</span></button>
    </GenreBtnsContainer>
);

export default GenreBtns;