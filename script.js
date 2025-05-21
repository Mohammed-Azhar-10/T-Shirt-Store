function order(tshirtName, price, quantityId) {
    const quantity = document.getElementById(quantityId).value;
    
    if (quantity <= 0) {
        alert('Please enter a valid quantity.');
        return;
    }

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;

    if (!name || !address || !email) {
        alert('Please fill in all contact fields.');
        return;
    }

    const orderDetails = `
        Order Summary:
        Name: ${name}
        Address: ${address}
        Email: ${email}
        T-Shirt: ${tshirtName}
        Quantity: ${quantity}
        Total Price: $${price * quantity}
    `;

    alert(orderDetails);

    // Here you would typically send the order details to a server
    // using fetch or XMLHttpRequest.
    // Example: fetch('/api/orders', { method: 'POST', body: JSON.stringify(orderDetails) });
}
