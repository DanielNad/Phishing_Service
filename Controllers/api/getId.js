const mongoose = require("mongoose");
const { Domain, Validator } = require("../../Models/Domain");

exports.getId = async (req, res, next) => {
  try {
    if (!req.body) {
      throw {
        message: "Please provide a body for the request.",
        status: "400",
      };
    } else if (!req.body.domain) {
      throw {
        message: "Please provide a domain.",
        status: "400",
      };
    } else {
      const result = await Validator.validateAsync(req.body);
      const newDomain = new Domain(result);
      console.log(`Adding ${newDomain.domain} domain to the database.`);
      await newDomain.save();
      res.status(201).json({
        data: {
          uuid: newDomain.id,
        },
        message: "The request was added.",
      });
      console.log(`${newDomain.domain} domain was added to the database.`);
    }
  } catch (error) {
    next(error);
  }
};
