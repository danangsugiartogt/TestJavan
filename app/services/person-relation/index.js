const connection = require('../../database/mysqlConnection.js');

exports.create = async(data) => {
    try{
        const { child_id, parent_id } = data;

        const query = 'INSERT INTO person_relations (child_id, parent_id) VALUES (?,?)';
        const params = [ child_id, parent_id ];
        const [rows] = await connection.execute(query, params);

        if(rows.insertId){
            const query = `SELECT child.name as child_name, parent.name as parent_name
                           FROM person_relations pr 
                           LEFT JOIN persons child ON child.id = pr.child_id
                           LEFT JOIN persons parent ON parent.id = pr.parent_id
                           WHERE pr.parent_id=?`;

            const params = [ parent_id ];
            const [rows] = await connection.execute(query, params);
            
            let childs = [];
            let result;
            if(rows.length > 1){
                for(let i = 0; i < rows.length; i++){
                    childs.push(rows[i].child_name);
                }

                result = { parent: rows[0].parent_name, childs };
                return result;
            }

            childs.push(rows[0].child_name);
            result = { parent: rows[0].parent_name, childs };

            return rows;
        }

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

exports.relationByParentId = async(parentId) => {
    try{
        const query = `SELECT child.name as child_name, parent.name as parent_name
                       FROM person_relations pr 
                       LEFT JOIN persons child ON child.id = pr.child_id
                       LEFT JOIN persons parent ON parent.id = pr.parent_id
                       WHERE pr.parent_id=?`;

        const params = [ parentId ];
        const [rows] = await connection.execute(query, params);

        if(rows.length > 0){

            let childs = [];
            let result;

            if(rows.length > 1){
                for(let i = 0; i < rows.length; i++){
                    childs.push(rows[i].child_name);
                }
    
                result = { parent: rows[0].parent_name, childs };
                return result;
            }
    
            childs.push(rows[0].child_name);
            result = { parent: rows[0].parent_name, childs };
        }

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

exports.deleteById = async(id) => {
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

exports.deleteByParentId = async(parentId) => {
    try{
        const query = 'DELETE FROM person_relations WHERE parent_id=?';
        const params = [ parentId ];

        const [ rows ] = await connection.execute(query, params);

        if(rows.affectedRows > 0) return true;
        return false;
    }catch(err){
        return err;
    }
}

exports.deleteByChildId = async(childId) => {
    try{
        const query = 'DELETE FROM person_relations WHERE child_id=?';
        const params = [ childId ];

        const [ rows ] = await connection.execute(query, params);

        if(rows.affectedRows > 0) return true;
        return false;
    }catch(err){
        return err;
    }
}