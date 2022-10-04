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
function item4(){
    var img = "img/Find X-navigation-Red-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item4value").value);
    var price = 13500;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:04,name:"Find X Red",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item5(){
    var img = "img/Find X2 Pro-navigation-Lamborghini-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item5value").value);
    var price = 14000;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:05,name:"Find X Lamborgini",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item6(){
    var img = "img/Find X2 Pro-navigation-Orange-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item6value").value);
    var price = 14500;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:06,name:"Find X2 Pro Orange",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item7(){
    var img = "img/Find X2-navigation-Black-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item7value").value);
    var price = 15000;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:07,name:"Find X2 Black",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item8(){
    var img = "img/Find X3 series-navigation-black-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item8value").value);
    var price = 15500;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:08,name:"Find X3 Series Black",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item9(){
    var img = "img/findx5-black-navigation-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item9value").value);
    var price = 16000;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:09,name:"Find X5 Black",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item10(){
    var img = "img/findx5-pro-white-navigation-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item10value").value);
    var price = 16500;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:10,name:"Find X5 Pro White",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item11(){
    var img = "img/Navigation-SunsetOrange-427_600-pc.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item11value").value);
    var price = 17000;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:11,name:"Find X5 Pro Sunset Orange",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item12(){
    var img = "img/Phone-list-product-list-stellar-black-427-x-600.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item12value").value);
    var price = 17500;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:12,name:"Find X5 Pro Stellar Black",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item13(){
    var img = "img/Reno 10x-navigation-Green-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item13value").value);
    var price = 18000;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:13,name:"Reno 10x Green",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item14(){
    var img = "img/Reno-navigation-Black-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item14value").value);
    var price = 18500;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:14,name:"Reno 10x Black",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item15(){
    var img = "img/Reno3 Pro-Raphael4G-navigation-Blue-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item15value").value);
    var price = 19000;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:15,name:"Reno3 Pro Raphael 4G",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item16(){
    var img = "img/Reno3-Lisa4G-navigation-Black-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item16value").value);
    var price = 19500;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:16,name:"Reno3 Lisa 4G",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item17(){
    var img = "img/Reno4 Pro-5G-navigation-Black-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item17value").value);
    var price = 20000;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:17,name:"Reno4 Pro 5G Black",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item18(){
    var img = "img/Reno4-5G-navigation-Blue-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item18value").value);
    var price = 20500;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:18,name:"Reno4 5G Blue",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item19(){
    var img = "img/Reno4-z-navigation-White-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item19value").value);
    var price = 21000;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:19,name:"Reno4 Z White",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item20(){
    var img = "img/Reno5-4G-navigation-black-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item20value").value);
    var price = 21500;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:20,name:"Reno5 4G Black",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item21(){
    var img = "img/Reno5-5G-navigation-silver-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item21value").value);
    var price = 22000;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:21,name:"Reno5 5G Silver",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item22(){
    var img = "img/Reno5-pro-chaka-navigation-black-v2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item22value").value);
    var price = 22500;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:22,name:"Reno5 Pro Chaka Black",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item23(){
    var img = "img/Reno7_navigation-black_2.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item23value").value);
    var price = 23000;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:23,name:"Reno7 Black",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item24(){
    var img = "img/reno8-pro-glazed-green-427_600-pc.png.thumb.webp";
    var itemquantity = parseInt(document.getElementById("item24value").value);
    var price = 23500;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:24,name:"Reno8 Pro Glazed-Green",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function displayItems(){
    document.getElementById("checkOutTable").innerHTML = "";
    subtotal=0;
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
            <td>₱`+cartArray[i].currentitemprice+`</td>
            <td>₱`+cartArray[i].overallitemprice+`</td>
        </tr>
        `
    }
    console.log(subtotal);
    document.getElementById("subTotal").innerHTML = `
    <p><strong>Subtotal:  ₱`+subtotal+`</strong>
    `;
}
