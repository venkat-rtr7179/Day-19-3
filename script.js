let res1;

async function api() {
    var res = await fetch("https://api.coincap.io/v2/assets");
    var jsonobj = await res.json();
    res1 = jsonobj;
    dropDownMenu();
}
function display() {
    let val = document.getElementById("coinname").value;
    div.innerHTML = "";

    for (var i = 0; i < res1.data.length; i++) {
        if (val == res1.data[i].name) {

            div.innerHTML += `Symbol of the currency is ${res1.data[i].symbol}<br>`;

            div.innerHTML += `Ranked No.${res1.data[i].rank} among other currencies<br>`;

            div.innerHTML += `Price in USD : ${res1.data[i].priceUsd}<br><br>`;

            div.innerHTML += `To know more about ${res1.data[i].name} visit<br> <a href="${res1.data[i].explorer}" target="_blank">${res1.data[i].explorer}</a><br>`;
        }
    }

}


var container = document.createElement("div");
container.className = "container-fluid";

var heading = document.createElement("h1");
heading.innerHTML = "KNOW YOUR CURRENCY!";
heading.classList.add("text-info", "head-center");


var div = document.createElement("div");
div.style.textAlign = "center";


var input = document.createElement("select");
input.setAttribute("id", "coinname");
input.classList.add("dropdown-select");

function dropDownMenu() {
    var placeholderOption = document.createElement("option");
    placeholderOption.selected = true;
    placeholderOption.textContent = "Select a Currency";
    input.appendChild(placeholderOption);
    input.style.width = "40%";
    for (var j = 0; j < res1.data.length; j++) {
        var option = document.createElement("option");
        option.value = res1.data[j].name;
        option.textContent = res1.data[j].name;
        input.appendChild(option);
    };
}

var lnbr = document.createElement("br")

var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-outline-success", "btn-lg");
button.style.width = "200px";
button.style.height = "50px";
button.style.margin = "15px";
button.innerHTML = "GET INFO";
button.style.textAlign = "center";
button.addEventListener("click", display);

var lnbr1 = document.createElement("br");








div.append(input, lnbr, button, lnbr1);

container.append(heading, div);

document.body.append(container);


api();