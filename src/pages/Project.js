import { useParams } from 'react-router-dom';
import { projects, testProjects } from '../helpers/projectsList';

const Project = () => {
  const { id } = useParams();
  const project = id.startsWith('test-') ? testProjects[id.slice(5)] : projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <a href={project.projectLink} target="_blank" rel="noreferrer">
            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />
          </a>
          <div className="project-details__desc">
            <p class="desc-title">Technologies</p>
            <p>{project.skills}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
