let display = document.getElementById("display");
// display.innerText = "0";
let buttons = Array.from(document.getElementsByClassName("btn"));
let btn_sci = Array.from(document.getElementsByClassName("trigino_&_Fun"));
const facto = (num) => {
  fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};
const del = () => {
  let dele = display.innerText;
  display.innerText = dele.substring(0, dele.length - 1);
};

btn_sci.map((value) => {
    value.addEventListener("click", (a) => {
      console.log(a.target.innerText);
      switch (a.target.innerText) {
        case "sin":
          display.innerText = Math.sin(display.innerText);
          break;
        case "cos":
          display.innerText = Math.cos(display.innerText);
          break;
        case "tan":
          display.innerText = Math.tan(display.innerText);
          break;
      }
    });
  });

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "=":
        if (display.innerText.charAt(display.innerText.length - 1) == "!") {
          display.innerText = display.innerText.substring(
            0,
            display.innerText.length - 1
          );
          display.innerText = facto(display.innerText);
        }
        if (display.innerText.includes("^")) {
          let sign = display.innerText.indexOf("^");
          let a = display.innerText.substring(0, sign);
          let b = display.innerText.substring(
            sign + 1,
            display.innerText.length
          );
          display.innerText = Math.pow(a, b);
        }
        display.innerText = eval(display.innerText);
        break;

      case "C":
        display.innerText = "";
        break;

      case "n!":
        if (check(display.innerHTML)) {
          display.innerText += "!";
        }
        break;

      case "π":
        if (check(display.innerHTML)) {
          display.innerText = display.innerHTML + 3.14159;
        }
        break;

      case "e":
        if (check(display.innerHTML)) {
          display.innerText = display.innerText + 2.718281828459045;
        }
        break;

      case "|x|":
          display.innerText = Math.abs(display.innerText);
        break;

      case "√":
          tmp = display.innerText;
          display.innerText = Math.sqrt(display.innerText);
        break;

      case "x2":
          display.innerText = display.innerText ** 2;
        break;

      case "10x":
          display.innerText = 10 ** display.innerText;
        break;

      case "1/x":
          display.innerText = 1 / display.innerText;   
        break;
    case "xy":
            display.innerText += "^";
            break;

      case "2nd":
          display.innerText = 2 ** display.innerText; 
        break;

      case "log":
          display.innerText = Math.log10(display.innerText);
          break;
    case "^":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

    case "×":
        if (check(display.innerText)) {
          display.innerText = display.innerText + "*";
        }
        break;

      case "÷":
        if (check(display.innerText)) {
          display.innerText = display.innerText + "/";
        }
        break;

    
      case "ln":
        display.innerText = Math.log(display.innerText);
        break;
    case "exp":
        display.innerText = Math.exp(display.innerText);
        break;
    case "mod":
        if (check(display.innerText)) {
          display.innerText += "%";
        }
        break;


    case ".":
        if (display.innerText == null || display.innerText == "0") {
          display.innerText = ".";
        } else {
          display.innerText += ".";
        }
        break;

    case "+/-":
        if(display.innerText > 0){
            display.innerText = `-${display.innerText}`;
        }else{
            display.innerText = Math.abs(display.innerText);
        }
        break;

      default:
        display.innerText += e.target.innerText;
    }

  });
});

const check = (val) => {
  let isvalid;
  let char_list = ["+", "-", "/", "*", "%", "!", "π", "e"];
  let last_char = val.charAt(val.length - 1);
  if (char_list.includes(last_char)) {
    isvalid = false;
  } else {
    isvalid = true;
  }
  return isvalid;
};
