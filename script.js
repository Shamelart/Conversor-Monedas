const monedaOne = document.getElementById('moneda-uno');
const monedaTwo = document.getElementById('moneda-dos');
const cantidadOne = document.getElementById('cantidad-uno');
const cantidadTwo = document.getElementById('cantidad-dos');
const cambio = document.getElementById('cambio');
const taza = document.getElementById('taza');

// fetch exchange rate and update the dom
function calculate () {
   const moneda_One = monedaOne.value;
   const moneda_Two = monedaTwo.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_One}`)
   .then(res => res.json())
   .then(data => {
    const taza = data.rates[moneda_Two]
    cambio.innerText = `1 ${moneda_One} = ${taza} ${moneda_Two}`;
    cantidadTwo.value = (cantidadOne.value * taza).toFixed(2);

});   
}

// event listeners
monedaOne.addEventListener('change', calculate);
cantidadOne.addEventListener('input', calculate);
monedaTwo.addEventListener('change', calculate);
cantidadTwo.addEventListener('input', calculate);

taza.addEventListener('click', () => {
    // usar .value para obtener el valor de los elementos
    const temp = monedaOne.value;
    monedaOne.value = monedaTwo.value;
    monedaTwo.value = temp;
    // usar paréntesis para invocar la función
    calculate();
})
// usar paréntesis para invocar la función
calculate();
