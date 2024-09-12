import styled from 'styled-components';

export const SectionContainer = styled.section`
    width: 100vw;
    margin: 0 auto;
    padding: ${({ $noPaddingTop }) => ($noPaddingTop ? '0 0 0 0' : '50px 0')};
    border-bottom: 2px dashed rgb(206, 184, 184);
    
    h2 {
        font-size: 36px;
        font-weight: 700;
        text-align: center;
    }

    a {
    color: #333;
    text-decoration: underline;

    &:hover {
    color: #0070f3;
    }
    }
`;
