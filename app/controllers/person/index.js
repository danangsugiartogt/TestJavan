const { StatusCodes }                    = require('http-status-codes');
const { person }                         = require('../../services/index.js');
const { successResponse, errorResponse } = require('../../helpers/response.js');

exports.create = async (req, res) => {
    try{
        await person.create(req.body);
        return res
            .status(StatusCodes.CREATED)
            .json(successResponse('created successfully.', []));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}