import styled from "styled-components";

export const ProjectPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  
  img {
    max-width: 100%;
    height: auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
