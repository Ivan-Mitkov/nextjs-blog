import Hero from "../components/homepage/Hero";
import FeaturedPosts from "../components/homepage/FeaturedPosts";
import { getAllFeaturedPosts } from "../lib/postsUtils";

const HomePage = (props) => {
  return (
    <>
      <Hero></Hero>
      <FeaturedPosts posts={props.posts}></FeaturedPosts>
    </>
  );
};

export default HomePage;

export function getStaticProps() {
  const featuredPosts = getAllFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
