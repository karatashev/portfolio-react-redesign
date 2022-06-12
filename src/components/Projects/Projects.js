import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-heading">
      <h2>Our Projects</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised.
      </p>
      </div>
      <div className="projects-cards-container">
        <ProjectCard
          src="https://media.istockphoto.com/photos/project-management-with-icons-about-planning-tasks-and-milestones-on-picture-id1135541613?k=20&m=1135541613&s=612x612&w=0&h=rHctItxe3Vi5AGnLfm-Qa_PARqNXaxhlc3TbFYFe3nI="
          title="Project 1"
          text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati"
          info="Some useful info"
          alt="project1"
        />
          <ProjectCard
          src="https://media.istockphoto.com/photos/project-management-with-icons-about-planning-tasks-and-milestones-on-picture-id1135541613?k=20&m=1135541613&s=612x612&w=0&h=rHctItxe3Vi5AGnLfm-Qa_PARqNXaxhlc3TbFYFe3nI="
          title="Project 2"
          text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati"
          info="Some useful info"
          alt="project2"
        />
          <ProjectCard
          src="https://media.istockphoto.com/photos/project-management-with-icons-about-planning-tasks-and-milestones-on-picture-id1135541613?k=20&m=1135541613&s=612x612&w=0&h=rHctItxe3Vi5AGnLfm-Qa_PARqNXaxhlc3TbFYFe3nI="
          title="Project 3"
          text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati"
          info="Some useful info"
          alt="project3"
        />
      </div>
    </div>
  );
};

export default Projects;
