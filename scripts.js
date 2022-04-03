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
  
    let prato = document.querySelector(".border1").querySelector("productName")
      .innerHTML;
    let bebida = document.querySelector(".border2").querySelector("productName")
      .innerHTML;
    let sobremesa = document
      .querySelector(".border3")
      .querySelector("productName").innerHTML;
    let pratoCusto = Number(
      document.querySelector(".border1").querySelector("procuctPrice").innerHTML
    );
    let bebidaCusto = Number(
      document.querySelector(".border2").querySelector("productPrice").innerHTML
    );
    let sobremesaCusto = Number(
      document.querySelector(".product3").querySelector("productPrice").innerHTML
    );
    let total = (pratoCusto + bebidaCusto + sobremesaCusto).toFixed(2);
  
    let uri = encodeURIComponent(`Olá, gostaria de fazer o pedido:
  - Prato: ${prato}
  - Bebida: ${bebida}
  - Sobremesa: ${sobremesa}
  Total: R$ ${total}
  
  Nome: ${nome}
  Endereço: ${endereco}`);
    document.querySelector(".footerInfo2 a").href =
      "https://wa.me/5541995563733?text=" + uri;
  }