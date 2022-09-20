import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: ${props => props.theme.colors.primary};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 908px) {
    display: none;
}
`;