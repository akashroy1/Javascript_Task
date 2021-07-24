function addition() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById('num2').value;
    document.getElementById('result').value = parseFloat(n1)+parseFloat(n2);
}
function subtraction() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById('num2').value;
    document.getElementById('result').value = parseFloat(n1)-parseFloat(n2);
}
function sq1() {
    let n1 = document.getElementById("num1").value;
    document.getElementById('result').value = Math.pow(n1, 2);
}
function sq2() {
    let n2 = document.getElementById("num2").value;
    document.getElementById('result').value = Math.pow(n2, 2);
}
function min() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    document.getElementById('result').value = Math.min(n1, n2);
}
function max() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    document.getElementById('result').value = Math.max(n1, n2);
}
function quotient() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    document.getElementById('result').value = parseInt(n1/n2);
}
function remainder() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    document.getElementById('result').value = parseInt(n1%n2);
}