import HeroSectionComponent from "../components/HeroSectionComponent";
import bg from "../assets/images/Shop/bg-shop.jpg";
import ProductComponent from "../components/Shop/ProductComponent";
import Cart from "../components/Shop/Cart";
import Categories from "../components/Shop/Categories";
const ShopPage = () => {
  return (
    <div>
      <HeroSectionComponent
        backgroundImage={bg}
        path="Shop"
        title="shop"
        subtitle="- enjoy shopping for coffee -"
      />
      <div className="flex flex-row max-md:flex-col justify-center gap-5 my-10 container mx-auto p-2">
        <ProductComponent />
        <div className="flex flex-col gap-6">
          <Cart />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
