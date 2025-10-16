import HeroSectionComponent from "../components/HeroSectionComponent";
import bg from "../assets/images/Blog/bg-blog.jpg";
const BlogPage = () => {
  return (
    <div>
      <HeroSectionComponent
        backgroundImage={bg}
        path="blog"
        subtitle="- What's New In Our Blog? -"
        title="blog"
      />
    </div>
  );
};

export default BlogPage;
