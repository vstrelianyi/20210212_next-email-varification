const nodemailer = require( 'nodemailer' );

exports.sendConfirmationEmail = function ( { toUser, hash, } ) {
  return new Promise( ( res, rej ) => {

    const transporter = nodemailer.createTransport( {
      service: 'gmail',
      auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASSWORD,
      },
    } );

    const message = {
      from: process.env.GOOGLE_USER,
      // to: toUser.email, // production
      to: process.env.GOOGLE_USER,
      subject: 'Your App - Activate Account',
      html: `
				<h3>Hello ${ toUser.username }</h3>
				<p>Thank you for registering in our app. Just one more step...</p>
				<p>To activate your account please follow this link <a target="_" href="${ process.env.DOMAIN }/api/activate/user/${ hash }">Activate Link</a></p>
				<p>Cheers,</p>
				<p>Your application team</p>
			`,
    };

    transporter.sendMail( message, function ( err, info ) {
      if ( err ){
        rej( err );
      }
      else {
        res( info );
      }
    } );

  } );

};
