const https = require('https');



const options = {
  method: 'DELETE',
  host: 'jsonplaceholder.typicode.com',
  path: '/users/1',
  headers: {
    'Accept': 'application/json'
  }
  };

let request= https.request(options,(res)=>{

    if (res.statusCode !== 200) {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res.resume();
        return;
      }
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });
    
      res.on('close', () => {
        console.log('Retrieved all data');
        console.log(JSON.parse(data));
      });
     
      });
      request.end()
      request.on('error', (err) => {
        console.error(`Encountered an error trying to make a request: ${err.message}`);
      
}) 
