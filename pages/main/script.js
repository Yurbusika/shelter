const container = document.querySelector('.pets__slider_container');
const prev = document.querySelector('.pets__slider_btn-prev');
const next = document.querySelector('pets__slider_btn-next');

let width;
// window.addEventListener('resize', widthCalc);

let activeIndex = 0;

const requestUrl =
  'https://raw.githubusercontent.com/rolling-scopes-school/tasks/refs/heads/master/tasks/shelter/pets.json';

async function getPets(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

function createCard(pet) {
  const petCard = document.createElement('div');
  petCard.className = 'slider__card';

  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'card__img_wrapper';
  petCard.append(imgWrapper);

  const imgPet = document.createElement('img');
  imgPet.src = pet.img;
  imgPet.alt = pet.name;
  imgWrapper.append(imgPet);

  const petName = document.createElement('p');
  petName.className = 'card__name';
  petName.innerHTML = pet.name;
  petCard.append(petName);

  const petButton = document.createElement('button');
  petButton.className = 'card__button';
  petButton.innerHTML = 'Learn more';
  petCard.append(petButton);

  return petCard;
}

function renderSlider(dataPets) {
  container.innerHTML = '';
  let card;

  for (const pet of dataPets) {
    card = createCard(pet);
    container.append(card);
  }

  let cardWidth = card.offsetWidth;

  next.addEventListener('click', () => {
    activeIndex++;
    rollCards(cardWidth);
  });
}

function widthCalc() {
  width = document.querySelector('.pets__slider').offsetWidth;
  console.log(width);
  const cards = document.querySelectorAll('.slider__card');

  container.style.maxWidth = width * (cards.length / 3) + 'px';

  cards.forEach((card) => {
    card.style.width = width / 3 + 'px';
  });
}

function rollCards(cardWidth) {
  container.style.transform = 'translate(-' + activeIndex * cardWidth + 'px';
}

async function main() {
  const dataPets = await getPets(requestUrl);
  console.log(dataPets);

  renderSlider(dataPets);
}

main();
