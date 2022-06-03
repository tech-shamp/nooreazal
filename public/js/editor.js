// start code
const blogTitleField = document.querySelector(".title");
const articleField = document.querySelector(".article");

// banner
const bannerImage = document.querySelector("#banner-upload");
const banner = document.querySelector(".banner");
let bannerPath;

const publishBtn = document.querySelector(".pubish-btn");
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

// article Image Event, Define
