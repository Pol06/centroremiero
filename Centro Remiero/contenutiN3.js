const contenuti3 = document.querySelector("#contenuti3");
const contenuti3A = document.querySelector("#contenuti3 a");
contenuti3.style.backgroundColor = "#0a3b72";
contenuti3A.style.color = "white";
contenuti3.addEventListener("mouseover", () => {
  contenuti3.style.backgroundColor = "#00b7ff";
  contenuti3A.style.color = "#0a3b72";
});

contenuti3.addEventListener("mouseout", () => {
  contenuti3.style.backgroundColor = "#0a3b72";
  contenuti3A.style.color = "white";
});