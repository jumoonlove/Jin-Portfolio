import styled from "styled-components";

export const ProjectDescriptionContainer = styled.div`
  width: 50%;
  text-align: left;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    margin: 40px 0;
    line-height: 2.4;
  }

  a {
    display: inline-block;
    margin: 10px 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #0070f3;
    text-decoration: none;
  }

  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
`;



export const ProjectDescription = styled.div`
    border-bottom: 2px dashed rgb(206, 184, 184);
`;
