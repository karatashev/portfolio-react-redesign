import "./ProjectCard.css";

const ProjectCard = ({src, title,text, info, alt}) => {
  return (
    <div className="single-card-container">
      <img className="project-img" src={src} alt={alt}/>
      <h5>{title}</h5>
      <p>{text}</p>
      <span>{info}</span>
    </div>
  )
}
 
export default ProjectCard;