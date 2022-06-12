import Image from "../Image/Image";
import Button from "../Button/Button";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutMe-container">
      <Image
        src="https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/61f07a3143795437e405e297_6167b0de0de36e36748343c5_DrawKit%20Webflow%20Grid-min.png"
        alt="about-me-image"
      />
      <div className="aboutMe-text">
        <h1>ABOUT ME</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <Button>Hire me</Button>
      </div>
    </div>
  );
};

export default AboutMe;
