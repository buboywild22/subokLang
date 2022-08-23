var cartArray = [];
var totalQuantity = 0;
var totalCartItems = 0;

function item1(){
    var itemquantity = parseInt(document.getElementById("item1value").value);
    var price = 15000;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:1,name:"A76",quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = totalQuantity;
    //need code to hide modal after click
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

function displayItems(){
    if(cartArray.length==0){
        document.getElementById("checkOutTable").innerHTML = ""
    }
    for(var i=0;i<cartArray.length;i++){
        document.getElementById("checkOutTable").innerHTML += `
        <tr>
            <th scope="row">`+cartArray[i].id+`</th>
            <td>`+cartArray[i].name+`</td>
            <td><input type="text" class="form-control" id="item" value="`+cartArray[i].quantity+`"></td>
            <td>`+cartArray[i].currentitemprice+`</td>
            <td>`+cartArray[i].overallitemprice+`</td>
        </tr>
        `
        console.log("ID:",cartArray[i].id,"Name:",cartArray[i].name,"Quantity:",cartArray[i].quantity)
    }
}
