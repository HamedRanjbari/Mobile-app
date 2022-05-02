const $ = document;
const img = $.querySelector(".image");
const icons = $.querySelectorAll(".bi");
const imgArr = [
  "img/blog/home.jpg",
  "img/blog/Services.jpg",
  "img/blog/blog.jpg",
  "img/blog/about-me.jpg",
];

icons.forEach((icon, idx) => {
  icon.addEventListener("click", () => {
    icons.forEach(ico => {
      ico.classList.remove("active")
    })
    icon.classList.add("active")
    img.classList.remove("show")
    imgArr.forEach((imgSrc, index) => {
      if (idx === index) {
        img.src = imgArr[index];
        let interval = setInterval(() => {
          img.classList.add("show");
          clearInterval(interval)
        }, 500);
      }
    });
  });
});
