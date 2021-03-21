const nodemailer = require('nodemailer')
const host = process.env.PORT || 'https://localhost:3010/'
const user = process.env.NM_USER

const transport = nodemailer.createTransport(
    {   
        service:'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: user,
            pass: process.env.NM_PASS
        }
    }
)

module.exports.sendValidationEmail = ({ id, email, activationToken, name }) => {
    transport.sendMail({
        to: email,
        from: 'Nudo Team',
        subject: 'Activa tu cuenta en un sencillo paso',
        html: ` 
        <!doctype html>
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
            <title>
            Say hello to card
            </title>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css">
            #outlook a { padding:0; }
            body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
            table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
            img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
            p { display:block;margin:13px 0; }
            </style>
        <style type="text/css">
        @media only screen and (min-width:480px) {
            .mj-column-per-100 { width:100% !important; max-width: 100%; }
    .mj-column-per-35 { width:35% !important; max-width: 35%; }
    .mj-column-per-65 { width:65% !important; max-width: 65%; }
    .mj-column-per-80 { width:80% !important; max-width: 80%; }
        }
        </style>
            <style type="text/css">
        @media only screen and (max-width:480px) {
        table.mj-full-width-mobile { width: 100% !important; }
        td.mj-full-width-mobile { width: auto !important; }
        }
            </style>
        </head>
        <body style="background-color:#F2F2F2;">
            
            
        <div
            style="background-color:#F2F2F2;"
        >
        <div  style="margin:0px auto;max-width:600px;">
            
            <table
            align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
            >
            <tbody>
                <tr>
                <td
                    style="direction:ltr;font-size:0px;padding:10px 0 20px 0;text-align:center;"
                >
        <div
            class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
        >
            
        <table
            border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
        >
            
        </table>
        
        </div>
                </td>
                </tr>
            </tbody>
            </table>
            
        </div>
        <div  style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
            
            <table
            align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;"
            >
            <tbody>
                <tr>
                <td
                    style="direction:ltr;font-size:0px;padding:20px 20px 0 20px;text-align:center;"
                >
        <div
            class="mj-column-per-35 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
        >
            
        <table
            border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
        >
            
        </table>
        
        </div>

        <div
            class="mj-column-per-65 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
        >
            
        <table
            border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
        >
            
        </table>
        
        </div>
        
                </td>
                </tr>
            </tbody>
            </table>
            
        </div>    
        <div  style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
            
            <table
            align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;"
            >
            <tbody>
                <tr>
                <td
                    style="direction:ltr;font-size:0px;padding:20px 20px 0 20px;text-align:center;"
                >
        <div
            class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
        >
            
        <table
            border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
        >
            
                <tr>
                <td
                    align="center" style="font-size:0px;padding:0px;word-break:break-word;"
                >
                    
        <table
            border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
        >
            <tbody>
            <tr>
                <td  style="width:300px;">
                
        <img
            alt="" height="auto" src="https://res.cloudinary.com/difhe4gl3/image/upload/v1604403330/NUDO/Email%20Images/NudoLogoNodemailer_pdhvyd.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="300"
        />
        
                </td>
            </tr>
            </tbody>
        </table>
        
                </td>
                </tr>
            
        </table>
        
        </div>
    
                </td>
                </tr>
            </tbody>
            </table>
            
        </div>

        <div  style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
            
            <table
            align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;"
            >
            <tbody>
                <tr>
                <td
                    style="direction:ltr;font-size:0px;padding:10px 20px;text-align:center;"
                >

        <div
            class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
        >
            
        <table
            border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
        >
            
                <tr>
                <td
                    style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                    
        <p
            style="border-top:solid 3px #9B9B9B;font-size:1px;margin:0px auto;width:30px;"
        >
        </p>
                </td>
                </tr>
            
        </table>
        
        </div>
                </td>
                </tr>
            </tbody>
            </table>
            
        </div>

        <div  style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
            
            <table
            align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;"
            >
            <tbody>
                <tr>
                <td
                    style="direction:ltr;font-size:0px;padding:0 20px 20px 20px;text-align:center;"
                >
        <div
            class="mj-column-per-80 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
        >
            
        <table
            border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
        >
            
                <tr>
                <td
                    align="center" style="font-size:0px;padding:0px;padding-top:10px;word-break:break-word;"
                >
                    
        <div
            style="font-family:Montserrat, Helvetica, Arial, sans-serif;font-size:16px;font-weight:500;line-height:24px;text-align:center;color:#000000;"
        >Siente, Mira, Escucha, Recuerda</div>
        
                </td>
                </tr>
            
        </table>
        </div>
                </td>
                </tr>
            </tbody>
            </table>
            
        </div>
        <div  style="background:url(https://kaikusinlactosa.com/blog/wp-content/uploads/2018/09/kaiku-sin-lactosa-ideas-para-fotos-editar-fotos-aplicaciones-1024x756.jpeg) top center / cover no-repeat;margin:0px auto;max-width:600px;">
            <div  style="line-height:0;font-size:0;">
            <table
            align="center" background="https://kaikusinlactosa.com/blog/wp-content/uploads/2018/09/kaiku-sin-lactosa-ideas-para-fotos-editar-fotos-aplicaciones-1024x756.jpeg" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:url(https://kaikusinlactosa.com/blog/wp-content/uploads/2018/09/kaiku-sin-lactosa-ideas-para-fotos-editar-fotos-aplicaciones-1024x756.jpeg) top center / cover no-repeat;width:100%;"
            >
            <tbody>
                <tr>
                <td
                    style="direction:ltr;font-size:0px;padding:0px;text-align:center;"
                >        
        <div
            class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
        >
            
        <table
            border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
        >
            
                <tr>
                <td
                    align="center" style="font-size:0px;padding:0px;word-break:break-word;"
                >
                    
        <table
            border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
        >
            <tbody>
            <tr>
                <td  style="width:600px;">
                
        <img
            alt="" height="auto" src="http://nimus.de/share/tpl-card/lineshadow.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="600"
        />
        
                </td>
            </tr>
            </tbody>
        </table>
        
                </td>
                </tr>
            
                <tr>
                <td
                    align="center" style="font-size:0px;padding:50px 40px 0 40px;word-break:break-word;"
                >
                    
        <div
            style="font-family:Montserrat, Helvetica, Arial, sans-serif;font-size:16px;font-weight:300;line-height:24px;text-align:center;color:#000000;"
        >Hola ${name}! Accede a este enlace y activa tu cuenta para empezar a disfrutar de Nudo. Bienvenid@!</div>
        
                </td>
                </tr>
            
                <tr>
                <td
                    align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;padding-top:20;padding-bottom:100px;word-break:break-word;"
                >
                    
        <table
            border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"
        >
            <tr>
            <td
                align="center" bgcolor="#839672" role="presentation" style="border:none;border-radius:2px;cursor:auto;mso-padding-alt:15px 30px;background:#839672;" valign="middle"
            >
                <a
                href="https://ironnudo.herokuapp.com/user/${id}/activate/${activationToken}" style="display:inline-block;background:#839672;color:#FFFFFF;font-family:Montserrat, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:15px 30px;mso-padding-alt:0px;border-radius:2px;" target="_blank"
                >
                Activa tu cuenta en NUDO
                </a>
            </td>
            </tr>
        </table>
        
                </td>
                </tr>
            
        </table>
        
        </div>
                </td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>    
        <div  style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
            
            <table
            align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;"
            >
            <tbody>
                <tr>
                <td
                    style="direction:ltr;font-size:0px;padding:50px 0 0 0;text-align:center;"
                >
        <div
            class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
        >
            
        <table
            border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
        >
            
                <tr>
                <td
                    align="center" style="font-size:0px;padding:0px;word-break:break-word;"
                >
                    
        <table
            border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
        >
            <tbody>
            <tr>
                <td  style="width:600px;">
                
        <img
            alt="bottom border" height="auto" src="http://nimus.de/share/tpl-card/bottom.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="600"
        />
        
                </td>
            </tr>
            </tbody>
        </table>
        
                </td>
                </tr>
            
        </table>
        
        </div>
                </td>
                </tr>
            </tbody>
            </table>
            
        </div>

        <div  style="margin:0px auto;max-width:600px;">
            
            <table
            align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
            >
            <tbody>
                <tr>
                <td
                    style="direction:ltr;font-size:0px;padding:10px 0 20px 0;text-align:center;"
                >

                </td>
                </tr>
            </tbody>
            </table>
            
        </div>
        </div>
        
        </body>
    </html>`
    })
        .then(console.log)
        .catch(console.error)
}