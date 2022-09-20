import styled from "styled-components";

export const MainHeaderContainer = styled.div`
height: 10rem;
width: 100%;
justify-content: center;
display: flex;
justify-content: space-around;
align-items: center;
background-color: ${props => props.theme.colors.accent};
@media (max-width: 908px) {
    display: none;
}
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 100%;
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