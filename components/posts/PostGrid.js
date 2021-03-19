import PostItem from "./postItem";
import classes from "./posts-grid.module.css";

function PostsGrid(props) {
  const { posts } = props;
  const allPosts=posts||[]
  return (
    <ul className={classes.grid}>
      {allPosts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
