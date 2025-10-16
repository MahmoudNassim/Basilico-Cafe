import bg from "../assets/images/About/bg-about.jpg";
import HeroSectionComponent from "../components/HeroSectionComponent";

const AboutPage = () => {
  return (
    <div>
      <HeroSectionComponent
        backgroundImage={bg}
        title="about us"
        subtitle="- discovery of basilico coffee -"
        path="about us"
      />
    </div>
  );
};

export default AboutPage;
