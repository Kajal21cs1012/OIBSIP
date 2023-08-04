function convertTemperature() {
    var celsiusInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");
  
    // Check if the input value is empty or not a valid integer
    if (!celsiusInput.value || !Number.isInteger(parseFloat(celsiusInput.value))) {
      resultElement.textContent = "Please enter a valid integer temperature.";
      return;
    }
  
    const celsius = parseInt(celsiusInput.value, 10); // Parse as integer
    const fahrenheit = (celsius * 9 / 5) + 32;
    resultElement.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F.`;
  }
  