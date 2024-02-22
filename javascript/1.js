function toggleNav() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("imageCarousel");
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % document.querySelectorAll(".slide").length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + document.querySelectorAll(".slide").length) % document.querySelectorAll(".slide").length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Cambia automáticamente cada 3 segundos
});

function toggleAnswer(answerId) {
    const answer = document.getElementById(answerId);
  
    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  }
  var yearSpan = document.getElementById('year');

  // Obtiene el año actual
  var currentYear = new Date().getFullYear();

  // Asigna el año actual al contenido del span
  yearSpan.textContent = currentYear;

  const imagenes = document.querySelectorAll('.img');
  const imgModal = document.querySelector('#imgModal')
  
  imagenes.forEach(img => {
      img.addEventListener('click', (e) => {
          imgModal.src = e.target.src  
          e.target.setAttribute('data-toggle', 'modal')
          e.target.setAttribute('data-target', '#exampleModal')    
      })
  })
  
 