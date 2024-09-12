import styled from 'styled-components'

export const Photo = styled.div`
  display: flex;
  justify-content: center;
  width: 280px;
  height: 360px;
  border-radius: 100%;
  background-size: cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    border-radius: 100%;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 300px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 240px;
  }
`;
