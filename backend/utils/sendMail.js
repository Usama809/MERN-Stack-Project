const nodemailer = require("nodemailer");

const sendMail = async (options) =>{
   console.log();

    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        // host : process.env.SMP_HOST,
        port : 465,
       // port : process.env.SMP_PORT,
       service : "gmail",
        auth:{
            user: "mohammadosama6666@gmail.com",
            //user : process.env.SMP_MAIL,
            pass : "ersrrrocakwmsnrm",
           // pass : process.env.SMP_PASSWORD,
        
        },
    });

    const mailOptions = {
        from : process.env.SMP_MAIL,
        to : options.email,
        subject : options.subject,
        text : options.message,
    };
    await transporter.sendMail(mailOptions);
}

module.exports = sendMail;
