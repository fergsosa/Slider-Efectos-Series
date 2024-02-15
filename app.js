//step 1: get DOM
const d = document,
  $nextDom = d.getElementById("next"),
  $prevDom = d.getElementById("prev"),
  $carouselDom = d.querySelector(".carousel"),
  SliderDom = $carouselDom.querySelector(".carousel .list"),
  $thumbnailBorderDom = d.querySelector(".carousel .thumbnail"),
  $thumbnailItemsDom = $thumbnailBorderDom.querySelectorAll(".item");

timeDom = d.querySelector(".carousel .time");

$thumbnailBorderDom.appendChild($thumbnailItemsDom[0]);

let timeRunning = 1000;
// let timeAutoNext = 3000;

$nextDom.onclick = () => {
  showSlider("next");
};

$prevDom.onclick = () => {
  showSlider("prev");
};

let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);

function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let $thumbnailItemsDom = d.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    $thumbnailBorderDom.appendChild($thumbnailItemsDom[0]);
    $carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    $thumbnailBorderDom.prepend(
      $thumbnailItemsDom[$thumbnailItemsDom.length - 1]
    );
    $carouselDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    $carouselDom.classList.remove("next");
    $carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}
