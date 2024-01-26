// cart.js

// Sample cart items (replace with your actual cart data)
//The cart data should be a List of Products with the all the items required.
const cartItems = [
    { name: 'Product 1', price: 19.99 },
    { name: 'Product 2', price: 24.99 },
    // Add more items as needed
    //This array should be populated from the product class
];

const cartContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let total = 0;

// Function to display cart items
function displayCartItems() {
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
        `;
        cartContainer.appendChild(cartItem);
        total += item.price;
    });
}

// Function to update the total cost
function updateCartTotal() {
    cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
}

// Function that adds two numbers


// Call functions to display cart items and update total
displayCartItems();
updateCartTotal();

