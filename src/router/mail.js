const mailjet = require("node-mailjet").connect(
  "ea5fb0691d588924523584214e7d9f11",
  "2cfd2c23e5ab356d8b2994107f71617f"
);
const request = mailjet.post("send", { version: "v3.1" }).request({
  Messages: [
    {
      From: {
        Email: "mariettalaz98@gmail.com",
        Name: "Marietta"
      },
      To: [
        {
          Email: "mariettalaz98@gmail.com",
          Name: "Marietta"
        }
      ],
      Subject: "Email from Square",
      TextPart: "My first Mailjet email",
      HTMLPart:
        "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      CustomID: "AppGettingStartedTest"
    }
  ]
});
request
  .then(result => {
    console.log(result.body);
  })
  .catch(err => {
    console.log(err.statusCode);
  });
