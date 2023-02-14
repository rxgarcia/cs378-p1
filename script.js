// alert("Hello")
let cart = {}
let subtotal = 0;

const addButton = document.getElementsByClassName("add");
for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener('click', addItem);
}

const subButton = document.getElementsByClassName("subtract");
for (let i = 0; i < subButton.length; i++) {
    subButton[i].addEventListener('click', subItem);
}

const subtotalHtml = document.getElementsByClassName("total")[0];
const orderButton = document.getElementById("orderButton");
const clearButton = document.getElementById("clearButton");

orderButton.addEventListener("click", onOrder);
clearButton.addEventListener("click", clearAll);

function onOrder() {
    if (Object.keys(cart).length === 0) {
        alert("No items in the cart.")
        return
    }


    let alertString = "Ordering: \n";
    for (let item in cart) {
        alertString += cart[item] + " " + item + "\n";
    }
    alertString += "For a total of: $" + subtotal;
    console.log(alertString);
    alert(alertString);
}

function clearAll() {
    cart = {}
    subtotal = 0;
    subtotalHtml.innerText = "Subtotal $0"
    const counts = document.getElementsByClassName("count");
    for (let i = 0; i < counts.length; i++) {
        counts[i].innerText = "0";
    }
}

function addItem(event) {
    let itemName = event.srcElement.parentElement.parentElement.parentElement.children[0].children[0].children[0].innerText;
    let itemCost = event.srcElement.parentElement.parentElement.parentElement.children[0].children[1].children[0].innerText;
    itemCost = itemCost.substring(1);
    itemCost = parseInt(itemCost)

    if (itemName in cart) {
        cart[itemName] += 1;
    } else {
        cart[itemName] = 1;
    }
    subtotal += itemCost;

    console.log(cart);
    console.log(subtotal);

    let itemCount = event.srcElement.parentElement.parentElement.parentElement.children[1].children[1];
    itemCount.innerText = parseInt(itemCount.innerText) + 1;

    subtotalHtml.innerText = "Subtotal $" + subtotal;
}

function subItem(event) {
    let itemName = event.srcElement.parentElement.parentElement.parentElement.children[0].children[0].children[0].innerText;
    let itemCost = event.srcElement.parentElement.parentElement.parentElement.children[0].children[1].children[0].innerText;
    itemCost = itemCost.substring(1);
    itemCost = parseInt(itemCost)

    if (itemName in cart && cart[itemName] > 0) {
        cart[itemName] -= 1;
        delete cart[itemName];
        subtotal -= itemCost;
        let itemCount = event.srcElement.parentElement.parentElement.parentElement.children[1].children[1];
        itemCount.innerText = parseInt(itemCount.innerText) - 1;
    }

    console.log(cart);
    console.log(subtotal);

    subtotalHtml.innerText = "Subtotal $" + subtotal;
}