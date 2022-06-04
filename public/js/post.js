let blogId = decodeURI(location.pathname.split("/").pop());
let docRef = db.collection("blogs").doc(blogId);

console.log(blogId);

// calling blog data
docRef.get().then((doc) => {
  if (doc.exists) {
    setupBlog(doc.data());
  } else {
    location.replace("/blog");
  }
});

// calling blog data Function
const setupBlog = (data) => {
  const banner = document.querySelector(".banner");
  const blogTitle = document.querySelector(".title");
  const publish = document.querySelector(".published");
  const article = document.querySelector(".article");
  const titleTag = document.querySelector("title");

  // banner image
  banner.style.backgroundImage = `url(${data.bannerImage})`;

  // title change
  titleTag.innerHTML += blogTitle.innerHTML = data.title;
  publish.innerHTML += data.publishedAt;

  // article formatting
  addArticle(article, data.article);
};

// article formatting Function
const addArticle = (ele, data) => {
  data = data.split("\n").filter((item) => item.length);

  data.forEach((item) => {
    let i = 0;
    if (item[0] == "#") {
      let hCount = 0;
      while (item[i] == "#") {
        hCount++;
        i++;
      }
      let tag = `h${hCount}`;
      ele.innerHTML += `<${tag}>${item.slice(hCount, item.length)}</${tag}>`;
    }
    // checking for image format
    else if (item[i] == "!" && item[1] == "[") {
      let seperator;
      for (let i = 0; i <= item.length; i++) {
        if (
          item[i] == "]" &&
          item[i + 1] == "(" &&
          item[item.length - 1] == ")"
        ) {
          seperator = i;
        }
      }
      let alt = item.slice(2, seperator);
      let src = item.slice(seperator + 2, item.length - 1);

      ele.innerHTML += `<img src="${src}" alt="${alt}" class="article-image">`;
    }
    //
    else {
      ele.innerHTML += `<p>${item}</p>`;
    }
  });
};
