var div = document.getElementById("resp");

function conversorTemperatura() {
    let temp_celsius = parseFloat(document.getElementById("temp_celsius").value);
    let temp_fahrenheit = (temp_celsius * 9/5) + 32;
    let temp_kelvin = temp_celsius + 273.15;

    let text = `<p>${temp_celsius}°C é igual a ${temp_fahrenheit.toFixed(2)}°F(fahrenheit)</p>`;
    text += `<p>${temp_celsius}°C é igual a ${temp_kelvin.toFixed(2)}K(kelvin)</p>`;

    div.innerHTML = text;
}