import React from "react";
import Image from "next/image";
import { CardContainer } from "./CardStyles";

const Card = ({ children }) => (
    <CardContainer>
        <main>{children}</main>
    </CardContainer>
);

export default Card;