import Head from "next/head";
import Hero from "../components/homepage/Hero";

import FeaturedPosts from "../components/homepage/FeaturedPosts";
import { getAllFeaturedPosts } from "../lib/postsUtils";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Ivan' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
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
