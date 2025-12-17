import HeroSectionComponent from "../components/HeroSectionComponent";
import bg from "../assets/images/Shop/bg-shop.jpg";
import ProductComponent from "../components/Shop/ProductComponent";
import Cart from "../components/Shop/Cart";
import Categories from "../components/Shop/Categories";
import FilterPrice from "../components/Shop/FilterPrice";
import RecentProduct from "../components/Shop/RecentProduct";
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
          <FilterPrice />
          <RecentProduct />
        </div>
      </div>
      {/* <div className="flex gap-3 justify-center my-10">
        <div className="w-12 h-12 border bg-[#C3A27C] border-[#C3A27C] rounded-full relative">
          <span className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            1
          </span>
        </div>
        <div
          className="w-12 h-12 border  border-[#C3A27C] rounded-full relative
          hover:bg-[#C3A27C] hover:text-white cursor-pointer cursor-hover transition-all duration-200"
        >
          <span className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            2
          </span>
        </div>
        <div
          className="w-12 h-12 border  border-[#C3A27C] rounded-full relative
          hover:bg-[#C3A27C] hover:text-white cursor-pointer cursor-hover transition-all duration-200"
        >
          <span className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <MdKeyboardDoubleArrowRight />
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default ShopPage;
