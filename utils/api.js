const axios = require('axios'); 

const getUser  = function(userResponse) {
    try { let response = axios.get(`https://api.github.com/users/${userResponse.username}`)
    return response
} catch(error) {
    console.log(error); 
}
}; 