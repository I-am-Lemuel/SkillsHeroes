import React from "react";
import Image from "next/image";
import { LogoContainer } from "./LogoStyles";

const Logo = () => (
    <LogoContainer>
        <Image src="/images/logo.png" alt="logo" width={466.06} height={200} />
    </LogoContainer>
);

export default Logo;