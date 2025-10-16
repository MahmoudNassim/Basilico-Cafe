import HeroSectionComponent from "../components/HeroSectionComponent";
import bg from "../assets/images/Menu/bg-menu.jpg";
import MenuComponent from "../components/MenuComponent";
import SpecialMenu from "../components/Menu/SpecialMenu";

const MenuPage = () => {
  return (
    <div>
      <HeroSectionComponent
        backgroundImage={bg}
        title="our menu"
        subtitle="- Good coffee Makes Basilico -"
        path="our menu"
      />
      <MenuComponent />
      <SpecialMenu />
    </div>
  );
};

export default MenuPage;
