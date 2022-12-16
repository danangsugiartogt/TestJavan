const person         = require('./person/index.js');
const personRelation = require('./person-relation/index.js');
const asset          = require('./asset/index.js');
const personAsset    = require('./person-asset/index.js');
const priceService   = require('./asset-price/index.js');

module.exports = {
    person,
    personRelation,
    asset,
    personAsset,
    priceService
}