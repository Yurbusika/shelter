const slider = document.querySelector('.slider__line');
// const container = document.querySelector('.pets__slider_container');
const prev = document.querySelector('.pets__slider_btn-prev');
const next = document.querySelector('.pets__slider_btn-next');

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
  slider.innerHTML = '';

  for (const pet of dataPets) {
    let card = createCard(pet);
    slider.append(card);
  }
}

async function main() {
  const dataPets = await getPets(requestUrl);
  console.log(dataPets);

  renderSlider(dataPets);
}

main();

function rollCards() {
  slider.style.transform = 'translateX(-' + activeIndex * 360 + 'px)';
}

next.addEventListener('click', () => {
  activeIndex++;

  if (activeIndex >= 6) {
    activeIndex = 0;
  }

  rollCards();
});

prev.addEventListener('click', () => {
  activeIndex--;

  if (activeIndex < 0) {
    activeIndex = 5;
  }

  rollCards();
});
