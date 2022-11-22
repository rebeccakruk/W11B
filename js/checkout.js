let cartItemsJson = Cookies.get(`addedToCart`);
let cartItems = JSON.parse(cartItemsJson);

function removeFromCart(item, index) {
    console.log(`index`, index);
    cartItems.splice(index, 1); // 2nd parameter means remove one item only
    let cartJson = JSON.stringify(cartItems);
    Cookies.set(`addedToCart`, cartJson);
    console.log(cartJson);
}

if (cartItems.length !== 0) {
    cartItems.map((item, index) => {
        document.getElementById(`cart`).insertAdjacentHTML(
            `afterbegin`,
            `<div id=${item.id}>
        <h2>${item.description}</h2>
        <img src=${item.imageUrl} alt=${item.description}>
        <p class="price">${item.price}</p>
        <button onClick='removeFromCart(${JSON.stringify(item, index)})'>remove From Cart</button>
    </div>
    `
        );
    });
} else {
          document.getElementById(`cart`).insertAdjacentHTML(
            `afterbegin`,
        `<h2>There are no items in the cart</h2>`)
          }
          console.log(`cartItemsJson`, cartItemsJson);


// // Cookies.get(addedToCart);

// let total = 0;
// // addToCart(ornaments, ornaments)

// for(let i = 0; i < item.length; i +- 1){
//     total += (item[i].price * item[i].quantity);
// }

// console.log(total);
//  document.body.insertAdjacentHTML(`afterbegin`, );
//     document.getElementById(`shopping`).insertAdjacentHTML(`afterbegin`, `<p>${ornaments.price}</p>`);
//     // document.getElementById(`shopping`).insertAdjacentHTML(`afterbegin`, `<img src="${ornaments.imageUrl}" alt="no picture fo you!">`);
//     document.getElementById(`shopping`).insertAdjacentHTML(`afterbegin`,`<p>${ornaments.description}</p>`);
//     document.getElementById(`shopping`).insertAdjacentHTML(`beforebegin`, `<button>Add to Cart</button>`);

// addToCart(document.body.item);

// function removeFromCart(){

// }

// document.getElementById(`removeFromCart`).addEventListener(`click`, removeFromCart)
// let shop = document.getElementsByClassName(`buy`);
