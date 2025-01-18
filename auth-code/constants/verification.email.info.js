const subject = "Verify Your Email Address";

const verificationHTML = (verificationLink) => {
  return `<!DOCTYPE html>
    <html>
    <head>
      <title>Email Verification</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0;">
      <table align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; margin-top: 20px;">
        <tr>
          <td style="padding: 20px; text-align: center; background-color: #007bff; color: #ffffff; font-size: 24px; font-weight: bold;">
            Verify Your Email
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; color: #333333; font-size: 16px; line-height: 1.5;">
            <p>Dear User,</p>
            <p>Thank you for signing up! To complete your registration, please verify your email address by clicking the button below:</p>
            <p style="text-align: center; margin: 20px 0;">
              <a href=${verificationLink} style="background-color: #007bff; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 4px; display: inline-block; font-weight: bold;">Verify Email</a>
            </p>
            <p>If the button doesn't work, copy and paste the following link into your browser:</p>
            <p style="word-break: break-word; color: #007bff;">${verificationLink}</p>
            <p>If you did not sign up, you can safely ignore this email.</p>
            <p>Best regards,<br>Uzair Rehan</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; text-align: center; background-color: #f1f1f1; color: #666666; font-size: 12px;">
            &copy; 2025 Uzair Rehan. All rights reserved.
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;
};

export { verificationHTML, subject };
