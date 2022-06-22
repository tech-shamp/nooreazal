// const morePosts = document.querySelector(".display-posts");

db.collection("blogs")
  .get()
  .then((blogs) => {
    blogs.forEach((blog) => {
      if (blog.id != decodeURI(location.pathname.split("/post").pop())) {
        moreBlog(blog);
        console.log("Function Called");
      } else console.log("Wrong Function");
    });
  });

// const moreBlog = (blog) => {
//   let data = blog.data();
//   morePosts.innerHTML += `
//   <div class="blog-card">
//   <img src="${data.bannerImage}" class="blog-image" alt="Post">
//   <h1 class="blog-title">${data.title.substring(0, 100) + "..."}</h1>
//   <p class="blog-overview">${data.article.substring(0, 200) + "..."}</p>
//   <a href="/${blog.id}" class="btn font-medium">Read More</a>
//   </div>
// `;
// };
