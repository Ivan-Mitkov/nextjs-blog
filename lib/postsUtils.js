import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = path.join(process.cwd(), "content", "posts");

export function getAllFiles() {
  const postFiles = fs.readdirSync(postDir);
  // console.log(postFiles);
  return postFiles;
}
export function getAllSlugs() {
  const postFiles = getAllFiles().map((f) => f.replace(/\.md$/, ""));
  return postFiles;
}
export function getPostData(fileName) {
  const postSlug = fileName.replace(/\.md$/, "");
  const filePath = path.join(postDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  //https://openbase.com/js/gray-matter/documentation
  const postData = matter(fileContent);
  // console.log("MATTER: ", postData);
  const postDataMatter = {
    slug: postData.data.slug,
    ...postData.data,
    content: postData.content,
  };
  return postDataMatter;
}
export function getAllPosts() {
  const postFiles = fs.readdirSync(postDir);
  // console.log("POST FILES: ", postFiles);
  const allPosts = postFiles
    .map((file) => getPostData(file))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  // console.log("ALL FILES: ", allPosts);
  return allPosts;
}
export function getAllFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  // console.log(featuredPosts);
  return featuredPosts;
}
