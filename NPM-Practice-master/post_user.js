const axios = require('axios');

async function makePostRequest() {

    params = {
        id: 7,
        first_name: 'Ernesto',
        last_name: 'Díaz',
        email: 'ernesto1.diaz2@gmail.com'
      }

      let resp = await axios.post('http://localhost:3000/users', params);
      console.log(resp.data);

    
}

makePostRequest();
