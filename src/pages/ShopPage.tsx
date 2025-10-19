import HeroSectionComponent from "../components/HeroSectionComponent";
import bg from "../assets/images/Shop/bg-shop.jpg";
import ProductComponent from "../components/Shop/productComponent";
import Cart from "../components/Shop/Cart";
const ShopPage = () => {
  return (
    <div>
      <HeroSectionComponent
        backgroundImage={bg}
        path="Shop"
        title="shop"
        subtitle="- enjoy shopping for coffee -"
      />
      <div className="flex flex-row max-md:flex-col justify-center gap-10 my-10 container mx-auto">
        <ProductComponent />
        <Cart />
      </div>
    </div>
  );
};

export default ShopPage;
