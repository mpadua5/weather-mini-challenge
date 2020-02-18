const axios = require('axios');
const url = require('../helpers/url.helper');

module.exports = {
    weatherRibeiraoPreto: async () => {
        return await axios.get(url.GetRibeiraoPreto)
            .then(retorno => retorno)
            .catch(err => {throw new Error(err.message)});
    }
}