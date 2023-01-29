let resultNode = document.querySelector('.a');
let button = document.querySelector('.btn');
let value;
function useRequest(value) {
   if ((value < 11) && (value > 0)) {
     let url = `https://picsum.photos/v2/list/?limit=${value}`
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
      if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
      } else {
        let data = JSON.parse(xhr.response);
      console.log('Результат: ', JSON.parse(xhr.response));
        displayResult(data)
      }
    };
    xhr.onprogress = function(event) {
      console.log(`Загружено ${event.loaded} из ${event.total}`)
    };
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    xhr.send();
   } else {
    resultNode.innerHTML = 'Число вне диапазона от 1 до 10';
   }
};
function displayResult(apiData) {
  let cards = '';
  apiData.forEach(item => {
    console.log(item)
    let cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}""
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  console.log(cards)
  resultNode.innerHTML = cards;
};
button.addEventListener('click', () => {
  value = document.querySelector('.input').value;
  console.log(value)
  useRequest(value);
})