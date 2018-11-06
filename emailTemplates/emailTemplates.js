export const emailVerifyTemplate = (url, token, username) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Email Template</title>
      <style>
          body {
              padding: 0;
              margin: 0;
              font-family: "Roboto", sans-sarif;
          }
          a {
              text-decoration: none;
          }
          table,td {
              border-collapse: collapse;
              padding: 0;
          }
          .container {
              width: 100%;
              height: 100%;
              background-color: #eaeaea;
          }
          .wrapper {
              display: block;
              width: 500px;
              height: auto;
              background-color: #ffffff;
              margin: 100px auto;
              border: 2px solid #28b485;
              border-radius: 3px;
          }
          .header {
              width: 500px !important;
              height: auto !important;
              background-color: #28b485;
              color: #ffffff;
              padding: 30px;
              text-align: center;
          }
          .header-title {
              font-size: 25px;
              letter-spacing: -1px;
          }
          .verify-text {
              font-size: 20px;
              color: #28b485;
          }
          .verify-name {
              font-size: 16px;
              color: #28b485;
          }
          .verify-desc {
              font-size: 15px;
              color: #868686;
              font-weight: 400;
          }
          .verify-link {
              display: inline-block;
              padding: 10px 20px;
              background-color: #28b485;
              color: #ffffff;
              border-radius: 3px;
              margin: 20px 0 50px 0;
              font-size: 15px;
          }
      </style>
  </head>
  <body style="padding: 0;margin: 0;font-family: &quot;Roboto&quot;, sans-sarif;">
      <table class="container" style="border-collapse: collapse;padding: 0;width: 100%;height: 100%;background-color: #eaeaea;">
          <tbody>
              <tr>
                  <td class="wrapper" align="center" style="border-collapse: collapse;padding: 0;display: block;width: 500px;height: auto;background-color: #ffffff;margin: 100px auto;border: 2px solid #28b485;border-radius: 3px;">
                      <table style="border-collapse: collapse;padding: 0;">
                          <tbody>
                              <tr>
                                  <td class="header" style="border-collapse: collapse;padding: 30px;background-color: #28b485;color: #ffffff;text-align: center;width: 500px !important;height: auto !important;"><h1 class="header-title" style="font-size: 25px;letter-spacing: -1px;">CODECAFEBD</h1></td>
                              </tr>
                          </tbody>
                      </table>
                      <table style="border-collapse: collapse;padding: 0;">
                          <tbody>
                              <tr>
                                  <td align="center" style="border-collapse: collapse;padding: 0;"><h1 class="verify-text" style="font-size: 20px;color: #28b485;">Verify Email</h1></td>
                              </tr>
                              <tr>
                                  <td align="center" style="border-collapse: collapse;padding: 0;"><h1 class="verify-name" style="font-size: 16px;color: #28b485;">( Hi, ${username} )</h1></td>
                              </tr>
                              <tr>
                                  <td align="center" style="border-collapse: collapse;padding: 0;"><h4 class="verify-desc" style="font-size: 15px;color: #868686;font-weight: 400;">Thanks for creating an account with us.<br>To continue please verify your email with us.</h4></td>
                              </tr>
                              <tr>
                                  <td align="center" style="border-collapse: collapse;padding: 0;"><a href="${url}/api/auth/verify/${token}" target="_blank" class="verify-link" style="text-decoration: none;display: inline-block;padding: 10px 20px;background-color: #28b485;color: #ffffff;border-radius: 3px;margin: 20px 0 50px 0;font-size: 15px;">Verify Your Email</a></td>
                              </tr>
                              <tr>
                                  <td align="center" style="border-collapse: collapse;padding: 0;"><h4 class="verify-desc" style="font-size: 15px;color: #868686;font-weight: 400;">Email validation time 1 hour.</h4></td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
  </body>
  </html>
  `;
};
