//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
let button = document.getElementById('click');

const area = () => {
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  const c = parseInt(document.getElementById("c").value);
  //using Heron's formula https://www.mathsisfun.com/geometry/herons-formula.html
  let s = (a + b + c) / 2
  let A = Math.sqrt(s*(s-a)*(s-b)*(s-c));
  return A;
}

button.addEventListener('click', e => document.getElementById('area').innerHTML=area())



