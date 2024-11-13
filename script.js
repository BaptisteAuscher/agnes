// Animation de scroll
document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll(".section");
    const scrollPosition = window.scrollY + window.innerHeight;
  
    sections.forEach(section => {
      if (section.offsetTop < scrollPosition - 100) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  });
  
  // Sélectionne tous les liens de navigation qui mènent à des ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    console.log(navbarHeight)

    // Scrolle vers l'élément cible en ajustant la hauteur de la barre de navigation
    window.scrollTo({
      top: target.offsetTop - navbarHeight,
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector('#demande-demo');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    console.log(navbarHeight)

    // Scrolle vers l'élément cible en ajustant la hauteur de la barre de navigation
    window.scrollTo({
      top: target.offsetTop - navbarHeight,
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('.continue-navigation').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector('#agnes');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    console.log(navbarHeight)

    // Scrolle vers l'élément cible en ajustant la hauteur de la barre de navigation
    window.scrollTo({
      top: target.offsetTop - navbarHeight,
      behavior: 'smooth'
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // Afficher le champ "Autre" pour le poste
  const posteSelect = document.getElementById('poste');
  const autrePosteInput = document.getElementById('autre-poste');

  posteSelect.addEventListener('change', function () {
    if (posteSelect.value === 'other') {
      autrePosteInput.style.display = 'block';
    } else {
      autrePosteInput.style.display = 'none';
    }
  });

  // Afficher le champ "Autre" pour les fonctionnalités
  const autreFonctionnaliteCheckbox = document.getElementById('autre-fonctionnalite');
  const autreFonctionnaliteInput = document.getElementById('autre-fonctionnalite-text');

  autreFonctionnaliteCheckbox.addEventListener('change', function () {
    if (autreFonctionnaliteCheckbox.checked) {
      autreFonctionnaliteInput.style.display = 'block';
    } else {
      autreFonctionnaliteInput.style.display = 'none';
    }
  });


  //Afficher le champ "Autre" pour les intentions
  const autreIntentionsCheckbox = document.getElementById('autre-intentions');
  const autreIntentionsInput = document.getElementById('autre-intentions-text');

  autreIntentionsCheckbox.addEventListener('change', function () {
    if (autreIntentionsCheckbox.checked) {
      autreIntentionsInput.style.display = 'block';
    } else {
      autreIntentionsInput.style.display = 'none';
    }
  });
});


const modal = document.getElementById("modal");
const modalContent = document.getElementsByClassName("modal-content");
const modalImage = document.getElementById("modalImage");
const imageToZooms = document.querySelectorAll(".imageToZoom");

// Fonction pour ouvrir le modal avec l'image
imageToZooms.forEach((imageToZoom) => {
  imageToZoom.onclick = function() {
    // Récupérer l'image source et l'appliquer au modal
    modal.style.display = "flex"; // Afficher le modal
    modalImage.src = this.src; // Mettre la source de l'image dans le modal
  };
})

// Fermer le modal quand on clique à côté de l'image
modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Cacher le modal
    document.body.style.overflow = "auto"; // Réactiver le scroll
  }
};

modalImage.onclick = function(event) {
  if (event.target === modalImage) {
    modal.style.display = "none"; // Cacher le modal
    document.body.style.overflow = "auto"; // Réactiver le scroll
  }
};


