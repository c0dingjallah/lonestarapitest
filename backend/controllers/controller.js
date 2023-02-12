const axios = require('axios');
const uuid = require('uuid');
//import { v4 as uuidv4 } from 'uuid';
// create a user
const createUser = async (req, res) => {

  const uuid  = uuid.v4();
 

  try {
    var data = JSON.stringify({
        "providerCallbackHost": "https://webhook.site/7c6c8e50-bc68-41f1-9199-e7da5dac7ff3"
      });

      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url:
        'https://sandbox.momodeveloper.mtn.com/v1_0/apiuser',
        headers:{
          'X-Reference-Id': uuid,
          'Ocp-Apim-Subscription-Key': 'e3f4df2222814fcebb17525fee7ecdd0',
          'Content-Type':'application/json'
        },
        data:data
      }

      try {
        const response = await axios(config);
        res.status(200).json(response.data);
      } catch (error) {
        console.error(error);
        res.status(400).json({error: error.message});
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({error: error.message});
    }
}



module.exports = { createUser }