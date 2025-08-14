function convertTemp() {
      const degrees = parseFloat(document.getElementById("degrees").value);
      const type = document.getElementById("type").value;
      let result = '';

      if (isNaN(degrees)) {
        result = "Please enter a valid number.";
      } else {
        if (type === "fahrenheit") {
          result = ((degrees - 32) * 5 / 9).toFixed(4) + " °C";
        } else {
          result = ((degrees * 9 / 5) + 32).toFixed(4) + " °F";
        }
      }

      document.getElementById("result").textContent = "Result: " + result;
    }