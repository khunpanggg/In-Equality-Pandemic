// JavaScript Document
document.onscroll = (event) => {
  
  const viewportY = window.scrollY;
  console.log(viewportY);

  document.querySelector("#header-1").style.top = Math.min(viewportY / 50, 20) + "em";
  
}