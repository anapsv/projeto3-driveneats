function toggleBorder1(picked1) {
    let food = document.querySelector(".border1");
    if (food !== null) {
        food.classList.toggle("border1");
    }
    picked1.classList.add("border1");
    bottomBar();
}

function toggleBorder2(picked2) {
    let drink = document.querySelector(".border2");
    if (drink !== null) {
        drink.classList.toggle("border2");
    }
    picked2.classList.add("border2");
    bottomBar();
}

function toggleBorder3(picked3) {
    let dessert = document.querySelector(".border3");
    if (dessert !== null) {
        dessert.classList.toggle("border3");
    }
    picked3.classList.add("border3");
    bottomBar();
}

function bottomBar() {
    let before = document.querySelector(".footerInfo");
    let after = document.querySelector(".footerInfo2");

    if ( document.querySelector(".border1")!== null && document.querySelector(".border2")!== null && document.querySelector(".border3")!== null){
        before.classList.add("hide");
        after.classList.remove("hide");
    }
}

function whatsApp() {
    let name, address = "";
    name = prompt("Qual é o seu nome?");
    address = prompt("Qual é o seu endereço?");
  
    let food = document.querySelector(".border1").querySelector(".productName").innerHTML;
    let drink = document.querySelector(".border2").querySelector(".productName").innerHTML;
    let dessert = document.querySelector(".border3").querySelector(".productName").innerHTML;
    let foodPrice = Number(document.querySelector(".border1").querySelector("span").innerHTML);
    let drinkPrice = Number(document.querySelector(".border2").querySelector("span").innerHTML);
    let dessertPrice = Number(document.querySelector(".border3").querySelector("span").innerHTML);
    let totalPrice = Number(foodPrice + drinkPrice + dessertPrice).toFixed(2);
  
    let message = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${food}
    - Bebida: ${drink}
    - Sobremesa: ${dessert}
    Total: R$ ${totalPrice}
  
    Nome: ${name}
    Endereço: ${address}`);
    document.querySelector(".footerInfo2").querySelector("a").href ="https://wa.me/5541995563733?text=" + message;
  }