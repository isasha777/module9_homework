const resultNode = document.querySelector(".result");
const btnNode = document.querySelector(".n-button");

btnNode.addEventListener("click", async()=>{
  const checkInputDimensions = new Promise((resolve, reject) =>{
    debugger;
    let picWidth = document.querySelector("#input-n1").value;
    let picHeight = document.querySelector("#input-n2").value;
    if(+picWidth >= 100 &&
      +picWidth <= 300 &&
      +picHeight >= 100 &&
      +picHeight <= 300){
      resolve({
        message:"Одно из чисел вне диапозона от 100 до 300"
      });
    }
  });
  await checkInputDimensions
  .then((result) => {
    resultNode.innerHTML = `<img src='https://picsum.photos/${result.width}/${result.height}'/>`;
  })
  .catch((error) => {
    resultNode.innerHTML = `<span>${error.message}</span>`;
  });
});