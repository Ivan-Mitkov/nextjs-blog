import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  title: "Start with Gatsby",
  image: "gatsby.jpg",

  date: "2021-03-19",
  slug: "gatsby",
  content:
    "With Gatsby 3.0 for React, create lightning-fast web experiences that integrate your favorite services and content. Build e-commerce sites, landing pages, blogs and more in minutes. Gatsby loads only critical 1 parts of the page, exactly when the visitor needs it, and not a second sooner. Once loaded, Gatsby prefetches resources 2 for other pages so that clicking on the site feels buttery smooth and responsive. Everything is statically generated at runtime - so your site loads as fast as possible. Frontend Engineers today have their hands full with performance, security, SEO, accesibility, data, and more. We handle all those by default, and let you focus on building amazing digital experiences.",
};
const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath}></PostHeader>
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
