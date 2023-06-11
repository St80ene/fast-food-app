/**Adding items to cart */
/**creating and updating cart items */
const loadCart = (cart, foodItem) => {
  let cartItems = '';
  let total = 0;
  for (let i = 0; i < cart.items.length; i++) {
    let subTotal =
      foodItem[cart.items[i].foodId].price * cart.items[i].quantity;
    total = subTotal + total;
    const cartItem = ` <div class="cart-add d-flex justify-content-between my-3">
    <div id="cover-wrapper">
      <div id="image-wrapper" onclick="removeFromCart(${cart.items[i].foodId})">
        <div id="order_cancel">X</div>
      </div>
      <img
        src="${foodItem[cart.items[i].foodId].image}"
        id="second-burger"
        alt=""
        srcset=""
      />
    </div>
    <div class="d-flex icon">
      <img
        class="icons"
        src="/assets/img/minus.svg"
        alt=""
        srcset=""
        onclick="updateCart('-', ${i})"
      />
      <p>${cart.items[i].quantity}</p>
      <img
        class="icons"
        src="/assets/img/add.svg"
        alt=""
        srcset=""
        onclick="updateCart('+', ${i})"
      />
    </div>
    <p>₦ ${subTotal.toFixed(2)}</p>
  </div>`;
    cartItems += cartItem;
  }
  document.getElementById('cart-holder').innerHTML = cartItems;
  document.getElementById('t-price').innerHTML = total;
};

const removeFromCart = (cart, foodId) => {
  const itemIndex = cart.items.findIndex(
    (item) => item.foodId === foodId
  ); /**finding index of the cart item id */
  cart.items.splice(itemIndex, 1);
  // switch (findItemIndex >= 1) {
  //   case id:
  //     cart.items.splice(0);
  //     break;
  // }
  loadCart();
};

const addToCart = (cart, id) => {
  const itemIndex = cart.items.findIndex(
    (item) => item.foodId === id
  ); /**getting index of the required food id */
  if (itemIndex >= 0) {
    cart.items[itemIndex].quantity += 1; /**adding items */
  } else {
    cart.items.push({
      foodId: id,
      quantity: 1,
    }); /**checking and adding new items */
  }
  loadCart();
};

/**updating carts using operators */
const updateCart = (cart, op, id) => {
  // if (op === "+") {
  //   cart.items[id].quantity += 1;
  // } else {
  //   cart.items[id].quantity -= 1;
  // }

  switch (op) {
    case '+':
      cart.items[id].quantity += 1;
      break;

    case '-':
      if (cart.items[id].quantity >= 2) {
        cart.items[id].quantity -= 1;
      }
      break;

    default:
      break;
  }

  loadCart();
};
