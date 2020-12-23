const mongoose = require("mongoose");
const { Domain, Validator } = require("../../Models/Domain");

let map = new Map();

exports.getUrlList = async (req, res, next) => {
  try {
    if (!req.body) {
      throw {
        message: "Please provide a body for the request.",
        status: "400",
      };
    } else if (!req.body.id) {
      throw {
        message: "Please provide an id for the request.",
        status: "400",
      };
    } else {
      const id = req.body.id;
      console.log(`Searching for id: ${id}`);
      if (!mongoose.isValidObjectId(id)) {
        throw {
          message: "Please provide a valid id.",
          status: "400",
        };
      }
      const result = await Domain.findById(id);
      if (!result) {
        throw {
          message: `id: ${id} was not found.`,
          status: "400",
        };
      } else {
        console.log(`{id: ${id}} was found.`);
        if (!map.has(id)) {
          const urllist = fun().then();
        }
      }
      if (!map.get(id)) {
        res.status(200).json({
          message: "Data is not ready yet, please try again later.",
        });
      } else {
        res.status(200).json({
          data: map.get(id),
          status: "200",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};
