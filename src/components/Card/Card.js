import React from "react";
import Image from "next/image";
import { CardContainer } from "./CardStyles";

//cards where the games will be displayed

const Card = ({ children }) => (
    <CardContainer>
        {/* content in the cards, the image and the text. */}
        <main>{children}</main>
    </CardContainer>
);

export default Card;