const connection = require('../../database/mysqlConnection.js');

exports.create = async(data) => {
    try{
        const { person_id, asset_id } = data;

        const query = 'INSERT INTO person_assets (person_id, asset_id) VALUES (?,?)';
        const params = [ person_id, asset_id ];
        const [rows] = await connection.execute(query, params);

        return rows;
    }catch(err){
        return err;
    }
}

exports.index = async() => {
    try{
        const query = 'SELECT * FROM person_assets';
        const [rows] = await connection.execute(query);

        return rows;
    }catch(err){
        return err;
    }
}

exports.assetById = async(id) => {
    try{
        const query = 'SELECT * FROM person_assets WHERE id=?';
        const params = [ id ]
        const [rows] = await connection.execute(query, params);

        return rows;
    }catch(err){
        return err;
    }
}

exports.assetByPersonId = async(id) => {
    try{
        const query = 'SELECT * FROM person_assets WHERE person_id=?';
        const params = [ id ]
        const [rows] = await connection.execute(query, params);

        return rows;
    }catch(err){
        return err;
    }
}

exports.update = async(data) => {
    try{
        const { person_id, asset_id } = data;

        const query = 'UPDATE person_assets SET person_id=?, asset_id=? WHERE person_id=?';
        const params = [ person_id, asset_id, person_id ];

        const [ rows ] = await connection.execute(query, params);

        if(rows.affectedRows > 0) return true;
        return false;
    }catch(err){
        return err;
    }
}

exports.delete = async(id) => {
    try{
        const query = 'DELETE FROM person_assets WHERE person_id=?';
        const params = [ id ];

        const [ rows ] = await connection.execute(query, params);

        if(rows.affectedRows > 0) return true;
        return false;
    }catch(err){
        return err;
    }
}