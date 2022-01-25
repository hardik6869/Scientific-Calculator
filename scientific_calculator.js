let display = document.getElementById("display");
let s_display = document.getElementById("sub_display");
let buttons = Array.from(document.getElementsByClassName("btn"));
let btn_sci = Array.from(document.getElementsByClassName("trigino_&_Fun"));
let memory_btn = Array.from(document.getElementsByClassName("memory"));

    // Functions 

var arr_list = []
function memory(m_fun, data) {
  if (m_fun == "M+") {
    arr_list.push(data);
    display.value = data;
    s_display.value = `M+(${display.value})`;
  } else if (m_fun == "M-") {
    arr_list.push(eval('-' + data));
    display.value = data;
    s_display.value = `M-(${display.value})`;
  } else if (m_fun == "MS") {
    arr_list.push(data);
    display.value = arr_list;
    s_display.value = `MS(${display.value})`;
  } else if (m_fun == "MC") {
    arr_list = [];
    display.value = arr_list;
    s_display.value = `MC`;
  } else {
    let add_data = 0;
    arr_list.forEach((data) => {
      add_data += data
    });
    display.value = add_data;
    s_display.value = `Mr(${display.value})`;
  }
}

const deg_rad = () => {
  let val = document.getElementById("deg");
  let convert = parseInt(display.value);
  if (display.value !== "0" && display.value !== "") {
    if (val.innerText == "DEG") {
      s_display.value = `Deg (${display.value})`;
      val.innerText = "RAD";
      display.value = convert * (180 / Math.PI);
    } else {
      val.innerText = "DEG";
      s_display.value = `Rad (${display.value})`;
      display.value = convert * (Math.PI / 180);
    }
  }
}

const Review = () => {
  display.value = s_display.value;
}

const factorial = (num) => {
  fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

const del = () => {
  s_display.value = "";
  let dele = display.value;
  display.value = dele.substring(0, dele.length - 1);
};

const check = (val) => {
  let isvalid;
  let char_list = ["+", "-", "/", "*", "%", "!", "^", "π", "e", "|x|"];
  let last_char = val.charAt(val.length - 1);
  if (display.value !== "0" && display.value !== "") {
    if (char_list.includes(last_char)) {
      isvalid = false;
    } else {
      isvalid = true;
    }
    return isvalid;
  }
};



  // Mapping a buttons and perform particuler button task
      

memory_btn.map((value) => {
  value.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "MC":
        memory("MC", eval(display.value));
        break;
      case "Mr":
        memory("Mr", eval(display.value));
        break;
      case "M+":
        memory("M+", eval(display.value));
        break;
      case "M-":
        memory("M-", eval(display.value));
        break;
      case "MS":
        memory("MS", eval(display.value));
        break;
    }
  });
});


btn_sci.map((value) => {
  value.addEventListener("click", (e) => {
    if (display.value !== "0" && display.value !== "") {
      switch (e.target.innerText) {
        case "sin":
          s_display.value = `sin(${display.value})`;
          display.value = Math.sin(display.value);
          break;
        case "cos":
          s_display.value = `cos(${display.value})`;
          display.value = Math.cos(display.value);
          break;
        case "tan":
          s_display.value = `tan(${display.value})`;
          display.value = Math.tan(display.value);
          break;
        case "asin":
          s_display.value = `asin(${display.value})`;
          display.value = Math.asin(display.value);
          break;
        case "acosh":
          s_display.value = `acosh(${display.value})`;
          display.value = Math.acosh(display.value);
          break;
        case "atan":
          s_display.value = `atan(${display.value})`;
          display.value = Math.atan(display.value);
          break;
        case "ceil":
          s_display.value = `ceil(${display.value})`;
          display.value = Math.ceil(display.value);
          break;
        case "floor":
          s_display.value = `floor(${display.value})`;
          display.value = Math.floor(display.value);
          break;
        case "random":
          s_display.value = `ramdom(${display.value})`;
          display.value = Math.random(display.value);
          break;
      }
    }
  });
});



buttons.map((value) => {
  value.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "=":
        s_display.value = `${display.value}`;
        if (display.value.charAt(display.value.length - 1) == "!") {
          display.value = display.value.substring(
            0,
            display.value.length - 1
          );
          display.value = factorial(display.value);
        }
        if (display.value.includes("^")) {
          let sign = display.value.indexOf("^");
          let x = display.value.substring(0, sign);
          let y = display.value.substring(
            sign + 1,
            display.value.length
          );
          display.value = Math.pow(x, y);
        }
        display.value = eval(display.value);
        break;

      case "F-E":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `F-E (${display.value})`;
          num = parseFloat(display.value);
          display.value = num.toExponential();
        }
        break;

      case "C":
        s_display.value = "";
        display.value = "";
        break;

      case "n!":
        if (check(display.innerHTML)) {
          display.value += "!";
        }
        break;

      case "xy":
        if (check(display.value)) {
          display.value += "^";
        }
        break;

      case "^":
        if (check(display.value)) {
          display.value = display.value.slice(0, -1);
        }
        break;

      case "+":
        if (check(display.value)) {
          display.value = display.value + "+";
        }
        break;

      case "-":
        if (check(display.value)) {
          display.value = display.value + "-";
        }
        break;

      case "×":
        if (check(display.value)) {
          display.value = display.value + "*";
        }
        break;

      case "÷":
        if (check(display.value)) {
          display.value = display.value + "/";
        }
        break;

      case "+/-":
        if (display.value > 0) {
          display.value = `-${display.value}`;
        } else {
          display.value = Math.abs(display.value);
        }
        break;

      case "π":
        if (check(display.innerHTML)) {
          s_display.value = `${display.value}×π`;
          display.value = display.value * Math.PI;
        }
        break;

      case "e":
        if (check(display.innerHTML)) {
          s_display.value = `${display.value}×e`;
          display.value = display.value * Math.E;
        }
        break;

      case "|x|":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `| ${display.value} | `;
          display.value = Math.abs(display.value); ''
        }
        break;

      case "√":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `√${display.value}`;
          display.value = Math.sqrt(display.value);
        }
        break;

      case "x2":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `${display.value}^2`;
          display.value = display.value ** 2;
        }
        break;

      case "10x":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `10^${display.value}`;
          display.value = 10 ** display.value;
        }
        break;

      case "1/x":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `1/${display.value}`;
          display.value = 1 / display.value;
        }
        break;

      case "2n":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `2^${display.value}`;
          display.value = 2 ** display.value;
        }
        break;

      case "log":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `log(${display.value})`;
          display.value = Math.log10(display.value);
        }
        break;

      case "ln":
        if (display.value !== "0" && display.value !== "") {
          s_display.value = `ln(${display.value})`;
          display.value = Math.log(display.value);
        }
        break;

      case "exp":
        if (display.value !== "0" && display.value !== "") {
          display.value = Math.exp(display.value);
        }
        break;

      case "mod":
        if (display.value !== "0" && display.value !== "") {
          if (check(display.value)) {
            display.value += "%";
          }
        }
        break;

      case ".":
        if (display.value == null || display.value == "0") {
          display.value = ".";
        } else {
          display.value += ".";
        }
        break;

      default:
        display.value += e.target.innerText;
    }
  });
});