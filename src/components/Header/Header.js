import Link from 'next/link';
import React from 'react';
import { HeaderContainer } from './HeaderStyles';
import GenreBtns from '../GenreBtns/GenreBtns';

const Header = () => (
  <HeaderContainer>
    <GenreBtns />
  </HeaderContainer>
);

export default Header;
