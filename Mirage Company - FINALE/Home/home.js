let index = 0;
const slides = document.querySelectorAll('.slide');
const total = slides.length;
const conteudo = document.querySelector('.carrossel-conteudo');

/* ---- Hover real (troca imagem ao passar o mouse) ---- */
slides.forEach(slide => {
  const img = slide.querySelector('img');
  const normal = img.src;
  const hover = img.dataset.hover;

  img.addEventListener('mouseenter', () => img.src = hover);
  img.addEventListener('mouseleave', () => img.src = normal);
});

/* ---- Navegação do carrossel ---- */
document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % total;
  atualizar();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + total) % total;
  atualizar();
});

function atualizar() {
  conteudo.style.transform = `translateX(-${index * 100}%)`;
}

// Carrossel das reviews

const reviews = [
    {
        stars: "★★★★★",
        text: " Sou cliente da Mirage Company há algum tempo e posso afirmar com total confiança que eles são uma das melhores empresas de soluções em TI para sistemas legados. O meu sistema, que foi desenvolvido em COBOL, estava enfrentando diversas dificuldades de integração e manutenção, mas a equipe da Mirage Company conseguiu resolver tudo de forma rápida e eficiente.",
        author: "Francisco Saiz"
    },
    {
        stars: "★★★★★",
        text: "A Mirage Company superou minhas expectativas, entregando um sistema robusto, rápido e extremamente eficiente...",
        author: "Juliana Albuquerque"
    },
    {
        stars: "★★★★☆",
        text: "Equipe muito prestativa, comunicação clara, prazo muito bom. Só não dei 5 estrelas porque o suporte demorou um pouco...",
        author: "Marcelo Torres"
    }
];


let currentReview = 0;

function updateReview() {
    document.getElementById("reviewStars").innerText = reviews[currentReview].stars;
    document.getElementById("reviewText").innerText = reviews[currentReview].text;
    document.getElementById("reviewAuthor").innerText = reviews[currentReview].author;
}

// Botão próximo
document.getElementById("btnNext").addEventListener("click", () => {
    currentReview++;
    if (currentReview >= reviews.length) currentReview = 0;
    updateReview();
});

// Botão anterior
document.getElementById("btnPrev").addEventListener("click", () => {
    currentReview--;
    if (currentReview < 0) currentReview = reviews.length - 1;
    updateReview();
});

// Inicializa na primeira review
updateReview();

