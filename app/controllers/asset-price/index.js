const { StatusCodes }                    = require('http-status-codes');
const { priceService }                   = require('../../services/index.js');
const { successResponse, errorResponse } = require('../../helpers/response.js');

exports.getPrice = async (req, res) => {
    try{
        const result = await priceService.getPrice(req.params.personId);
        return res
            .status(StatusCodes.CREATED)
            .json(successResponse('get total price successfully.', result));

    }catch(err){
        return res
            .status(StatusCodes.EXPECTATION_FAILED)
            .json(errorResponse(err));
    }
}