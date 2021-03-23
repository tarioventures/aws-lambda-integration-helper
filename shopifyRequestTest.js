const {shopifyRecursiveRequest} = require('./index');


shopifyRecursiveRequest({
    method:'GET',
    url:'/admin/api/2021-01/orders.json',
    body:{
        limit: 10,
        some: 'stuff'
    }
},{
    apiKey:'943d154d6486f4cc710e59856813049e',
    password: 'f01576ff65ad141a8ee32be36626c942',
    shopName: 'permabrands-canada'
}, 'orders').then(function(res){
    console.log(res.length);
});