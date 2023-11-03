var addButton = document.querySelectorAll(".button")
var cartbutton = document.querySelector("#cart")
var cartvalue = document.querySelector("#cart-value")
var productName = document.querySelectorAll("h3")
var price = document.querySelectorAll("div p")

var cart= []
var bill= 0
var totalQuantity = 0

function showItems(e){
    let name = productName[e].textContent
    let cost = parseFloat(price[e].textContent.replace("$",""))
    let present = cart.find((items) => items.name===name)
    if (present){
        present.quantity += 1
    }
    else{
        cart.push({name,cost,quantity:1})
    }
    bill += cost
    totalQuantity +=1
    cartvalue.innerHTML = totalQuantity
}
cartbutton.onclick = () =>{
    for(let i=0; i<cart.length; i++){
        console.log("Item name",cart [i].name,"Quantity",cart[i].quantity)
    }
    let dollar = Math.floor(bill)
    let cent = Math.floor(bill - dollar)*100;
    console.log(`The total vill amount is ${dollar} and ${cent} only`)
}