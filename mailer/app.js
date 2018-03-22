
var nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing


    var sender = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'differaakash@gmail.com', // generated ethereal user
            pass: 'shrutiismine' // generated ethereal password
        }
    });
    //console.log("1");
    // setup email data with unicode symbols
    var mailOptions = {
        from: 'differaakash@gmail.com', // sender address
        to: 'differaakash@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body

    };

    // send mail with defined transport object
    sender.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent');

    });
