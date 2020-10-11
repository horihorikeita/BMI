//入力取得
const height = document.getElementById("height-input");
const weight = document.getElementById("weight-input");
const button = document.getElementById("button-submit");
//出力取得
const output = document.getElementById("bmi-output");

//入力値を計算
const calcBmi = () => {
  let h_value = height.value;
  let w_value = weight.value;
  h_value = h_value / 100;
  let bmi = w_value / (h_value * h_value);
  bmi = Math.floor(bmi * 10) / 10;
  output.innerHTML = bmi;
};

button.addEventListener("click", calcBmi);
