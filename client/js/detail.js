const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

const agreementButton = document
  .querySelector("#agreement-btn")
  .addEventListener("click", () => {
    window.open(
      "https://drive.google.com/file/d/1-0ryxfFb7w-Js_NN-10VntlHRJOtUZeI/view?pli=1",
      "_blank"
    );
  });

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);
