const blogSection = document.querySelector(".display-posts");

const createBlog = (blog) => {
  let data = blog.data();
  blogSection.innerHTML += `
  <div class="blog-card">
  <img src="${data.bannerImage}" class="blog-image" alt="Post">
  <h1 class="blog-title">${data.title.substring(0, 100) + "..."}</h1>
  <p class="blog-overview">${data.article.substring(0, 200) + "..."}</p>
  <a href="/${blog.id}" class="btn dark"></a>
  </div>
`;
};

db.collection("blogs")
  .get()
  .then((blogs) => {
    blogs.forEach((blog) => {
      if (blog.id != decodeURI(location.pathname.split("/post").pop())) {
        createBlog(blog);
        console.log("Function Called");
      } else console.log("Wrong Function");
    });
  });
