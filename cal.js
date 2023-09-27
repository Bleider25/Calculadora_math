var screen = document.querySelector('#screen');
    var btn = document.querySelectorAll('.btn');

    /*============ For getting the value of btn, Here we use for loop ============*/
    for (item of btn) {
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;

            if (btntext == '×') {
                btntext = '*';
            }

            if (btntext == '÷') {
                btntext = '/';
            }
            screen.value += btntext;
        });
    }

    function cubicRoot() {
        var screen = document.getElementById("screen");
        var valor = screen.value;
        var resultado = Math.cbrt(parseFloat(valor));
        screen.value = resultado;
    }

    function absoluteValue() {
        var screen = document.getElementById("screen");
        var valor = screen.value;
        var resultado = Math.abs(parseFloat(valor));
        screen.value = resultado;
    }

    function convertToMeter() {
        const inputValue = document.getElementById("screen").value;
        const centimeters = parseFloat(inputValue);
        const meters = centimeters / 100;
        document.getElementById("screen").value = meters;
    }
    
    function convertToCentimeter() {
        const inputValue = document.getElementById("screen").value;
        const meters = parseFloat(inputValue);
        const centimeters = meters * 100;
        document.getElementById("screen").value = centimeters;
    }

    function sin() {
        screen.value = Math.sin(screen.value);
    }

    function cos() {
        screen.value = Math.cos(screen.value);
    }

    function tan() {
        screen.value = Math.tan(screen.value);
    }

    function pow() {
        screen.value = Math.pow(screen.value, 2);
    }

    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }

    function log() {
        screen.value = Math.log(screen.value);
    }

    function pi() {
        screen.value = 3.14159265359;
    }

    function e() {
        screen.value = 2.71828182846;
    }


    function fact() {
        var i, num, f;
        f = 1
        num = screen.value;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }

        i = i - 1;

        screen.value = f;
    }


    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }

    function convertirACelsius() {
        const celsius = parseFloat(document.getElementById("inputCelsius").value);
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("resultadoFahrenheit").textContent = fahrenheit.toFixed(2) + " °F";
    }

    function convertirAFahrenheit() {
        const fahrenheit = parseFloat(document.getElementById("inputFahrenheit").value);
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("resultadoCelsius").textContent = celsius.toFixed(2) + " °C";
    }