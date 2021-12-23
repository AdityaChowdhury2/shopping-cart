//Handle Plus and Minus Button Click Event
const incrementBtn1 = document.getElementById('incrementBtn1');
incrementBtn1.addEventListener('click', function () {
   quantityHandler("quantityOfItem1", "price1", "increment")
})
const incrementBtn2 = document.getElementById('incrementBtn2');
incrementBtn2.addEventListener('click', function () {
   quantityHandler("quantityOfItem2", "price2", "increment")
})
const decrementBtn1 = document.getElementById('decrementBtn1');
decrementBtn1.addEventListener('click', function () {
   quantityHandler("quantityOfItem1", "price1", "decrement")
})
const decrementBtn2 = document.getElementById('decrementBtn2');
decrementBtn2.addEventListener('click', function () {
   quantityHandler("quantityOfItem2", "price2", "decrement")
})
const removeItem1 = document.getElementById('removeItem1');
removeItem1.addEventListener('click', function () {
   itemRemoveInCart("item1", "price1");
})
const removeItem2 = document.getElementById('removeItem2');
removeItem2.addEventListener('click', function () {
   itemRemoveInCart("item2", "price2");
})
const checkOut = document.getElementById('checkOutBtn');
checkOut.addEventListener('click',function(){
   const cartArea = document.getElementById('cart');
   cartArea.style.display = "none";
   const customerDetailsArea = document.getElementById('customer-details');
   customerDetailsArea.style.display = "block";
})
function itemRemoveInCart(itemId, priceId) {
   document.getElementById(itemId).style.display = 'none';
   document.getElementById(priceId).innerText = 0;
   updateTotal();
}
// total update function
function updateTotal() {
   let price1 = document.getElementById('price1').innerText;
   let price2 = document.getElementById('price2').innerText;
   let subtotalPrice = parseFloat(price1) + parseFloat(price2);

   //adding 9% tax
   let tax = subtotalPrice * 9 / 100;

   let totalPrice = tax + subtotalPrice;
   totalPrice = parseFloat(totalPrice).toFixed(2);

   document.getElementById('subtotal').innerText = subtotalPrice;
   document.getElementById('tax').innerText = tax;
   document.getElementById('total').innerText = totalPrice;
}
function quantityHandler(valueId, priceId, type) {
   let itemQuantity = document.getElementById(valueId).value;
   let itemQuantityNumber = parseFloat(itemQuantity);
   let newItemQuantity = type == "increment" ? itemQuantityNumber + 1 : itemQuantityNumber - 1;
   if (newItemQuantity >= 1) {
      let price = document.getElementById(priceId).innerText;
      let priceNumber = parseFloat(price);
      let originalPrice = priceNumber / itemQuantityNumber;
      let updatedPrice = originalPrice * newItemQuantity;
      // console.log(originalPrice);
      document.getElementById(valueId).value = newItemQuantity;
      document.getElementById(priceId).innerText = updatedPrice;
   }
   // if item quantity number = 0 then delete item from cart
   else {
      let itemId = document.getElementById(priceId).parentElement.parentElement.parentElement.parentElement.id;
      itemRemoveInCart(itemId, priceId);
   }
   updateTotal();
}
updateTotal();