let imagesToLoad = document.querySelectorAll('img[data-src]');
let imagesFinishLoad = 0;
const totalImagesToLoad = imagesToLoad.length;

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    handlerImageLoadingFinish();
    image.removeAttribute('data-src');
  };
};

const handlerImageLoadingFinish = () => {
  let percentage = (100 / totalImagesToLoad) * (++imagesFinishLoad);
  $("#fill").animate({
    width: percentage + "%"
  }, 500, () => {
    if (imagesFinishLoad == totalImagesToLoad || document.getElementById("fill").style.width == "100%") {
      $(".loadingPage").fadeOut(500);
      document.body.dataset.loading = "";
    }
  });
}

imagesToLoad.forEach((img) => {
  loadImages(img);
});