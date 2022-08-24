const slider = document.querySelector('.switch input');
const price = document.querySelectorAll('.price');
let newPrice;

slider.addEventListener('click', () => {
  if (slider.checked) {
    price.forEach(price => {
      newPrice = price.innerHTML.substring(1);
      price.innerHTML = `&dollar;${(+newPrice * 10).toFixed(2)}`;
      console.log(price);
    });
  } else {
    price.forEach(price => {
      newPrice = price.innerHTML.substring(1);
      price.innerHTML = `&dollar;${(+newPrice / 10).toFixed(2)}`;
    });
  }
});
