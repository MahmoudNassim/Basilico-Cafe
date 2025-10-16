import HeroSectionComponent from "../components/HeroSectionComponent";
import bg from "../assets/images/Shop/bg-shop.jpg";
const ShopPage = () => {
  return (
    <div>
      <HeroSectionComponent
        backgroundImage={bg}
        path="Shop"
        title="shop"
        subtitle="- enjoy shopping for coffee -"
      />
    </div>
  );
};

export default ShopPage;
