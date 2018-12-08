const express = require('express');
const router = express.Router();
const nodemailer= require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact',
   { title: 'Contact' });
});

// post request
router.post('/send', (req,res,next)=>{
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'iamthecristos@gmail.com',
          pass: '1stclass'
        }
      });
      let name= req.body.name;
      let email= req.body.email;
      let message= req.body.message
      console.log(name+email+message)
      let mailOptions = {
        from: 'iamthecristos@gmail.com',
        to: 'nmereginivincent@gmail.com',
        subject: 'Hello from Cristus Technologies',
        text: `you have a submission from name:${name} email:${email} message:${message} `,
        html: `<p>you have a submission from <ul><li>name:${name} </li><li>email:${email} </li><li>message:${message} </li></ul>`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
        res.redirect('/')
      });
        
     
})

module.exports = router;
