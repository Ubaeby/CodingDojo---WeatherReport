function cityAlert(id) {
    let city = document.getElementById(id);
    let specificCity = city.textContent;
    alert(`Loading weather report in... ${specificCity}`)
}


function dismiss(id) {
   let cookie = document.getElementById(id);
   cookie.remove();
}

function farenHeightConvert(num) {
   let f = (num/5 * 9) + 32;
   let roundF = Math.round(f);
   console.log("This is Farenheit: " + roundF)
   return roundF;
}


function celsiusConvert(num) {
    let c = ((num - 32) * 5)/9;
    let roundC = Math.round(c)
    console.log("This is Celcius: " + roundC)
    return roundC;
}

let id = 0;
let letterL = "l";

function faren(element) {
    for (let i = 0; i < 8; i ++) {
        id++;
        let total = letterL + id
        let numbers = document.querySelector(`#${total}`);
        let valueNumbers = parseFloat(numbers.textContent);
        if (element.value === "farenheight") {
            let newF = farenHeightConvert(valueNumbers);
            numbers.textContent = `${newF}°`;
        }
        else if (element.value === "celcius") {
           let newC = celsiusConvert(valueNumbers);
           numbers.textContent = `${newC}°`;
        }  
    } 
    id = 0;
} 



