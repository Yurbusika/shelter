const container = document.querySelector('.pets__slider_container');
const prev = document.querySelector('.pets__slider_btn-prev');
const next = document.querySelector('pets__slider_btn-next');

const requestUrl =
  'https://raw.githubusercontent.com/rolling-scopes-school/tasks/refs/heads/master/tasks/shelter/pets.json';

async function getPets(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

async function main() {
  const dataPets = await getPets(requestUrl);
  console.log(dataPets);
}

main();
