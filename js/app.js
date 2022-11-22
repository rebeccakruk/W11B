let itemsArray = [
    {
        id: 1,
        imageUrl: "https://cb.scene7.com/is/image/Crate/GoldWhiteOpticBallOrnSSF22?$web_pdp_main_carousel_thumb_med$", 
        description: `White and Gold Optic Ball Ornament`, 
        price: 5.0
    },
    {
        id: 2,
        imageUrl: `https://cb.scene7.com/is/image/Crate/BoiledWoolOrnHolidaySlothSSF22?$web_pdp_main_carousel_thumb_med$`,
        description: `Holiday Sloth Ornament`,
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
        imageUrl: `https://cb.scene7.com/is/image/Crate/SnowmanSnowglobeSSF20?$web_pdp_main_carousel_thumb_med$`,
        description: `Snowman Tree Ornament`,
        price: 8.0,
    },
    {
        id: 5,
        imageUrl: `https://cb.scene7.com/is/image/Crate/GlitterStarOrnamentsFSSF22/$web_pdp_main_carousel_med$/220727124059/glitter-star-ornaments.jpg`,
        description: `Three Stars Ornaments, set of 3`,
        price: 12.0,
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
    document.getElementById(`items`).insertAdjacentHTML(
      `afterbegin`,
      `<div id=${item.id}>
        <h2>${item.description}</h2>
        <img src=${item.imageUrl} alt=${item.description}>
        <p class="price">${item.price}</p>
        <button onClick='addToCart(${JSON.stringify(item)})'>Add To Cart</button>
    </div>
    `
    );
})

let cart = [];


function addToCart(item){
    cart.push(item);
    console.log(cart);
    let cartJson = JSON.stringify(cart);
    Cookies.set(`addedToCart`, cartJson);
}

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


