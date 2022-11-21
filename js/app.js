let itemsArray = [
    {
        id: 1,
        imageUrl: "https://cb.scene7.com/is/image/Crate/GoldWhiteOpticBallOrnSSF22?$web_pdp_main_carousel_thumb_med$", 
        description: `White and Gold Optic Ball Ornament`, 
        price: 5.0
    },
    {
        id: 2,
        imageUrl: `https://cb.scene7.com/is/image/Crate/GoldenFeatherOrnamentSSF22?$web_pdp_main_carousel_thumb_med$`,
        description: `Gold Feather Ornament`,
        price: 9.0,
    },
    {
        id: 3,
        imageUrl: `https://cb.scene7.com/is/image/Crate/GoldenFeatherOrnamentSSF22?$web_pdp_main_carousel_thumb_med$`,
        description: `Gold Feather Ornament`,
        price: 6.0,
    },
    {
        id: 4,
        imageUrl: `https://cb.scene7.com/is/image/Crate/GoldenFeatherOrnamentSSF22?$web_pdp_main_carousel_thumb_med$`,
        description: `Gold Feather Ornament`,
        price: 8.0,
    },
    {
        id: 5,
        imageUrl: `https://cb.scene7.com/is/image/Crate/GoldenFeatherOrnamentSSF22?$web_pdp_main_carousel_thumb_med$`,
        description: `Gold Feather Ornament`,
        price: 7.0,
    },
    {
        id: 6,
        imageUrl: `https://cb.scene7.com/is/image/Crate/NordicGnomeSSF20?$web_pdp_main_carousel_thumb_med$`,
        description: `Gold Feather Ornament`,
        price: 10.0,
    },
];
console.log(itemsArray);

itemsArray.map((item) => {
    document.getElementById(`items`).insertAdjacentHTML(`afterbegin`, 
    `<div id=${item.id}>
        <h2>${item.description}</h2>
        <img src=${item.imageUrl} alt=${item.description}>
        <p class="price">${item.price}</p>
        <button onClick="addToCart(${item})">Add To Cart</button>
    </div>
    `);
})

// let cart = [];

function addToCart(){
// cart.push(item);
console.log(`clicked`);
}

// // Cookies.set(`AddedToCart`)
// items = {};
// function appendNode(parent, element){
//     parent.appendChild(element);
// };

// function addToCart(action){
//     let container = '';
//     if(action == "add") {
//         container = getDiv("items");
//         takeAction(container)
//     } else if (action == "remove") {
//         container = getDiv("cart");
//         takeAction(container);

// function takeAction(container, action) {
//     container.addEventListener(`click`, function(event){
//         let itemId = event.target.id;
//         if(itemId !== "items" && itemId !== "badge"){
//             let item = items.filter(function(item){
//                 return item.id == item.id;
//             })[0];
//             let itemInCart = cart.filter(function (item){
//                 return item.id == itemId;
//             })[0];
//             if (itemInCart == undefined){
//                 cart.push(item);
//             } else if (action == "add"){
//                 itemInCart.count++;
//             } else if (action == "remove"){
//                 itemInCart.count--;
//             }
//             console.log(cart);
//             displayItems(cart, "cart");
//         };
//     });
// };
// }
// }

// addToCart('add');
// addToCart(`remove`);
// function addToCart(event) {


//// this took five hours to just restart and copy the example in class because that's all I seem to be able to get working. Google does not help.


// let clicks = document.querySelectorAll("shopping");
// for (let i=0; i<clicks.length; i++){
//     clicks[i].addEventListener(`click`, addToCart)
// }

// Cookies.set(`items`,item[0])


// displayItems(itemsArray, "items");
// let div = document.querySelector(`div`);
// div.addEventListener(`click`, addToCart);
// // console.log(document.querySelector(`div`));

// let cart = JSON.stringify(`items`);
// Cookies.set(`items`, cart);
// // console.log(ornament);

// // Cookies.get(addToCart);
// // console.log(addToCart);
// // let addedToCart = Cookies.get(`addedToCart`)
// // document.querySelector(`div`).addEventListener(`click`, addToCart);

// let options = document.getElementById(`shopping`);
// for (let key in items){
//     options.insertAdjacentHTML(`afterbegin`, `<p>${items.description}</p>`);
//     options.insertAdjacentHTML(`afterbegin`, `<p>${items.price}</p>`);
//     options.insertAdjacentHTML(`afterend`, `<button>Add to Cart</button>`);
//     options.insertAdjacentHTML(`afterbegin`, `<img src="${items.imageUrl}" alt="no picture fo you!">`);
// console.log(`key:`, key);
// }

// document.getElementById(`buy`).insertAdjacentHTML(`beforeend`, `<button>Add to Cart</button>`);

// let choices = [];
// options.querySelector(`button`).addEventListener(`click`, addToCart);

// addToCart(items, items[0]);
// addToCart(items, items[1]);
// addToCart(items, items[2]);
// addToCart(items, items[3]);
// console.log(`hello`);
