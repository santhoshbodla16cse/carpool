const axios = require('axios');

const API_KEY = "EAAYZCYomW2gcBO4XiDFVM16aW0QahZAN8EKZCzljMOH83tNFPSpSxxWJ10tcUZCnlIGd9gz4D4hHUbLHpZCvHjUUvYs3WzQOzixEXP6Wth1TCONIzTNy3fnPwpEJOZBfWZBaeuaRRajTyPQ66iMp2L6TRd0ZCtmFsCgKQMxdmphIBCT9GyVKz1QBqHnK6IZAmkt15xqjPK2mR5xQmQJ8CPhOQ1RplLW80xZCW5JL2M"
const PHONE_NUMBER = '+14082032469';

axios.post('https://graph.facebook.com/v18.0/226820867186026/messages', {
  to: PHONE_NUMBER,
  messaging_product: 'whatsapp',
  type: 'template',
  template: 
  { 
    name: "hello_santhosh em chestunnav", 
    language: 
    { 
        code: "en_US"
    } 
    },
}, {
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
})
.then((response) => {
  console.log('Message sent successfully:', response.data);
})
.catch((error) => {
  console.error('Error sending message:', error.response.data);
});
