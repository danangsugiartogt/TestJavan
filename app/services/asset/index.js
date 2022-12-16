const connection = require('../../database/mysqlConnection.js');

exports.create = async(data) => {
    try{
        const { name } = data;
        console.log('tes')
        const query = 'INSERT INTO assets (name) VALUES (?)';
        const params = [ name ];
        const [rows] = await connection.execute(query, params);

        return rows;
    }catch(err){
        return err;
    }
}

exports.index = async() => {
    try{
        const query = 'SELECT * FROM assets';
        const [rows] = await connection.execute(query);

        return rows;
    }catch(err){
        return err;
    }
}

exports.asset = async(id) => {
    try{
        const query = 'SELECT * FROM assets WHERE id=?';
        const params = [ id ]
        const [rows] = await connection.execute(query, params);

        return rows;
    }catch(err){
        return err;
    }
}

exports.update = async(data) => {
    try{
        const { id, name } = data;

        const queryUpdate = 'UPDATE assets SET name=? WHERE id=?';
        const paramsUpdate = [ name, id ];

        const [ rows ] = await connection.execute(queryUpdate, paramsUpdate);

        if(rows.affectedRows > 0) return true;
        return false;
    }catch(err){
        return err;
    }
}