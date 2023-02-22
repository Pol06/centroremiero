/* Tipo di menu da utilizzare*/
const screenWidth = window.innerWidth;
const menu = document.querySelector('div#menu');
const menuRidotto = document.querySelector('#menuridotto');

if (screenWidth > 1000) {
  menu.style.display = 'block';
  menuRidotto.style.display = 'none';
} 
else {
  menu.style.display = 'none';
  menuRidotto.style.display = 'block';
};

/* Menu esteso */
const liHome = document.querySelector("li#lihome");
const liRWC = document.querySelector("li#liRWC");
const lionboard = document.querySelector("li#lionboard");
const lionboardElements = document.querySelector("div#menu ul li#lionboard ul");
const listruttura = document.querySelector("li#listruttura");
const lialtro = document.querySelector("li#lialtro");
const lialtroElements = document.querySelector("div#menu ul li#lialtro ul");
const pagcorrente = document.querySelector("a#pagcorrente");



pagcorrente.style.borderBottom = "4px solid #0a3b72";
lionboardElements.style.display = "none";
lialtroElements.style.display = "none";
menu.style.backgroundColor = "#bfbfbf7f";
menu.style.color = "#0a3b72";



menu.addEventListener('mouseover', () => {
  menu.style.backgroundColor = 'white';
  menu.style.color = "#0a3b72";
});

menu.addEventListener('mouseout', () => {
  menu.style.backgroundColor = '#bfbfbf7f';
  menu.style.color = "#0a3b72";
});
liHome.addEventListener("mouseover", function() {
    liHome.style.borderBottom = "4px solid #00b7ff";
    pagcorrente.style.borderBottom = "";
  });
  
  liHome.addEventListener("mouseout", function() {
    liHome.style.borderBottom = "";
    pagcorrente.style.borderBottom = "4px solid #0a3b72";
  });

  liRWC.addEventListener("mouseover", function() {
    liRWC.style.borderBottom = "4px solid #00b7ff";
    pagcorrente.style.borderBottom = "";
  });
  
  liRWC.addEventListener("mouseout", function() {
    liRWC.style.borderBottom = "";
    pagcorrente.style.borderBottom = "4px solid #0a3b72"; 
  });
  
  lionboard.addEventListener("mouseover", function() {
    lionboard.style.borderBottom = "4px solid #00b7ff";
    pagcorrente.style.borderBottom = "";
    lionboardElements.style.display = "block";
  });
  
  lionboard.addEventListener("mouseout", function() {
    lionboard.style.borderBottom = "";
    pagcorrente.style.borderBottom = "4px solid #0a3b72";
    lionboardElements.style.display = "none";
  });

  listruttura.addEventListener("mouseover", function() {
    listruttura.style.borderBottom = "4px solid #00b7ff";
    pagcorrente.style.borderBottom = "";
  });
  
  listruttura.addEventListener("mouseout", function() {
    listruttura.style.borderBottom = "";
    pagcorrente.style.borderBottom = "4px solid #0a3b72";
  });

  lialtro.addEventListener("mouseover", function() {
    lialtro.style.borderBottom = "4px solid #00b7ff";
    pagcorrente.style.borderBottom = "";
    lialtroElements.style.display = "block";
  });
  
  lialtro.addEventListener("mouseout", function() {
    lialtro.style.borderBottom = ""; 
    pagcorrente.style.borderBottom = "4px solid #0a3b72";
    lialtroElements.style.display = "none";
  });


  /* Menu ridotto*/
  const ulmenuRidotto = document.querySelector("#ulmenuridotto");
  const iconaMenuRidotto = document.querySelector("#iconamenuridotto");



  ulmenuRidotto.style.display = "none";



  iconaMenuRidotto.addEventListener("click", function() {
    if (ulmenuRidotto.style.display === "none") {
      ulmenuRidotto.style.display = "block";
      menuRidotto.style.width = "100%";
      menuRidotto.style.height = "auto";
    } else {
      ulmenuRidotto.style.display = "none";
      menuRidotto.style.width = "";
      menuRidotto.style.height = "";
    }
  });