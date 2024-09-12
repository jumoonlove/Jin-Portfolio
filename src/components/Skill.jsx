import React from 'react';
import { SectionContainer } from './Styles/Container/SectionContainer.style';
import { Progress, Ability } from './Styles/Skill/Progress.style';
import htmlImg from '../assets/image/html.png';
import cssImg from '../assets/image/css.png';
import reactImg from '../assets/image/react.png';
import jsImg from '../assets/image/javascript.jpeg';
import bootstrapImg from '../assets/image/bootstrap.png';
import githubImg from '../assets/image/github.png';
import styledComponentImg from '../assets/image/styled-components.png';
import awsImg from '../assets/image/aws.png';
import dockerImg from '../assets/image/docker.png';
import salesforceImg from '../assets/image/salesforce.png';
import netImg from '../assets/image/net.png';
import figmaImg from '../assets/image/figma.png';
import mysqlImg from '../assets/image/mysql.png';
import photoshopImg from '../assets/image/photoshop.png'

const Skill = () => {
  const mainSkills = [
    { lang: 'React', ability: 70, img: reactImg },
    { lang: 'HTML5', ability: 60, img: htmlImg },
    { lang: 'CSS3', ability: 60, img: cssImg },
    { lang: 'JavaScript', ability: 50, img: jsImg },
    { lang: 'Github', ability: 50, img: githubImg },
    { lang: 'Bootstrap', ability: 40, img: bootstrapImg },
    { lang: 'Styled Components', ability: 40, img: styledComponentImg },
    { lang: 'AWS', ability: 40, img: awsImg },
    { lang: 'Docker', ability: 40, img: dockerImg },
    { lang: 'Adobe Photoshop', ability: 40, img: photoshopImg },
    { lang: 'Salesforce developer', ability: 40, img: salesforceImg },
    { lang: '.Net', ability: 40, img: netImg },
    { lang: 'Figma', ability: 30, img: figmaImg },
    { lang: 'MySQL', ability: 30, img: mysqlImg },
  ];
  return (
    <SectionContainer id="skills-section">
        <Progress>
          <h1>Main Skills</h1>
          <ul data-aos="fade-up">
            {
              mainSkills.map((ele) => {
                return (
                  <li key={`${ele.lang}-${ele.ability}`}>
                    <img src={ele.img} alt={ele.lang} className="skill-icon" />
                    <div className="ability-bar">
                      <Ability $ability={ele.ability}>
                        <div className="ability-percent">
                          <span className="percent">{ele.ability} %</span>
                        </div>
                      </Ability>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </Progress>
    </SectionContainer>
  );
}

export default Skill;
