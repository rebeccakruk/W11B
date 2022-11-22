function addToCart(item) {
    cart.push(item);
    console.log(cart);
    let cartJson = JSON.stringify(cart);
    Cookies.set(`addedToCart`, cartJson);
}

let itemsArray = [
    {
        id: 1,
        imageUrl: "https://cb.scene7.com/is/image/Crate/GoldWhiteOpticBallOrnSSF22?$web_pdp_main_carousel_thumb_med$",
        description: `White and Gold Optic Ball Ornament`,
        price: `$5.00`,
    },
    {
        id: 2,
        imageUrl: `https://cb.scene7.com/is/image/Crate/BoiledWoolOrnHolidaySlothSSF22?$web_pdp_main_carousel_thumb_med$`,
        description: `Holiday Sloth Ornament`,
        price: `$9.00`,
    },
    {
        id: 3,
        imageUrl: `https://cb.scene7.com/is/image/Crate/GoldenFeatherOrnamentSSF22?$web_pdp_main_carousel_thumb_med$`,
        description: `Gold Feather Ornament`,
        price: `$6.00`,
    },
    {
        id: 4,
        imageUrl: `https://cb.scene7.com/is/image/Crate/SnowmanSnowglobeSSF20?$web_pdp_main_carousel_thumb_med$`,
        description: `Snowman Tree Ornament`,
        price: `$8.00`,
    },
    {
        id: 5,
        imageUrl: `https://cb.scene7.com/is/image/Crate/GlitterStarOrnamentsFSSF22/$web_pdp_main_carousel_med$/220727124059/glitter-star-ornaments.jpg`,
        description: `Three Stars Ornaments, set of 3`,
        price: `$12.00`,
    },
    {
        id: 6,
        imageUrl: `https://cb.scene7.com/is/image/Crate/NordicGnomeSSF20?$web_pdp_main_carousel_thumb_med$`,
        description: `Gold Feather Ornament`,
        price: `$10.00`,
    },
];

// making the cart an array
let cart = [];

console.log(itemsArray);
itemsArray.map((item) => {
    document.getElementById(`items`).insertAdjacentHTML(
        `afterbegin`,
        `<div id=${item.id}>
        <h3>${item.description}</h3>
        <img src=${item.imageUrl} alt=${item.description}>
        <p class="price">${item.price}</p>
        <button onClick='addToCart(${JSON.stringify(item)})'>Add To Cart</button>
    </div>
    `
    );
});


