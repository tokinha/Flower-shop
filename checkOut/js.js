
  function submitPayment() {
    // Get customer information
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Get payment details
    const cardNumber = document.getElementById('card-number').value;
    const expirationDate = document.getElementById('expiration-date').value;
    const cvv = document.getElementById('cvv').value;

    // Check if any required field is empty
    if (!name || !email || !cardNumber || !expirationDate || !cvv) {
      alert('Please fill in all required fields before submitting the payment.');
      return;
    }

    // Example: Display order details in the console
    const orderTotal = document.getElementById('order-total').innerText;
    const orderItems = document.getElementById('order-items').innerText;

    console.log('Customer Information:');
    console.log('Name:', name);
    console.log('Email:', email);

    console.log('Payment Details:');
    console.log('Card Number:', cardNumber);
    console.log('Expiration Date:', expirationDate);
    console.log('CVV:', cvv);

    console.log('Order Details:');
    console.log(orderTotal);
    console.log(orderItems);

    // Implement your payment processing logic here (e.g., integrate with a payment gateway)

    alert('Payment submitted successfully!');
  }
