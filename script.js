// Feature para animação dos rects
const rects = document.getElementsByTagName("rect");

setInterval(() => {
  rects[0].classList.toggle(`animated-rect-1`);
  rects[1].classList.toggle(`animated-rect-2`);
  rects[2].classList.toggle(`animated-rect-3`);
  rects[3].classList.toggle(`animated-rect-4`);
  rects[4].classList.toggle(`animated-rect-5`);
  rects[5].classList.toggle(`animated-rect-6`);
}, 600);
//----------------------------------------------------

// ---------------------------------------------------------------- INÍCIO DO CONTEÚDO DA AULA -----------------------------------------------------------------------
// Tudo isso está feito na documentação que se encontra no notion

const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form); // Cria um objeto NLWSetup que contém os dados dos métodos utilizados posteriormente

const button = document.querySelector("header button");

button.addEventListener("click", add); // Cria a função para adicionar o dia
form.addEventListener("change", save); // Cria uma função para salvar os dados caso haja inserção (mudança) no form

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);

  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já incluso!");
    return; // A função para de executar com o return e não executa a linha do "addDay"
  }

  nlwSetup.addDay(today);
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
  // Adiciona o dia e os hábitos que foram marcados no localStorage na chave 'NLWSetup@habits'
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}; // Pega os dados do localStorage e transforma de JSON para objeto
nlwSetup.setData(data); // Pega os dados que estavam no localStorage e monta a tabela de hábitos
nlwSetup.load(); // Carrega os dados e renderiza na tela
