import styled from 'styled-components'

export const Profile = styled.div`
  width: 540px;
  height: 360px;
  font-size: 20px;
  text-align: left;
  color: rgba(0, 0, 0, 0.7);

  ul {
    width: 480px;
    margin: 10px auto;
    padding: 10px 20px;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

      span {
        padding-left: 30px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;

    ul {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
