let paragraphText = document.getElementById("myParagraph").innerText;
console.log(paragraphText);

function calculate() {
  event.preventDefault();
  event.stopPropagation();

  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  console.log(num1 + ", " + num2);

  return false;
}