import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/postsUtils";

const AllPostsPage = (props) => {
  return <AllPosts posts={props.posts} />;
};
export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostsPage;
