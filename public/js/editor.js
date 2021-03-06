// start code
const blogTitleField = document.querySelector(".title");
const articleField = document.querySelector(".article");

// banner
const bannerImage = document.querySelector("#banner-upload");
const banner = document.querySelector(".banner");
let bannerPath;

const publishBtn = document.querySelector(".publish-btn");
const uploadImage = document.querySelector("#image-upload");

// banner Image Event
bannerImage.addEventListener("change", () => {
  imageUpload(bannerImage, "banner");
});

// article Image Event
uploadImage.addEventListener("change", () => {
  imageUpload(uploadImage, "image");
});

// banner Image Event, Define
const imageUpload = (uploadFIle, uploadType) => {
  const [file] = uploadFIle.files;
  if (file && file.type.includes("image")) {
    const formdata = new FormData();
    formdata.append("image", file);

    fetch("/uploads", {
      method: "post",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        if (uploadType == "image") {
          addImage(data, file.name);
        } else {
          bannerPath = `${location.origin}/${data}`;
          banner.style.backgroundImage = `url('${bannerPath}')`;
        }
      });
  } else {
    alert("Please Upload an Image");
  }
};

// image type, Not Image
const addImage = (imagePath, alt) => {
  let curPos = articleField.selectionStart;
  let textToInsert = `\r![${alt}](${imagePath})\r`;
  articleField.value =
    articleField.value.slice(0, curPos) +
    textToInsert +
    articleField.value.slice(curPos);
};

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// article Image Event, Define
publishBtn.addEventListener("click", () => {
  if (!articleField.length && !blogTitleField.length) {
    // generating id
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let blogTitle = blogTitleField.value.split(" ").join("-");
    let id = "";
    for (let i = 0; i < 4; i++) {
      id += letters[Math.floor(Math.random() * letters.length)];
    }

    // setting up docName
    let docName = `${blogTitle}-${id}`;
    let date = new Date(); // for published on MetaData

    console.log("clicked");

    // access firestore database
    db.collection("blogs")
      .doc(docName)
      .set({
        title: blogTitleField.value,
        article: articleField.value,
        bannerImage: bannerPath,
        publishedAt: `${date.getDate()} ${
          months[date.getMonth()]
        } ${date.getFullYear()}`,
      })
      .then(() => {
        location.href = `/${docName}`;
        console.log("date entered");
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    console.error("Your article is not posted");
  }
});
