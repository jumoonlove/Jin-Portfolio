import React from 'react';
import { SectionContainer } from './Styles/Container/SectionContainer.style';
import { ProfileContainer } from './Styles/About/ProfileContainer.style';
import { Photo } from './Styles/About/Photo.style';
import { Profile } from './Styles/About/Profile.style';
import { Content } from './Styles/About/Content.style';
import profile from '../assets/image/Profile.png';
import { CgProfile, CgMail } from "react-icons/cg";
import { FaHome, FaSchool, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <SectionContainer id="about-section">
      <ProfileContainer>
        <h1>About</h1>
        <Content>
          <Photo>
            <img src={profile} alt="profile" />
          </Photo>
          <Profile>
            <ul>
              <li><CgProfile /><span style={{ fontWeight: 600 }}>Jinsung Park</span></li>
              <li><FaHome /><span>Sydney, Australia</span></li>
              <li>
                <a href="mailto:jhinpark960217@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Jinsung,%20">
                  <CgMail />
                  <span>jhinpark960217@gmail.com</span>
                </a>
              </li>
              <li><FaSchool /><span>Bachelor of IT, University of Technology, Sydney</span></li>
            </ul>
            <ul>
              <li>
                <a href="https://github.com/jumoonlove">
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jinsung-park-1106a0275/">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </Profile>
        </Content>
      </ProfileContainer>
    </SectionContainer>
  )
}

export default About;
