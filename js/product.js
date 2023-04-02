var productsList = [];

let productCar = {
    IdProduct : "",
    nameProduct: "",
    saleProduct: 0,
    imgProduct: "",
    constructer: function (IdProduct, nameProduct, saleProduct, imgProduct){
        this.IdProduct = IdProduct;
        this.nameProduct = nameProduct;
        this.saleProduct = saleProduct;
        this.imgProduct = imgProduct;
    },

    outPutProduct: function(productsList){
        let text = "";
        for (let index = 0; index < productsList.length; index++) {
            text += "<div class = product>";
            text += this.product(productsList[index]);
            text += "</div>"
        }
        return text;
    },
    
    product: function(productCar) {
        let text = "";
        text += "<div><img src='" + productCar.imgProduct + " '></div>";
        text += "<h1>" + productCar.nameProduct + "</h1>"
        text += "<p>$<span>" + productCar.saleProduct + "</span></p>";
        text += "<input type='number' value='1' name='soluong'><br>";
        text += "<button'>Chọn hàng</button>";
        return text;
    }
}

// var Car = new productCar.constructer('070423', 'Urus', 3000.000,'./img/hinh1.jpg');
// var Car2 = new productCar.constructer('070423', 'Urus', 3000.000,'./img/hinh1.jpg');
// var Car3 = new productCar.constructer('070423', 'Urus', 3000.000,'./img/hinh1.jpg');
// var Car4 = new productCar.constructer('070423', 'Urus', 3000.000,'./img/hinh1.jpg');


// productsList.push(Car)
// productsList.push(Car2)
// productsList.push(Car3)
// productsList.push(Car4)

let car1 = Object.create(productCar);
car1.constructer('070423', 'Urus', 3000.000,'./img/hinh1.jpg');
productsList.push(car1)

console.log(productCar.outPutProduct(productsList))
if (document.getElementById('demo')) {
    document.getElementById('demo').innerHTML = productCar.outPutProduct(productsList);
}