import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";
import classes from "./post-content.module.css";

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath}></PostHeader>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
