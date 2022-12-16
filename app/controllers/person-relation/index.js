const { StatusCodes }                    = require('http-status-codes');
const { personRelation }                 = require('../../services/index.js');
const { successResponse, errorResponse } = require('../../helpers/response.js');

exports.create = async (req, res) => {
    try{
        const result = await personRelation.create(req.body);

        if(result.sqlMessage){
            return res
                .status(StatusCodes.EXPECTATION_FAILED)
                .json(errorResponse(result.sqlMessage));
        }

        return res
            .status(StatusCodes.CREATED)
            .json(successResponse('relation created successfully.', result));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.index = async (req, res) => {
    try{
        const result = await personRelation.index(req.body);
        return res
            .status(StatusCodes.OK)
            .json(successResponse('get person relations successfully.', result));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.relationByParentId = async (req, res) => {
    try{
        const result = await personRelation.relationByParentId(req.params.id);

        if(result.length <= 0){
            return res
                .status(StatusCodes.NOT_FOUND)
                .json(errorResponse('the person relation not found.'));
        }

        return res
            .status(StatusCodes.OK)
            .json(successResponse('get person relation successfully.', result));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.relationByChildId = async (req, res) => {
    try{
        const result = await personRelation.relationByChildId(req.params.id);

        if(result.length <= 0){
            return res
                .status(StatusCodes.NOT_FOUND)
                .json(errorResponse('the person relation not found.'));
        }

        return res
            .status(StatusCodes.OK)
            .json(successResponse('get person relation successfully.', result));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.relationById = async (req, res) => {
    try{
        const result = await personRelation.relationById(req.params.id);
        return res
            .status(StatusCodes.OK)
            .json(successResponse('get person relation successfully.', result));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.update = async (req, res) => {
    try{
        const result = await personRelation.update(req.body);

        // person not found
        if(!result){
            return res
            .status(StatusCodes.NOT_FOUND)
            .json(errorResponse('the person relation not found.'));
        }

        // foreign key not found
        if(!result.insertId){
            return res
                .status(StatusCodes.EXPECTATION_FAILED)
                .json(errorResponse(result.sqlMessage));
        }

        return res
            .status(StatusCodes.OK)
            .json(successResponse('relation updated successfully.', []));
    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.delete = async (req, res) => {
    try{
        const result = await personRelation.delete(req.params.id);

        if(!result){
            return res
            .status(StatusCodes.NOT_FOUND)
            .json(errorResponse('the person relation not found.'));
        }

        return res
            .status(StatusCodes.OK)
            .json(successResponse('relation deleted successfully.', []));
    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}