import HeroSectionComponent from "../components/HeroSectionComponent";
import bg from "../assets/images/Menu/bg-menu.jpg";
import MenuComponent from "../components/MenuComponent";
import SpecialMenu from "../components/Menu/SpecialMenu";
import CakeAndBakery from "../components/Menu/CakeAndBakery";

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
      <CakeAndBakery />
    </div>
  );
};

export default MenuPage;
