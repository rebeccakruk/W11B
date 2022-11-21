let selectionJson = Cookies.get(`item`);
let selection = JSON.parse(itemJSON);


// Cookies.get(addedToCart);

let total = 0;
// addToCart(ornaments, ornaments)

for(let i = 0; i < item.length; i +- 1){
    total += (item[i].price * item[i].quantity);
}

console.log(total);
 document.body.insertAdjacentHTML(`afterbegin`, );
    document.getElementById(`shopping`).insertAdjacentHTML(`afterbegin`, `<p>${ornaments.price}</p>`);
    // document.getElementById(`shopping`).insertAdjacentHTML(`afterbegin`, `<img src="${ornaments.imageUrl}" alt="no picture fo you!">`);
    document.getElementById(`shopping`).insertAdjacentHTML(`afterbegin`,`<p>${ornaments.description}</p>`);
    document.getElementById(`shopping`).insertAdjacentHTML(`beforebegin`, `<button>Add to Cart</button>`);

addToCart(document.body.item);

// function removeFromCart(){

// }

// document.getElementById(`removeFromCart`).addEventListener(`click`, removeFromCart)
// let shop = document.getElementsByClassName(`buy`);


