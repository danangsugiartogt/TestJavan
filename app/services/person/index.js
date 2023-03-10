const connection      = require('../../database/mysqlConnection.js');

exports.create = async(data) => {
    try{
        const { name, gender } = data;

        const query = 'INSERT INTO persons (name, gender) VALUES (?,?)';
        const params = [ name, gender ];
        const [rows] = await connection.execute(query, params);

        return rows;
    }catch(err){
        return err;
    }
}

exports.index = async() => {
    try{
        const query = 'SELECT * FROM persons';
        const [rows] = await connection.execute(query);

        return rows;
    }catch(err){
        return err;
    }
}

exports.person = async(id) => {
    try{
        const query = 'SELECT * FROM persons WHERE id=?';
        const params = [ id ]
        const [rows] = await connection.execute(query, params);

        return rows;
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