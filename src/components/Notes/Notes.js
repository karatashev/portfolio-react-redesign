import Card from "../Card/Card";
import "./Notes.css";

const Notes = () => {
  return (
    <div className="notes-container">
      <Card
        src="https://mpng.subpng.com/20180702/vyk/kisspng-computer-icons-skill-symbol-clip-art-5b3aa0c0de2883.61499047153056889691.jpg"
        alt="skills"
        heading="Skills"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
        <Card
        src="https://mpng.subpng.com/20180702/vyk/kisspng-computer-icons-skill-symbol-clip-art-5b3aa0c0de2883.61499047153056889691.jpg"
        alt="experiece"
        heading="Experience"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
        <Card
        src="https://mpng.subpng.com/20180702/vyk/kisspng-computer-icons-skill-symbol-clip-art-5b3aa0c0de2883.61499047153056889691.jpg"
        alt="projects"
        heading="Projects"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
    </div>
  );
};

export default Notes;
