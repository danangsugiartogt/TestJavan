const axios      = require('axios');
const connection = require('../../database/mysqlConnection.js');

exports.getPrice = async (personId) => {
    try {
        const query = `SELECT p.name as person_name, a.name as asset_name
                       FROM person_assets pa 
                       LEFT JOIN persons p ON p.id = pa.person_id 
                       LEFT JOIN assets a ON a.id = pa.asset_id 
                       WHERE pa.person_id=?`;

        const params = [ personId ]
        const [rows] = await connection.execute(query, params);

        let assets = [];
        if(rows.length > 1){
            for(let i = 0; i < rows.length; i++){
                assets.push(rows[i].asset_name);
            }
        }
        else{
            assets.push(rows[0].asset_name);
        }

        const response = await axios.get('https://dummyjson.com/products/category/smartphones');

        let totalPrice = 0;
        if(response && response.data.products.length > 0){
            const products = response.data.products;

            for(let i = 0; i < assets.length; i++){
                for(let j = 0; j < products.length; j++){
                    if(assets[i].toLowerCase() === products[j].title.toLowerCase())
                        totalPrice += products[j].price;
                }
            }
        }

        const data = { name: rows[0].person_name, assets, total_price: totalPrice };
        return data;
    } catch (err) {
        console.error(err);
    }
}