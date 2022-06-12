import Button from "../Button/Button";
import "./Introduction.css";
import Image from "../Image/Image";

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="about-me">
        <h1>HI,</h1>
        <h1>I AM VASIL</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <Button>Book a skype call</Button>
      </div>

      <Image
        src="https://public-files.gumroad.com/variants/ugkkfz3bd2vfrnpaqktph8csf2fe/4d4cb575366005157970186bb171da8f6b6b8bb857dcdd1f8e93774cc5f0900d"
        alt="my image"
      />
    </div>
  );
};

export default Introduction;
