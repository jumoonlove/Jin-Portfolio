import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100vw;
  margin: 0 auto;
  padding: ${({ $noPaddingTop }) => ($noPaddingTop ? '0' : '50px 0')};
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

  @media (max-width: 768px) {
    padding: 20px 0;

    h2 {
      font-size: 28px;
    }

    p {
        width: 400px;
        font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px 0;

    h2 {
      font-size: 24px;
    }

    p {
        width: 350px;
        font-size: 14px;
    }
  }
`;

