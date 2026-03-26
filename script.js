let circles = [
  {
    el: document.querySelector(".circle1"),
    percent: 65,
    number: document.querySelectorAll(".number")[0],
  },
  {
    el: document.querySelector(".circle2"),
    percent: 80,
    number: document.querySelectorAll(".number")[1],
  },
  {
    el: document.querySelector(".circle3"),
    percent: 45,
    number: document.querySelectorAll(".number")[2],
  },
];

circles.forEach((item) => {
  let counter = 0;
  let target = item.percent;

  let interval = setInterval(() => {
    if (counter >= target) {
      clearInterval(interval);
    } else {
      counter++;
      item.number.innerHTML = counter + "%";

      let offset = 440 - (440 * counter) / 100;
      item.el.style.strokeDashoffset = offset;
    }
  }, 20);
});
