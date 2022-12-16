const { StatusCodes }                    = require('http-status-codes');
const { asset }                          = require('../../services/index.js');
const { successResponse, errorResponse } = require('../../helpers/response.js');

exports.create = async (req, res) => {
    try{
        const result = await asset.create(req.body);
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
        const result = await asset.index(req.body);
        return res
            .status(StatusCodes.OK)
            .json(successResponse('get assets successfully.', result));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.asset = async (req, res) => {
    try{
        const result = await asset.asset(req.params.id);

        if(result.length <= 0){
            return res
                .status(StatusCodes.NOT_FOUND)
                .json(errorResponse('the asset not found.'));
        }

        return res
            .status(StatusCodes.OK)
            .json(successResponse('get asset successfully.', result));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.update = async (req, res) => {
    try{
        const result = await asset.update(req.body);

        if(!result){
            return res
            .status(StatusCodes.NOT_FOUND)
            .json(errorResponse('the asset not found.'));
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