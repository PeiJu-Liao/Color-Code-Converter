"use strict"

//監聽事件: 滑鼠滑動RGB時，右側出示數值，數值集合為HEX色碼
//HEX色碼變成色塊的顏色；HEX input值為HEX色碼

//右側RGB轉換HEX
const redSlide = document.querySelector("#redSlide");
const greenSlide = document.querySelector("#greenSlide");
const blueSlide = document.querySelector("#blueSlide");

function rgbToHexRight() {
  let redValue = Number(redSlide.value); //output number
  let greenValue = Number(greenSlide.value);
  let blueValue = Number(blueSlide.value);

  //右側滑動滑鼠數值 = 左側rgb input數值
  document.querySelector("#redInput").value = `${redValue}`;
  document.querySelector("#greenInput").value = `${greenValue}`;
  document.querySelector("#blueInput").value = `${blueValue}`;

  //數值改為十六進位，並集合一起為hex色碼
  let hex = "#" + getHex(redValue) + getHex(greenValue) + getHex(blueValue);
  //改變hex input數值
  document.querySelector(".hex").value = hex;
  //改變色塊顏色
  document.querySelector(".hexColorBox").style.backgroundColor = hex;
}

//左側RGB轉換HEX
const redInput = document.querySelector("#redInput");
const greenInput = document.querySelector("#greenInput");
const blueInput = document.querySelector("#blueInput");

function rgbToHexLeft() {
  let redInputValue = Number(redInput.value);
  let greenInputValue = Number(greenInput.value);
  let blueInputValue = Number(blueInput.value);

  //左側rgb input輸入限制
  if (
    redInputValue < 0 ||
    redInputValue > 255 ||
    !Number.isInteger(redInputValue)
  ) {
    alert(`請輸入0-255的正整數`);
  }
  if (
    greenInputValue < 0 ||
    greenInputValue > 255 ||
    !Number.isInteger(greenInputValue)
  ) {
    alert(`請輸入0-255的正整數`);
  }
  if (
    blueInputValue < 0 ||
    blueInputValue > 255 ||
    !Number.isInteger(blueInputValue)
  ) {
    alert(`請輸入0-255的正整數`);
  }

  document.querySelector("#redSlide").value = redInputValue;
  document.querySelector("#greenSlide").value = greenInputValue;
  document.querySelector("#blueSlide").value = blueInputValue;

  let hexColor =
    "#" +
    getHex(redInputValue) +
    getHex(greenInputValue) +
    getHex(blueInputValue);
  document.querySelector(".hex").value = hexColor;
  document.querySelector(".hexColorBox").style.backgroundColor = hexColor;
}

function getHex(value) {
  let hex = value.toString(16).padStart(2, "0");
  return hex; //output string
}

//監聽事件
redSlide.addEventListener("mousemove", rgbToHexRight);
greenSlide.addEventListener("mousemove", rgbToHexRight);
blueSlide.addEventListener("mousemove", rgbToHexRight);

//監聽事件
redInput.addEventListener("input", rgbToHexLeft);
greenInput.addEventListener("input", rgbToHexLeft);
blueInput.addEventListener("input", rgbToHexLeft);
