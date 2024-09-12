import React from 'react';
import { Container } from './Styles/Container/Container.style.js';
import { Header, MainHeader, StyledParagraph } from './Styles/Header/Header.style.js';
import { SectionContainer } from './Styles/Container/SectionContainer.style.js';
import TypeIt from "typeit-react";

const HomeHeader = () => {
  return (
    <SectionContainer $noPaddingTop>
      <Container>
        <Header>
          <MainHeader>
            <div className="typeit">
              <TypeIt
                options={{
                  speed: 100,
                  loop: true,
                  loopDelay: 2500,
                  waitUntilVisible: true,
                  breakLines: true,
                }}
              >
                Hello :) <br />
                My name is Jinsung Park, Junior front-end developer
              </TypeIt>
              <StyledParagraph>
                A passionate and driven Junior Front-End Developer with deep expertise in creating responsive and dynamic web applications using JavaScript, React, and modern development tools. I am committed to delivering high-quality user experiences that blend creativity with technical excellence.
              </StyledParagraph>
            </div>
          </MainHeader>
        </Header>
      </Container>
    </SectionContainer>
  );
};

export default HomeHeader;
