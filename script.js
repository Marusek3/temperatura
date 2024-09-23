document.getElementById("submit").addEventListener("click", function (event) {
    // Prevent default form submission behavior
    event.preventDefault();

    let degrees = Number(document.getElementById("degrees").value);
    if (!degrees) {
        document.getElementById("output").innerHTML = "Uzupełnij stopnie";
        return;
    }
    let type = document.querySelector('input[name="type"]:checked');

    if (!type) {
        document.getElementById("output").innerHTML = "Uzupełnij jednostki";
        return;
    } else {
        var unit = type.value;
    }
    var Kelvin;
    var Celsius;
    var Fahrenheit;

    if (unit == "Fahrenheit") {
        Fahrenheit = degrees;
        Celsius = (Fahrenheit - 32) * (5 / 9);
        Kelvin = Celsius + 273.15;
    } else if (unit == "Celsius") {
        Celsius = degrees;
        Fahrenheit = Celsius * (9/5) + 32;
        Kelvin = Celsius + 273.15;
    }else{
        Kelvin = degrees;
        Celsius = Kelvin - 273.15;
        Fahrenheit = Kelvin*(9/5) - 459.67;
    }

    document.getElementById("output").innerHTML = 
    `Stopnie: ${Celsius.toFixed(2)} °C<br>
    Stopnie: ${Fahrenheit.toFixed(2)} °F<br>
    Stopnie: ${Kelvin.toFixed(2)} K<br>`;
});
