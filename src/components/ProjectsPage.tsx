import { Box } from '@radix-ui/themes';
import { ProjectDetails, projects, ProjectProps } from './Projects';
import { useState } from 'react';
import '../styles/ProjectGallery.css';
import PageWrapper from './PageWrapper';
import ProjectGalleryItem from './ProjectGalleryItem';
import AnimatedPage from './AnimatedPage';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  return (
    <PageWrapper title="Projects">
      <AnimatedPage>
        <Box className={`project-details ${selectedProject ? 'active' : ''}`} style={{ width: '100%' }}>
          {selectedProject && <ProjectDetails project={selectedProject} />}
        </Box>
        
        <div className="project-gallery-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-gallery-item">
              <ProjectGalleryItem
                title={project.title}
                imageUrl={project.imageUrl || ''}
                backgroundColor={project.backgroundColor}
                isSelected={selectedProject?.title === project.title}
                onClick={() => setSelectedProject(selectedProject?.title === project.title ? null : project)}
              />
            </div>
          ))}
        </div>
      </AnimatedPage>
    </PageWrapper>
  );
};

export default ProjectsPage; 