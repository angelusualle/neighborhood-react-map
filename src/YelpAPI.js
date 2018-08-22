const api = 'https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses'


// My token
let token = 'liHI3mNwxbMgKCAakDZO7APvqIJ0Y-aeTOVgI0MgQu_QjRiFytTAeCWf4OH845cCIv-BDCAcJsM2F1iUCNpBdxiZqviYuSyrhzkNpZ8tzBDrQTQeP79ltC7Sy_97W3Yx';

const headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer ' + token,
  'Origin': 'localhost:3000'

}

export const get = (yelpId) =>
  fetch(`${api}/${yelpId}`, { headers })
    .then(res => res.json())
