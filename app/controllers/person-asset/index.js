const { StatusCodes }                    = require('http-status-codes');
const { personAsset }                    = require('../../services/index.js');
const { successResponse, errorResponse } = require('../../helpers/response.js');

exports.create = async (req, res) => {
    try{
        const result = await personAsset.create(req.body);

        if(result.length <= 0){
            return res
                .status(StatusCodes.EXPECTATION_FAILED)
                .json(errorResponse(result.sqlMessage));
        }

        return res
            .status(StatusCodes.CREATED)
            .json(successResponse('asset created successfully.', result));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.index = async (req, res) => {
    try{
        const result = await personAsset.index(req.body);
        return res
            .status(StatusCodes.OK)
            .json(successResponse('get person assets successfully.', result));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.assetByPersonId = async (req, res) => {
    try{
        const result = await personAsset.assetByPersonId(req.params.id);

        if(!result || result.length <= 0){
            return res
                .status(StatusCodes.NOT_FOUND)
                .json(errorResponse('the person asset not found.'));
        }

        return res
            .status(StatusCodes.OK)
            .json(successResponse('get person asset successfully.', result));
            
    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.assetById = async (req, res) => {
    try{
        const result = await personAsset.assetById(req.params.id);
        return res
            .status(StatusCodes.OK)
            .json(successResponse('get person asset successfully.', result));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.update = async (req, res) => {
    try{
        const result = await personAsset.update(req.body);

        if(!result){
            return res
            .status(StatusCodes.NOT_FOUND)
            .json(errorResponse('the person asset not found.'));
        }

        if(result.sqlMessage){
            return res
            .status(StatusCodes.NOT_FOUND)
            .json(errorResponse(result.sqlMessage));
        }

        return res
            .status(StatusCodes.OK)
            .json(successResponse('the person asset updated successfully.', []));
    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}

exports.delete = async (req, res) => {
    try{
        const result = await personAsset.delete(req.params.personId);

        if(!result){
            return res
            .status(StatusCodes.NOT_FOUND)
            .json(errorResponse('the person asset not found.'));
        }

        return res
            .status(StatusCodes.OK)
            .json(successResponse('the person asset deleted successfully.', []));
    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}