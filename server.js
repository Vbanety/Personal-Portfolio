
const express = require('express');
const app = express();

const sendMail = require('./public/js/mail.js')

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.use(express.static('public'));
app.use(express.static('files'));

// app.use('/static', express.static('public'));
// Middlewave
app.use(express.static('public'))
app.use(express.json())


//part two
// Data parsing
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json());

app.post('/', (req, res) => {
    //TODO:
    // Send email here
    const { subject, email, text } = req.body;
    console.log('Data: ', req.body )

    sendMail(email, subject, text, function(err, data) {
        if(err) {
            res.status(500).json({message: 'Internal error'});
        } else {
            res.json({message: 'Email sent!!'});
        }
    });
    // res.json({message: 'Message received!!!'})
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})