function push() {
    let val = document.getElementById('value').value;
    if (val==""){
        document.getElementById('display').innerHTML = `<h4>Please Enter a value`;
    }
    else {
        if (localStorage.getItem('itemsJson')==null) {
            itemJsonArray = [];
            itemJsonArray.push(val);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        }
        else {
            itemJsonArrayStr = localStorage.getItem('itemsJson');
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            itemJsonArray.push(val);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        }
        document.getElementById('display').innerHTML = `<h4>${val} is pushed into stack succesfully</h4>`;
    }
}
function pop() {
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    if (localStorage.getItem('itemsJson')=="[]") {
        document.getElementById('display').innerHTML = `<h4>:( Stack is Empty.</h4>`
    }
    else {
        let item = itemJsonArray.pop();
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        document.getElementById('display').innerHTML = `<h4>${item} is poped out from stack succesfully</h4>`;
    }
}
function traverse() {
    if (localStorage.getItem('itemsJson')=="[]") {
        document.getElementById('display').innerHTML = `<h4>:( Stack is Empty.</h4>`
    }
    else {
    let body = document.getElementById('display');
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    let str = "|";
    itemJsonArray.forEach((element) =>{
        str+=` ${element} |`;
    });
    body.innerHTML = str;
    }
}
