import styled from 'styled-components'

export const ProfileContainer = styled.div`
  text-align: center;
  width: 980px;
  padding: 20px;
  margin: 20px auto 0;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;