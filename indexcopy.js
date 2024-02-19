const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const API_KEY = "EAAYZCYomW2gcBOyEJnJX0s347kNcoJsiKZAZAiff7StipurdND2uebwm1sx8ux1BqhAK3ojGD4kD8rdr249TKKWlnHeufr0DlNWQMAFHZCbokvDwlBZC9UD5I6zH0XGtArMY84zzMuhGGqZBVhdd4TLhO6QHKHzuIvrqxoGRJ7KcZAvZCGRG1uaFFi7nVeRy6kT8AHzs5FwDUvZBZCgnJitUx44N01E9iCZCCrqPPUZD"
const PHONE_NUMBER = '+14082032469';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/",(req,res)=>{

  res.send('<h1>Hi This is santhosh sadwdw</h1>')
})

app.post('/webhook', async (req, res) => {
  // const { body } = req;
  // const { from, message } = body;

  console.log("enteredddddddddddddddddd")

  // Customize this logic to send different responses based on the incoming message
  // const responseMessage = `You said: ${message}`;

  // Send the response message back to the sender
  // await axios.post('https://graph.facebook.com/v18.0/226820867186026/messages', {
  //   to: from,
  //   messaging_product: 'whatsapp',
  //   type: 'template',
  //   template: JSON.stringify({
  //     name: responseMessage,
  //     language: {
  //         code: "en_US"
  //     }
  //   }),
  // }, {
  //   headers: {
  //     'Authorization': `Bearer ${API_KEY}`,
  //     'Content-Type': 'application/json',
  //   },
  // });

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
