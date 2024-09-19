const userRegistrationemailTemplate = (email: string, password: string) => ({
  to: email,
  from: 'hey@philiprurka.com',
  subject: 'Welcome to the Unity Compendium',
  html: `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Unity's Compendium</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            font-size: 34px;
            color: #333333;
          }
          .subtitle {

          }
          p {
            font-size: 16px;
            color: #666666;
            line-height: 1.6;
          }
          .password-container {

          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            font-size: 16px;
            color: #ffffff !important;
            background-color: #007BFF;
            text-decoration: none;
            border-radius: 5px;
          }
          .button:hover {
            background-color: #0056b3;
          }
          .password-label {
            display: inline;
          }
          .password {
            display: inline;
            font-weight: bold;
            color: #333333;
            padding: 10px;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to Unity's Compendium!</h1>
          <p class="subtitle">Thank you for taking the time to explore this evolving collection of lore and stories.</p>
          <p>Please note that this compendium is a work in progress. Much of the content is being transferred and rewritten from another platform, and I am diligently working to bring everything here. If you find yourself eager to dive deeper and some information isn't available yet, feel free to reach out to me. I'll either prioritize updating that section or share the details directly with you.</p>
          <p>I kindly ask that you keep these documents confidential. They are meant for you and a select few. The compendium will be made public at a later date.</p>
          <div class="password-container">
            <p>An account has already been created for you with this email address.</p>
            <p class="password-label">This is your password to log in:</p>
            <p class="password">${password}</p>
          </div>
          <a href='https://unitystory.info' class="button">Are you ready?</a>
        </div>
      </body>
      </html>
    `,
});

export default userRegistrationemailTemplate;
