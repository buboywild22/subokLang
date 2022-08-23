var cartArray = [];
var totalQuantity = 0;
var totalCartItems = 0;

function item1(){
    var itemquantity = parseInt(document.getElementById("item1value").value);
    var price = 15000;
    totalQuantity=+itemquantity;
    var totalprice = itemquantity * price;
    cartArray.push(totalprice);
}
function item2(){
    var itemquantity = parseInt(document.getElementById("item2value").value);
    var price = 20000;
    totalQuantity=+itemquantity;
    var totalprice = itemquantity * price;
    cartArray.push(totalprice);
}
function item3(){
    var itemquantity = parseInt(document.getElementById("item3value").value);
    var price = 5000;
    totalQuantity=+itemquantity;
    var totalprice = itemquantity * price;
    cartArray.push(totalprice);
}

function checkOut(){
    for(var i=0;i<cartArray.length;i++){
        totalCartItems=+cartArray[i];
    }
    console.log("The total price of all items:",totalCartItems);
}
