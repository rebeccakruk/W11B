let cartItemsJson = Cookies.get(`addedToCart`);
let cartItems // placeholder. It won't work if I don't have this here

// if cart is 'not' empty, it will parse the string from the previous 'home' page
if (cartItemsJson !== undefined) {
    cartItems = JSON.parse(cartItemsJson);
}

function removeFromCart(item, index) {
    console.log(`index`, index);
    cartItems.splice(index, 1); // 2nd parameter means remove one item at a time
    // the string is required here so all the information is included in the shopping cart
    let cartJson = JSON.stringify(cartItems);
    Cookies.set(`addedToCart`, cartJson);
    console.log(cartJson);
}
// the js has html built into it here, instead coded on the html page
// map is working like a for loop, with the instructions following (ie. insert HTML)
if (cartItems && cartItems.length !== 0) {
    cartItems.map((item, index) => {
        document.getElementById(`cart`).insertAdjacentHTML(
            `afterbegin`,
            `<div id=${item.id}>
        <h2>${item.description}</h2>
        <img src=${item.imageUrl} alt=${item.description}>
        <p class="price">${item.price}</p>
        <button onClick='removeFromCart(${JSON.stringify(item, index)})'>Remove From Cart</button>
    </div>
    `
        );
    });
} else {
    document.getElementById(`cart`).insertAdjacentHTML(
    `afterbegin`,
    `<h2>There are no items in the cart</h2>`)
}
