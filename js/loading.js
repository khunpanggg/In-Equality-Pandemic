let imagesToLoad = [
  ...[...document.querySelectorAll('img[data-src]')].map((item) => {
    return {
      "type": "data-src",
      "image": item
    }
  }),
  ...[...document.querySelectorAll('*[data-background-src')].map((item) => {
    return {
      "type": "data-background-src",
      "image": item
    }
  })
];
let imagesFinishLoad = 0;
const totalImagesToLoad = imagesToLoad.length;

const loadImages = (data) => {
  if (data.type === "data-src") {
    let image = data.image;
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      handlerImageLoadingFinish();
      image.removeAttribute('data-src');
    };
  } else if (data.type === 'data-background-src') {
    let image = data.image;
    image.style.background = `url(${image.getAttribute('data-background-src')})`;
    image.onload = () => {
      handlerImageLoadingFinish();
      image.removeAttribute('data-background-src');
    };
  }
};

const handlerImageLoadingFinish = () => {
  if (totalImagesToLoad > 0) {
    let percentage = (100 / totalImagesToLoad) * (++imagesFinishLoad);
    $("#fill").animate({
      width: percentage + "%"
    }, 500, () => {
      if (imagesFinishLoad == totalImagesToLoad || document.getElementById("fill").style.width == "100%") {
        $(".loadingPage").fadeOut(500);
        document.body.removeAttribute('data-loading');
      }
    });
  } else {
    $(".loadingPage").fadeOut(500);
    document.body.removeAttribute('data-loading');
  }
}

if (totalImagesToLoad > 0) {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
} else {
  $(".loadingPage").fadeOut(500);
  document.body.removeAttribute('data-loading');
}