const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else if (value === "√") {
      display.value = Math.sqrt(eval(display.value));
    } else if (value === "π") {
      display.value += Math.PI.toFixed(6);
    } else if (value === "x²") {
      display.value = Math.pow(eval(display.value), 2);
    } else if (value === "±") {
      display.value = eval(display.value) * -1;
    } else {
      display.value += value;
    }
  });
});