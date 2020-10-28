const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const base = `${__dirname}/public`;
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();
const validator = require('validator');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-RequestedWith, Content-Type, Accept");
    next();
});


app.listen(port, () => console.log(`Server runing on port ${port}`));

app.get('/', function (req, res) {
    res.sendFile(`${base}/index.html`);
});

app.post('/send', (req, res) => {
    if (!validator.isEmail(req.body.email.toString())) {
        return res.status(406).send({
            success: false,
            message: "Please enter a valid Email Address."
        });
    }

    const output = `
    <p>You have a Email</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.fname}  ${req.body.lname}</li>      
      <li>Email: ${req.body.email}</li>      
    </ul>
    <h3>Subject</h3>
    <p>${req.body.subject}</p>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: `<${process.env.EMAIL}>`, // sender address
        to: 'zacbrydon@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('contact', { msg: 'Email has been sent' });
    });
    return res.status(200).send({
        success: true
    })
});
