var cartArray = [];
var totalQuantity = 0;
var totalCartItems = 0;
var subtotal = 0;

function item1(){
    var img = "img/A76-listpage-blue.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item1value").value);
    var price = 15000;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:01,name:"A76",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
    
}
function item2(){
    var img = "img/A96-navigation-pink-v1.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item2value").value);
    var price = 12500;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:02,name:"A96",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item3(){
    var img = "img/Find X-navigation-Lamborghini-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item3value").value);
    var price = 12500;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:03,name:"Find X Lamborgini",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}

function displayItems(){
    for(var i=0;i<cartArray.length;i++){
        subtotal += cartArray[i].overallitemprice;
    }
    if(cartArray.length==0){
        document.getElementById("checkOutTable").innerHTML = ""
    }
    for(var i=0;i<cartArray.length;i++){
        document.getElementById("checkOutTable").innerHTML += `
        <tr>
            <th scope="row">`+cartArray[i].id+`</th>
            <td>`+cartArray[i].name+`</td>
            <td><img src="`+cartArray[i].imgpath+`" class="tableImg"/></td>
            <td><input type="number" class="form-control" id="item" value="`+cartArray[i].quantity+`"></td>
            <td>`+cartArray[i].currentitemprice+`</td>
            <td>`+cartArray[i].overallitemprice+`</td>
        </tr>
        `
    }
    console.log(subtotal);
    document.getElementById("subTotal").innerHTML = `
    <p><strong>Subtotal:  `+subtotal+`</strong>
    `;
}
