const contenuti1 = document.querySelector("#contenuti1");
const contenuti2 = document.querySelector("#contenuti2");
const contenuti1A = document.querySelector("#contenuti1 a");
const contenuti2A = document.querySelector("#contenuti2 a");


contenuti1.style.backgroundColor = "#0a3b72";
contenuti2.style.backgroundColor = "#0a3b72";
contenuti1A.style.color = "white";
contenuti2A.style.color = "white";


contenuti1.addEventListener("mouseover", () => {
    contenuti1.style.backgroundColor = "#00b7ff";
      contenuti1A.style.color = "#0a3b72";
    });
    
    contenuti1.addEventListener("mouseout", () => {
      contenuti1.style.backgroundColor = "#0a3b72";
      contenuti1A.style.color = "white";
    });
    contenuti2.addEventListener("mouseover", () => {
      contenuti2.style.backgroundColor = "#00b7ff";
      contenuti2A.style.color = "#0a3b72";
    });
    
    contenuti2.addEventListener("mouseout", () => {
      contenuti2.style.backgroundColor = "#0a3b72";
      contenuti2A.style.color = "white";
    });