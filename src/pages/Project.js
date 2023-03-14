import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectsList";

const Project = () => {
    const { id } = useParams();
    const project = projects[id];

    return ( 
        <main className="section">
            <div  ame="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>
                    
                    <a href={project.projectLink} target="_blank" rel="noreferrer">
                        <img src={project.imgBig} alt={project.title} className="project-details__cover" />
                    </a>

                    <div className="project-details__desc">
                        <p>{ project.skills }</p>
                    </div>

                </div>
            </div>
        </main>
     );
}
 
export default Project;