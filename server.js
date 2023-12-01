const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const index = path.join(__dirname, 'index.html');

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(index);
});

app.post('/your_booking_script', (req, res) => {
    
    const name = req.body.name;
    const email = req.body.email;
    const checkin = req.body.checkin;
    const checkout = req.body.checkout;
    const roomType = req.body['room-type'];
    const specialRequests = req.body['special-requests'];
    const customerName = req.body['customer-name'];
    const customerEmail = req.body['customer-email'];
    const customerAddress = req.body['customer-address'];
  
    const cardNumber = req.body['card-number'];
    const expiryDate = req.body['expiry-date'];
    const cvv = req.body.cvv;
    
    const bookingDetails = {
        name,
        email,
        checkin,
        checkout,
        roomType,
        specialRequests,
        customerName,
        customerEmail,
        customerAddress,
        cardNumber,
        expiryDate,
        cvv,
        
    };

    
    res.end(`Booking details received: \n${JSON.stringify(bookingDetails, null, 2)}`);
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});