const connection = require('../../database/mysqlConnection.js');

exports.create = async(data) => {
    try{
        const { child_id, parent_id } = data;

        const query = 'INSERT INTO person_relations (child_id, parent_id) VALUES (?,?)';
        const params = [ child_id, parent_id ];
        const [rows] = await connection.execute(query, params);

        return rows;
    }catch(err){
        return err;
    }
}

exports.index = async() => {
    try{
        const query = 'SELECT * FROM person_relations';
        const [rows] = await connection.execute(query);

        return rows;
    }catch(err){
        return err;
    }
}

exports.relationById = async(id) => {
    try{
        const query = 'SELECT * FROM person_relations WHERE id=?';
        const params = [ id ]
        const [rows] = await connection.execute(query, params);

        return rows;
    }catch(err){
        return err;
    }
}

exports.relationByParentId = async(id) => {
    try{
        const query = 'SELECT * FROM person_relations WHERE parent_id=?';
        const params = [ id ]
        const [rows] = await connection.execute(query, params);

        return rows;
    }catch(err){
        return err;
    }
}

exports.relationByChildId = async(id) => {
    try{
        const query = 'SELECT * FROM person_relations WHERE child_id=?';
        const params = [ id ]
        const [rows] = await connection.execute(query, params);

        return rows;
    }catch(err){
        return err;
    }
}

exports.update = async(data) => {
    try{
        const { id, child_id, parent_id } = data;

        const queryUpdate = 'UPDATE person_relations SET child_id=?, parent_id=? WHERE id=?';
        const paramsUpdate = [ child_id, parent_id, id ];

        const [ rows ] = await connection.execute(queryUpdate, paramsUpdate);

        if(rows.affectedRows > 0) return true;
        return false;
    }catch(err){
        return err;
    }
}

exports.delete = async(id) => {
    try{
        const query = 'DELETE FROM person_relations WHERE id=?';
        const params = [ id ];

        const [ rows ] = await connection.execute(query, params);

        if(rows.affectedRows > 0) return true;
        return false;
    }catch(err){
        return err;
    }
}