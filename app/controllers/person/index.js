const { StatusCodes }                    = require('http-status-codes');
const { person }                         = require('../../services/index.js');
const { successResponse, errorResponse } = require('../../helpers/response.js');

exports.create = async (req, res) => {
    try{
        const result = await person.create(req.body);
        return res
            .status(StatusCodes.CREATED)
            .json(successResponse('created successfully.', { id: result.insertId }));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.index = async (req, res) => {
    try{
        const result = await person.index(req.body);
        return res
            .status(StatusCodes.OK)
            .json(successResponse('get persons successfully.', result));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.person = async (req, res) => {
    try{
        const result = await person.person(req.params.id);
        return res
            .status(StatusCodes.OK)
            .json(successResponse('get person successfully.', result));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.update = async (req, res) => {
    try{
        const result = await person.update(req.body);

        if(!result){
            return res
            .status(StatusCodes.NOT_FOUND)
            .json(errorResponse('the person not found.'));
        }

        return res
            .status(StatusCodes.OK)
            .json(successResponse('updated successfully.', []));
    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}