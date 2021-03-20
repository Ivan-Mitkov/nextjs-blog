import { useRouter } from "next/router";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getAllPosts, getPostData } from "../../lib/postsUtils";

const PostPage = (props) => {
  return <PostContent post={props.post} />;
};

export default PostPage;

export function getStaticPaths(context) {
  const allSlugs = getAllPosts().map((post) => post.slug);
  return {
    fallback: false,
    paths: allSlugs.map((s) => ({ params: { slug: s } })),
  };
}
export function getStaticProps(context) {
  const slugId = context.params.slug;
  const post = getPostData(slugId);
  return {
    props: {
      post: post,
    },
  };
}
