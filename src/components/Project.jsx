import React from 'react';
import { SectionContainer } from './Styles/Container/SectionContainer.style';
import ProjectBox from './ProjectBox';
import photo1Project1 from '../assets/image/photo1_project1.png';
import photo2Project1 from '../assets/image/photo2_project1.png';
import photo3Project1 from '../assets/image/photo3_project1.png';
import photo4Project1 from '../assets/image/photo4_project1.png';
import photo1Project2 from '../assets/image/photo1_project2.png';
import photo1Project3 from '../assets/image/photo1_project3.png';
import photo2Project3 from '../assets/image/photo2_project3.png';
import photo3Project3 from '../assets/image/photo3_project3.png';
import photo4Project3 from '../assets/image/photo4_project3.png';
import photo5Project3 from '../assets/image/photo5_project3.png';
import photo1Project4 from '../assets/image/photo1_project4.png';
import photo2Project4 from '../assets/image/photo2_project4.png';
import photo3Project4 from '../assets/image/photo3_project4.png';
import photo4Project4 from '../assets/image/photo4_project4.png';
import photo1Project5 from '../assets/image/photo1_project5.png';
import { ProjectContainer } from './Styles/Project/ProjectContainer.style';

const projects = [
  {
    title: 'Jin Portfolio',
    date: '2024.09 (Personal project)',
    description: `This is a portfolio website for my career, which is this website that you are on. I was able to be more proficient in setting structures and using Styled components through this project.`,
    stack: [
      { title: 'Period', description: 'August 2024 ~ September 2024' },
      { title: 'Tech Stack', description: 'React, Javascript, HTML5, CSS3, Bootstrap, Styled Component, Firebase' },
      { title: 'GitHub', description: 'GitHub', link: 'https://github.com/jumoonlove/Jin-Portfolio' },
      { title: 'Live Site', description: 'Live Site', link: 'https://jin-portfolio-bdcb0.web.app' }
    ],
    photos: [photo1Project1, photo2Project1, photo3Project1, photo4Project1]
  },
  {
    title: 'Memoir Craft',
    date: '2024.08 (Personal project)',
    description: 'This is a personal memoir website utilizing ChatGPT Open API for psychological analysis and advice based on user inputs. It helped me gain more knowledge of Open API and design tools as well as new framework Vite',
    stack: [
      { title: 'Period', description: 'August 2024 ~ August 2024' },
      { title: 'Tech Stack', description: 'React, Javascript, HTML5, CSS3, Vite, AntD' },
      { title: 'GitHub-Front', description: 'GitHub', link: 'https://github.com/jumoonlove/Memoircraft-Front' },
      { title: 'GitHub-Back', description: 'GitHub', link: 'https://github.com/jumoonlove/Memoircraft-Back' },
    ],
    photos: [photo1Project2]
  },
  {
    title: 'Melody Minds',
    date: '2024.09 (Collaborative project)',
    description: 'This is a website for AI based application while I was a front end developer in start-up company. I implemented secure login functions utilizing token-based authentication and OAuth2 protocols using Axios integration. I also deployed and managed the Dockerised website application on AWS EC2 for scalable and reliable performance.',
    stack: [
      { title: 'Period', description: 'April 2024 ~ September 2024' },
      { title: 'Tech Stack', description: 'React, Javascript, HTML5, CSS3, Docker, AWS' },
      { title: 'Github', description: 'Private' },
    ],
    photos: [photo1Project3, photo2Project3, photo3Project3, photo4Project3, photo5Project3]
  },
  {
    title: 'Jin Blog',
    date: '2024.04 (Personal project)',
    description: 'This is a personal blog I made to create a simplistic blog platform capable of CRUD operations on posts. I enhanced understanding and proficiency in asynchronous programming, employing promises with the. then() method and the async/await syntax to manage asynchronous operations',
    stack: [
      { title: 'Period', description: 'March 2024 ~ April 2024' },
      { title: 'Tech Stack', description: 'React, Javascript, HTML5, CSS3'},
      { title: 'GitHub', description: 'GitHub', link: 'https://github.com/jumoonlove/Jin-blog' },
    ],
    photos: [photo1Project4, photo2Project4, photo3Project4, photo4Project4]
  },
  {
    title: 'Ninja Attack',
    date: '2024.03 (Personal project)',
    description: 'This is a personal game I developed using vanilla Javascript. It helped me basic grammars of Javascript and web developing. Interface: Arrow keys - Move / X - Attack / C - Dodge / Enter - Interact with NPC',
    stack: [
      { title: 'Period', description: 'February 2024 ~ March 2024' },
      { title: 'Tech Stack', description: 'Javascript, HTML5, CSS3' },
      { title: 'GitHub', description: 'GitHub', link: 'https://github.com/jumoonlove/Ninja_Attack' },
      { title: 'Live Site', description: 'Live Site', link: 'https://jumoonlove.github.io/Ninja_Attack/' }
    ],
    photos: [photo1Project5]
  }
];


const Project = () => {
  return (
    <SectionContainer id="projects-section" style={{ borderBottom: 0 }}>
      <ProjectContainer>
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            title={project.title}
            date={project.date}
            description={project.description}
            stack={project.stack}
            photos={project.photos}
          />
        ))}
      </ProjectContainer>
    </SectionContainer>
  );
};

export default Project;
