var product = "Television";
var quantity = 10;
var price = 620.75;
var isCitizen = true;
console.log(product);
var quantityOne = "10";
console.log(price * quantity);
console.log(price + quantity);
console.log(price * "a");
console.log(price / 0);

//Using === wil take type in to consideration
if(quantity === quantityOne)
{
    console.log("Equals")
}
else
{
    var price = 700;
    console.log("Not Equals");
}

//Javascript does not support block scope, that's why price at this point is accessible and value is 700
console.log(price);