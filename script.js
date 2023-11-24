// Array to store items in the cart
let cart = [];

function addToCart(itemName, itemPrice, buttonId) {
    const item = { name: itemName, price: itemPrice };
    cart.push(item);

    // Update the cart display
    displayCart();

    // Change the color of the clicked button
    document.getElementById(buttonId).style.backgroundColor = 'black'; // Change to your desired color
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Clear the previous content
    cartItems.innerHTML = '';

    // Display each item in the cart
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(listItem);
    });

    // Calculate and display the total price
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent = total.toFixed(2);
}

function redirectToWhatsApp() {
    const message = `Order Summary:${cart.map(item => `${item.name} - ₹${item.price}`).join('%0A')}%0ATotal: ₹${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}`;

    // Replace '1234567890' with the actual phone number you want to send the message to
    const phoneNumber = '9389239324';

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open a new window or tab to redirect to WhatsApp
    window.open(whatsappLink, '_blank');
}

// Example of how to call redirectToWhatsApp on button click
document.getElementById('checkout-button').addEventListener('click', redirectToWhatsApp);
