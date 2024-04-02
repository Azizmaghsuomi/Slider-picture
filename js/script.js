let $ = document;

let sliderImgELem = $.querySelector("img");
let prevBtn = $.querySelector(".prev");
let nextBtn = $.querySelector(".next");

let imgSrcArray = [
  "image/1.jpg",
  "image/2.png" ,
  "image/3.jpg",
  "image/4.jpg",
  "image/5.jpg",
  "image/6.jpg",
  "image/7.jpg"
];
let imgIndex = 0;

function prevImg() {
  imgIndex--
  if (imgIndex < 0) {
    imgIndex=imgSrcArray .length -1
  }
  sliderImgELem.setAttribute("src", imgSrcArray[imgIndex]);
  console.log(imgIndex ,imgSrcArray[imgIndex]);
}
function nextImg() {
  imgIndex++;
  if(imgIndex >imgSrcArray.length -1){
    imgIndex = 0
  }
  sliderImgELem.setAttribute("src", imgSrcArray[imgIndex]);
  console.log(imgIndex ,imgSrcArray[imgIndex]);
}
setInterval(nextImg,3000)
prevBtn.addEventListener("click", prevImg);
nextBtn.addEventListener("click", nextImg);
