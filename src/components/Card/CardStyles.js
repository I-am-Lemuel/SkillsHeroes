import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.accent};
    margin: 20px;
    padding: 20px;
    color: #fff;
    main {
        padding-right: 20px;
    }

    @media (max-width: 908px) {
        margin: 10px;
    }
`;
