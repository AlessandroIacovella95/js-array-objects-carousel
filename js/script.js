//* Array di oggetti
const images = [
    {
      image: 'img/01.webp',
      title: "Marvel's Spiderman Miles Morale",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
];

//* Funzione per creare literal templates per le varie immagini
function createItems(image) {
    container.innerHTML += `
    <div class="d-none ${image.active}">
      <div>
        <img src="./${image.image}" alt="" />
      </div>
      <h1>${image.title}</h1>
      <p>${image.text}</p>
    </div> `;
}

//* Funzione per creare nuovo oggetti
function createObject() {
    const newArrayImages = images.map((image, index) => {
      imagesCarousel = {
        image: image.image,
        title: image.title,
        text: image.text,
        active: index == select ? "active" : "",
      };
      createItems(imagesCarousel);
      return imagesCarousel;
    });
}
  
//* Funzione per i bottoni next e bottom
function nextPrevButton(incrementoDecremento) {
  //* Recupero tutte le slides
  const allSlides = document.querySelectorAll(".d-none");
  
  //* Recupero la slide attiva e vado a rimuovere la classe active
  const activeSlide = allSlides[incrementoDecremento];
  activeSlide.classList.toggle("active");
  
  incrementoDecremento;
  //* se superata la lunghezza dell'array torniamo alla prima slide corrispondente in base alla direzione
  if (select >= allSlides.length) {
    select = 0;
  }

  if (select < 0){
    select = allSlides.length - 1;
  } 

  //* Recupero la nuova slide attiva e vado ad aggiungere la classe active
  const newActiveSlide = allSlides[select];
  newActiveSlide.classList.toggle("active");
}

let isAutoplayPaused = false;
let isAutoplayReversed = false;

//* Funzione per avviare l'autoplay
function startAutoplay() {
  if (!isAutoplayPaused) {
      autoPlay = setInterval(() => {
          if (isAutoplayReversed) {
            nextPrevButton(select--);;
          } else {
            nextPrevButton(select++);
          }
      }, 3000);
  }
}

//* Recupero elementi dal DOM

//* Recupero il container dal DOM
const container = document.getElementById("container-image");
//* Recupero tasto Next dal DOM
const next = document.getElementById("next");
//* Recupero tasto Prev dal DOM
const prev = document.getElementById("prev");
//* Recupero bottone start dal DOM
const startBtn = document.getElementById('start');
//* Recupero bottone stop dal DOM
const stopBtn = document.getElementById('stop');
//* Recupero bottone reverse dal DOM
const reverseBtn = document.getElementById('reverse');


//* Inizializzo la variabile select
let select = 0;

//* Invoco la funzione CreateObject
createObject();


// //* Evento tasto Next
// next.addEventListener("click", function () {
//   nextPrevButton(select--);
// });

// //* Evento tasto Prev
// prev.addEventListener("click", function () {
//   nextPrevButton(select++);
// });

//* Inizializzo la variabile per tenere traccia dell'intervallo di autoplay
let autoPlay;

function stopAutoplay() {
  clearInterval(autoPlay);
}

//* Per avviare l'autoplay all'avvio della pagina
// startAutoplay();

//* Evento al click per avviare la funzione autoplay
startBtn.addEventListener('click', () => {
  isAutoplayPaused = false;
  startAutoplay();
  startBtn.classList.add ("display_none")
  reverseBtn.classList.remove ("display_none")
  stopBtn.classList.remove ("display_none")
});

//* Evento al click per fermare la funzione autoplay
stopBtn.addEventListener('click', () => {
  isAutoplayPaused = true;
  stopAutoplay();
  startBtn.classList.remove ("display_none")
  stopBtn.classList.add ("display_none")
  reverseBtn.classList.remove ("display_none")

});

//* Evento al click per avviare la funzione autoplay al reverse
reverseBtn.addEventListener('click', () => {
  isAutoplayReversed = !isAutoplayReversed;
  stopAutoplay();
  startAutoplay();
  startBtn.classList.add ("display_none")
  stopBtn.classList.remove ("display_none")
  reverseBtn.classList.add ("display_none")
});





