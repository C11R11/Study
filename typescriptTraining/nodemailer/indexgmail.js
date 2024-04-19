const nodemailer = require('nodemailer');

const report = `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #f1f1f1;margin: 0 auto !important;padding: 0 !important;height: 100% !important;width: 100% !important;">
<head style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <meta charset="utf-8" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- utf-8 works for most cases -->
    <meta name="viewport" content="width=device-width" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name="x-apple-disable-message-reformatting" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <title style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"></title> <!-- The title tag shows in email notifications, like Android 4.4. -->


    

    <!-- CSS Reset : BEGIN -->


    <!-- CSS Reset : END -->

    <!-- Progressive Enhancements : BEGIN -->



</head>

<body width="100%" style="margin: 0 auto !important;padding: 0 !important;mso-line-height-rule: exactly;background-color: #222222;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #f1f1f1;font-family: 'Montserrat', sans-serif;font-weight: 400;font-size: 15px;line-height: 1.8;color: rgba(0,0,0,.4);height: 100% !important;width: 100% !important;">
	<center style="width: 100%;background-color: #f1f1f1;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <div style="display: none;font-size: 1px;max-height: 0px;max-width: 0px;opacity: 0;overflow: hidden;mso-hide: all;font-family: sans-serif;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
      &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>
    <div style="max-width: 600px;margin: 0 auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="email-container">
    	<!-- BEGIN BODY -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
      	<tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
          <td class="bg_white logo" style="padding: 1em 2.5em;text-align: center;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #ffffff;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
            <h1 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Playfair Display', serif;color: #000000;margin-top: 0;margin: 0;"><a href="#" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;color: #000;font-size: 20px;font-weight: 700;text-transform: uppercase;font-family: 'Montserrat', sans-serif;">MCF Vulcan Connect Monior</a></h1>
          </td>
	      </tr><!-- end tr -->
				<tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
          <td valign="middle" class="hero" style="background: rgb(0,0,0,0.6);height: 400px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;position: relative;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
            <table style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;">
            	<tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
            		<td style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
            			<div class="text" style="padding: 0 3em;text-align: center;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: rgba(255,255,255,.8);">
            				<h2 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Playfair Display', serif;color: #ffffff;margin-top: 0;font-size: 30px;margin-bottom: 0;">Service: MCF SGS</h2>
            				<p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            				<p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><a href="#" class="btn btn-primary" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;color: #ffffff;padding: 10px 15px;border-radius: 30px;background: #f3a333;">Get Your Order Here!</a></p>
            			</div>
            		</td>
            	</tr>
            </table>
          </td>
	      </tr><!-- end tr -->
	      <!-- <tr>
		      <td class="bg_white">
		        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
		          <tr>
		            <td class="bg_dark email-section" style="text-align:center;">
		            	<div class="heading-section heading-section-white">
		            		<span class="subheading">Welcome</span>
		              	<h2>Welcome To RestoBar</h2>
		              	<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		            	</div>
		            </td>
		          </tr>end: tr -->
      <!-- 1 Column Text + Button : END -->
      </table>
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
      
        <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
        	<td valign="middle" class="bg_black footer email-section" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #000000;padding: 2.5em;color: rgba(255,255,255,.5);mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
        		<table style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;">
            	<tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <td valign="top" width="33.333%" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;">
                    <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                      <td style="text-align: left;padding-right: 10px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                      	<p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">&copy; Maptek Vulcan Services</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
        	</td>
        </tr>
      </table>

    </div>
  </center>
</body>
</html>
`

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cristianrodriguezcanto@gmail.com',
    pass: 'obkelslljnekjqhw' // naturally, replace both with your real credentials or an application-specific password
  }
});

const mailOptions = {
  //from: 'supermanager@woah.com',
  to: 'cristian.rodriguez@maptek.cl',
  subject: 'ALERT!!!',
  text: 'Hello from here.',
  html: report
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});