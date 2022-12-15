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

exports.update = async(data) => {
    try{
        const { id, name, gender } = data;

        const queryUpdate = 'UPDATE persons SET name=?, gender=? WHERE id=?';
        const paramsUpdate = [ name, gender, id ];

        const [ rows ] = await connection.execute(queryUpdate, paramsUpdate);

        if(rows.affectedRows > 0) return true;
        return false;
    }catch(err){
        return err;
    }
}