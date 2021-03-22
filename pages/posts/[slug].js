import Head from "next/head";
import { getPostData, getAllSlugs } from "../../lib/postsUtils";
import PostContent from "../../components/posts/post-detail/PostContent";

const PostPage = (props) => {
  return (
    <>
    <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
};

export default PostPage;

export function getStaticPaths() {
  const allSlugs = getAllSlugs();
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
