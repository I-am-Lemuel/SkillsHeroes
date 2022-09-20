import styled from "styled-components"

const FooterWrapper = styled.section`
  background: ${props => props.theme.colors.background};
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
	padding: 0 10px;
	  }
`

export default FooterWrapper
