const { StatusCodes } = require('http-status-codes');
const connection      = require('../../database/mysqlConnection.js');

exports.create = async(data) => {
    try{
        const { name, gender } = data;

        const query = 'INSERT INTO persons (name, gender) VALUES (?,?)';
        const params = [ name, gender ];
        const result = await connection.execute(query, params);
        
        return result;
    }catch(err){
        return err;
    }
}