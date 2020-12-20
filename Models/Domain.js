const joi = require('joi');
const mongoose = require('mongoose');

const domainSchema = {
    domain:{
       type: String, requierd: true
    }
}

const joiDomainValidator = joi.object().keys({
    domain: joi.string().domain().min(5).required()
})

const Domain = new mongoose.model("Domain",domainSchema)

exports.Domain = Domain
exports.Validator = joiDomainValidator