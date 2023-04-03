const btn_Buy = document.querySelectorAll(".option_items button.btn_buy")
const indexProduct = document.querySelector(".icon_search p")

btn_Buy.forEach(function(button, index){
    button.addEventListener('click', function(event){
        var btn_item = event.target
        var product = btn_item.parentElement.parentElement.parentElement
        var product_img = product.querySelector(".option_items img").src
        var product_name = product.querySelector(".option_items p").innerText
        var product_sale = product.querySelector(".option_items span").innerText

        addCart(product_img, product_name, product_sale);
    })
})

function addCart(product_img, product_name, product_sale){
    var addtr = document.createElement("tr")
    var trcontent = 
    '<tr style="border-top: 1px solid black;margin-top: 10px;">' + 
        '<td style="margin: 10px;"><img style="width: 100px;height: 55px;" src="' + product_img + '" alt=""></td>' +
        '<td><h4 style="width: 200px;">' + product_name + '</h4></td>' +
        '<td><span style="color: red;">'+ product_sale+ '</span></td>' +
        '<td><input style="width: 45px; height: 25px; margin: 10px; color: black;" type="number" value="1" min="1"></td>' +
        '<td><button style="cursor: pointer;">DELETE</button> </td>'+
    '</tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector(".cart tbody")
    cartTable.append(addtr)
}

function myCart(){
    document.querySelector('.cart').style.display = "flex";
}

function closeCart(){
    document.querySelector('.cart').style.display = "none";
}