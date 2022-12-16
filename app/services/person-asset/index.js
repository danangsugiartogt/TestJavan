const connection = require('../../database/mysqlConnection.js');
const { asset } = require('../asset/index.js');

exports.create = async(data) => {
    try{
        const { person_id, asset_id } = data;

        const query = 'INSERT INTO person_assets (person_id, asset_id) VALUES (?,?)';
        const params = [ person_id, asset_id ];
        const [rows] = await connection.execute(query, params);

        if(rows.insertId){
            const query = `SELECT p.name as person_name, a.name as asset_name
                           FROM person_assets pa 
                           LEFT JOIN persons p ON p.id = pa.person_id 
                           LEFT JOIN assets a ON a.id = pa.asset_id 
                           WHERE pa.person_id=?`;

            const params = [ person_id ]
            const [rows] = await connection.execute(query, params);

            let result;
            let assets = [];

            if(rows.length > 1){
                for(let i = 0; i < rows.length; i++){
                    assets.push(rows[i].asset_name);
                }

                result = { name: rows[0].person_name, assets };
                return result;
            }

            assets.push(rows[0].asset_name);
            result = { name: rows[0].person_name, assets};

            return result;
        }

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
        const query = `SELECT p.name as person_name, a.name as asset_name
                       FROM person_assets pa 
                       LEFT JOIN persons p ON p.id = pa.person_id 
                       LEFT JOIN assets a ON a.id = pa.asset_id 
                       WHERE pa.person_id=?`;
        
        const params = [ id ]
        const [rows] = await connection.execute(query, params);

        if(rows.length <= 0) return rows;

        let result;
        let assets = [];

        if(rows.length > 1){
            for(let i = 0; i < rows.length; i++){
                assets.push(rows[i].asset_name);
            }
            
            result = { name: rows[0].person_name, assets };
            return result;
        }

        assets.push(rows[0].asset_name);
        result = { name: rows[0].person_name, assets};

        return result;
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

exports.delete = async(data) => {
    try{
        const { person_id, asset_id } = data;
        const query = 'DELETE FROM person_assets WHERE person_id=? AND asset_id=?';
        const params = [ person_id, asset_id ];

        const [ rows ] = await connection.execute(query, params);

        if(rows.affectedRows > 0) return true;
        return false;
    }catch(err){
        return err;
    }
}