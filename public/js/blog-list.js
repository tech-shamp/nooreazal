const blogTitle = document.querySelector(".firebase-title");
const blogArticle = document.querySelector(".firebase-para");
const blogImage = document.querySelector(".firebase-image");

db.collection("blogs")
  .get()
  .then((blogs) => {
    blogs.forEach((blog) => {
      if (blog.id != decodeURI(location.pathname.split("/blog").pop())) {
        createBlog(blog);
        console.log("Blogs Page == Function True");
      } else console.log("Blogs Page == Wrong Function");
    });
  });

const createBlog = (blog) => {
  let data = blog.data();
  blogImage.innerHTML += `<img class="h-40 rounded w-full object-cover object-center mb-6"
src="${data.bannerImage}" alt="banner">`;
  blogTitle.innerHTML += `${data.title.substring(0, 100) + "..."}`;
  blogArticle.innerHTML += `${data.article.substring(0, 200) + "..."}`;
};
