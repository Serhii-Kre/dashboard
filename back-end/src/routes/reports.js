import axios from 'axios';
import 'dotenv/config'
import { DUMMY_DATA } from '../util/dummy-data.js';
import { ENV_DEV } from '../util/constants.js';

export const reportsRoute = {
    path: '/api/reports',
    method: 'get',
    handler: async (req, res) => {
        if (process.env.NODE_ENV === ENV_DEV) {
            res.status(200).json(responseParse(DUMMY_DATA));     
        } else {
        try {    
          const response = await axios.get('http://3.84.53.46:3000/api/reports');
          res.status(200).send(responseParse(response.data));
        } catch (e) {
           console.log(e);
        } 
       }     
         
    },
};

// For complex Server Side calculations if any
const responseParse = res => {
    const reportsAmount = res.length;
    const allCountries = res.map(element => {
       return element.countryID
    });
    let uniqueCountries = [...new Set(allCountries)];

    return {
        original: res, // just for future needs 
        info: {
          reportsAmount,
          partnerCount: null,
          countriesCount: uniqueCountries.length,
          reportsRate: null  
        }        
    }
}