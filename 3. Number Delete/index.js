let myarr = [];
function display() {
    myarr = [];
    while(myarr.length < 10){
        var r = Math.floor(Math.random() * 200) + 1;
        if(myarr.indexOf(r) === -1) myarr.push(r);
    }
    // console.log(myarr);

    myarr.forEach(function(element){
        document.getElementById('result').innerHTML+= `<button>${element}</button> `;
    });
}
display();

function del() {
    document.getElementById('result').innerHTML= ``;
    var divi = parseInt(document.getElementById('div').value);
    const newarr = [...myarr];
    
    for (let i = 0; i < newarr.length; i++) {
        let element = newarr[i];
        if (element%divi === 0) {
            myarr.splice(myarr.indexOf(element), 1);
            // console.log(myarr);
        }
    }

    myarr.forEach(function(element){
        document.getElementById('result').innerHTML+= `<button>${element}</button> `;
    });
}