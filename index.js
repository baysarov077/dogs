document.addEventListener('DOMContentLoaded', () => {
  // количество загружаемых изображений
  const IMAGES_COUNT = 4;

  // ссылка для загрузки изображений
  const IMAGES_URL = `https://dog.ceo/api/breeds/image/random/${IMAGES_COUNT}`;

  // ссылка для загрузки списка пород
  const BREEDS_URL = "https://dog.ceo/api/breeds/list";

  // узел, в котором будет список изображений
  const imagesContainer = document.querySelector('.images');

  // узел, в котором будет список пород
  const breedsContainer = document.querySelector('.breeds');

  // узел кнопки обновления
  const button = document.querySelector('button');

  // сразу загружаем изображения
  fetchAndRenderImages();

  // загружаем список пород
  fetchBreedsList();

  // еще раз загружаем изображения, если кликнули на кнопку обновления
  button.addEventListener('click', () => {
    fetchAndRenderImages();
  });

  // ТВОЙ КОД
  async function fetchAndRenderImages() {
    let res = await fetch(IMAGES_URL)
    let data = await res.json()
    console.log(data)
    for(let i = 0; i < data.message.length; i++){
      let img = document.createElement('img')
      img.className = 'listImg'
      imagesContainer.append(img)
      img.src = data.message[i]
    }
  }
  async function fetchBreedsList() {
    let res = await fetch(BREEDS_URL)
    let data = await res.json()
    for(let i = 0; i < data.message.length; i++) {
      let listItem = document.createElement('li')
      breedsContainer.append(listItem)
      listItem.textContent = data.message[i]
    }
    
  }
  

});
