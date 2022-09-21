import React from "react";
import Image from "next/image";
import { LogoContainer } from "./LogoStyles";

// logo component that will be used in the header component to display the logo on every page

const Logo = () => (
    <LogoContainer>
        <Image src="/images/logo.png" alt="logo" width={466.06} height={200} />
    </LogoContainer>
);

export default Logo;