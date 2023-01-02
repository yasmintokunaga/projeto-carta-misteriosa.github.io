const btnCriarCarta = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const text = document.getElementById('carta-gerada');

const objClass = {
  estilo: ['newspaper', 'magazine1', 'magazine2'],
  tamanho: ['medium', 'big', 'reallybig'],
  rotacao: ['rotateleft', 'rotateright'],
  inclinacao: ['skewleft', 'skewright'],
};

const randomClass = (key) => {
  const array = objClass[key];
  const position = parseInt(Math.random() * array.length, 10);
  return array[position];
};

const generateAllClasses = () => {
  const keys = Object.keys(objClass);
  const arrayClasses = [];
  for (let index = 0; index < keys.length; index += 1) {
    const newClass = randomClass(keys[index]);
    arrayClasses.push(newClass);
  }
  return arrayClasses.join(' ');
};

const changeStyleWord = () => {
  const spans = document.getElementsByTagName('span');
  for (let index = 0; index < spans.length; index += 1) {
    spans[index].addEventListener('click', () => {
      spans[index].className = generateAllClasses();
    });
  }
};

const addSpanParagraph = (inputText) => {
  for (let index = 0; index < inputText.length; index += 1) {
    const createSpan = document.createElement('span');
    createSpan.innerHTML = `${inputText[index]}`;
    createSpan.className = generateAllClasses();
    text.appendChild(createSpan);
    text.innerHTML += ' ';
  }
};

const delSpanParagraph = () => {
  text.innerHTML = '';
};

const identifyOnlySpaces = (inputText) => {
  let cont = 0;
  for (let index = 0; index < inputText.length; index += 1) {
    cont = inputText[index] === '' ? cont += 1 : cont;
  }
  return cont < inputText.length;
};

const countWord = () => {
  const spans = document.getElementsByTagName('span');
  const count = spans.length;
  const countLetter = document.getElementById('carta-contador');
  countLetter.innerHTML = count;
};

btnCriarCarta.addEventListener('click', () => {
  const inputText = input.value.split(' ');
  if (identifyOnlySpaces(inputText)) {
    delSpanParagraph();
    addSpanParagraph(inputText);
    changeStyleWord();
    countWord();
  }
});
