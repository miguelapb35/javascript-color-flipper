const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  // get random number between 0 - 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = color[randomNumber];
  color.textContent = colors[randomNumber];
  
}); 

let getRandomNumber = () => Math.floor(Math.random() * colors.length);