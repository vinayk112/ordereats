// Array to store items in the cart
let cart = [];

function addToCart(itemName, itemPrice, buttonId) {
  const cartCountElement = document.getElementById("cart-count");
  const currentCount = parseInt(cartCountElement.innerText, 10) || 0;
  cartCountElement.innerText = currentCount + 1;

  const item = { name: itemName, price: itemPrice };
  cart.push(item);
  // Toggle the enlarged class for button size change
  var addToCartButton = document.getElementById(buttonId);
  // Change the color of the clicked button
  document.getElementById(buttonId).style.backgroundColor = "red"; // Change to your desired color
  document.getElementById(buttonId).innerText = "Added"; // Change to your desired color

  setTimeout(function () {
    // addToCartButton.classList.add("revert");

    setTimeout(function () {
      addToCartButton.classList.remove("revert");
      document.getElementById(buttonId).style.backgroundColor = "green";
      document.getElementById(buttonId).innerText = "Add to Cart"; // Change to your desired color
    }, 250);
  }, 250);

  // Update the cart display
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  // Clear the previous content
  cartItems.innerHTML = "";

  // Display each item in the cart
  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(listItem);
  });

  // Calculate and display the total price
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  totalElement.textContent = total.toFixed(2);
}

function redirectToWhatsApp() {
  // Step 1: Construct the order summary message
  const orderSummary = cart
    .map((item) => `${item.name} - ₹${item.price}`)
    .join("\n");

  // Step 2: Calculate the total price
  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  // Step 3: Create the complete message with order summary and total
  const message = `

Order Summary: 
-x-x-x-x--x-x-x-x-x

${orderSummary}

-x-x-x-x-x-x-x-x--x

Total: ₹${total}

with ❤️ created by OrderEats
`;

  // Step 4: Replace '7457813101' with the actual phone number
  const phoneNumber = "7457813101";

  // Step 5: Create the WhatsApp link with the message and phone number
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Step 6: Open a new window or tab to redirect to WhatsApp
  window.open(whatsappLink, "_blank");
}

// Example of how to call redirectToWhatsApp on button click
document
  .getElementById("checkout-button")
  .addEventListener("click", redirectToWhatsApp);
