
var express = require('express');
var app = express();

const nodemailer = require('nodemailer');

app.use(express.static('public'));
app.use(express.static('files'));

// app.use('/static', express.static('public'));
// Middlewave
app.use(express.static('public'))
app.use(express.json())


app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})

app.post('/', (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'batistavesuporte@gmail.com',
            pass: '000000@1'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'batistavesuporte@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error')
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})