import styled from "styled-components";

export const MainContainer = styled.div`
    height: 270rem;
    display: flex;
    background-color: ${props => props.theme.colors.background};
    flex-direction: column;
`;
export const MainContent = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.background};
    padding: 20px;
    margin: 20px;
    @media (max-width: 908px) {
        margin: 10px;
    }
    p {
    display: block;
  padding: 14px;
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: bolder;
}
button {
  display: inline-block;
  position: relative;
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  margin-left: 5rem;
}
span {
  display: block;
  padding: 14px;
  padding-inline: 45px;
  text-transform: uppercase;
}
button::before,
button::after {
  content: "";
  width: 0;
  height: 2px;
  position: absolute;
  transition: all 0.2s linear;
  background: #fff;
}

span::before,
span::after {
  content: "";
  width: 2px;
  height: 0;
  position: absolute;
  transition: all 0.2s linear;
  background: #fff;
}
button:hover::before,
button:hover::after {
  width: 100%;
}
button:hover span::before,
button:hover span::after {
  height: 100%;
}

button::after {
  left: 0;
  bottom: 0;
  transition-duration: 0.4s;
}
button span::after {
  right: 0;
  top: 0;
  transition-duration: 0.4s;
}
button::before {
  right: 0;
  top: 0;
  transition-duration: 0.4s;
}
button span::before {
  left: 0;
  bottom: 0;
  transition-duration: 0.4s;
}
`;
