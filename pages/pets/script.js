const container = document.querySelector('.cards__container');
const requestUrl =
  'https://raw.githubusercontent.com/rolling-scopes-school/tasks/refs/heads/master/tasks/shelter/pets.json';

async function getPets(url) {
  const response = await fetch(url);
  const json = response.json();
  return json;
}

async function main() {
  const dataPets = await getPets(requestUrl);

  renderCards(dataPets);
}

main();

function createCard(pet) {
  const card = document.createElement('div');
  card.className = 'pets__card';

  const imgPet = document.createElement('img');
  imgPet.src = pet.img;
  imgPet.alt = pet.name;
  card.append(imgPet);

  const namePet = document.createElement('p');
  namePet.className = 'card__name';
  namePet.innerHTML = pet.name;
  card.append(namePet);

  const petButton = document.createElement('button');
  petButton.className = 'card__button';
  petButton.innerHTML = 'Learn more';
  card.append(petButton);

  return card;
}

function renderCards(dataPets) {
  container.innerHTML = '';

  for (const pet of dataPets) {
    const card = createCard(pet);
    container.append(card);
  }
}
