import styled from "styled-components";

export const Header = styled.section`
    width: 100%;
    height: 80vh;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        max-width: 100%;
        min-height: 40px;
        display: inline-block;
        border-radius: 0 0 50% 50% / 0 0 100% 100%;
        transform: scaleX()(1.5);
        background-position: right top;
        background-size: 100vw 90vh;
        background-color: #282c34;
    }
`;

export const MainHeader = styled.div`
    position: relative;
    z-index: 1;
    margin: 0 auto;
    max-width: 1000px;
    background-color: transparent;
`;

export const StyledParagraph = styled.p`
    font-size: 18px;
    margin-top: 20px;
    text-align: center;
    font-weight: 400;
    line-height: 1.6;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
`;
