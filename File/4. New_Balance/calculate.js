function calculate() {
    let acNum = document.getElementById('acnum').value;
    let creditLimit = document.getElementById('crLimit').value;
    let initialBal = document.getElementById('bgBal').value;
    let totalExp = document.getElementById('totalexp').value;
    let totalCredit = document.getElementById('totCredit').value;

    let newBal = 0;
    newBal = parseFloat(initialBal)+parseFloat(totalExp)-parseFloat(totalCredit);


    if (newBal<creditLimit) {
        document.getElementById('display').innerHTML = `New Balance: ${newBal}`;
    } else {
        document.getElementById('display').innerHTML = 'Credit limit exceeded.';
    }
}