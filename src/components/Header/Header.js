import Link from 'next/link';
import React from 'react';
import { HeaderContainer } from './HeaderStyles';
import GenreBtns from '../GenreBtns/GenreBtns';

// header component that will be used in the layout component to display the header on every page

const Header = () => (
  <HeaderContainer>
    <GenreBtns />
  </HeaderContainer>
);

export default Header;
