import React from 'react';
import { ProjectContent } from './Styles/Project/ProjectContent.style';
import { ProjectDescription, ProjectDescriptionContainer } from './Styles/Project/ProjectDescription.style';
import { ProjectStack } from './Styles/Project/ProjectStack.style';
import { ProjectContainerBox } from './Styles/Project/ProjectContainer.style';
import PhotoCarousel from './PhotoCarousel';


const ProjectBox = ({ title, date, description, github, liveSite, stack, photos }) => {
  
  return (
    <ProjectContainerBox>
      <ProjectContent>
        <PhotoCarousel photos={photos} />
        <ProjectDescriptionContainer>
          <ProjectDescription>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{description}</p>
          </ProjectDescription>
          <ProjectStack>
          <ul>
            {stack.map((item, index) => (
              <li key={index}>
                <span className="stack-title">{item.title}</span>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.description}
                  </a>
                ) : (
                  <span className="stack-description">{item.description}</span>
                )}
              </li>
            ))}
          </ul>
        </ProjectStack>
        </ProjectDescriptionContainer>
      </ProjectContent>
    </ProjectContainerBox>
  );
};

export default ProjectBox;
