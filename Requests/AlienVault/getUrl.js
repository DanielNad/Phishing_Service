require("dotenv").config({ path: "../../.env" });
const axios = require("axios");
const { get } = require("mongoose");

const getUrl = async (domain) => {
  try {
    const res = await axios.get(
      `${process.env.OTX_URL}/${domain}/url_list?limit=50`,
      {
        Authorization: `BASIC ${process.env.OTX_KEY}`,
      }
    );
    if (!res.data || !res.data.full_size) {
      throw {
        message: "External Api failure.",
        status: "500",
      };
    } else {
      let pageIndex = 2;
      let pages = 5 || Math.ceil(res.data.full_size / 50);
      const pagesPromises = [res];
      // Check while
      while (pages > 1) {
        pagesPromises.push(
          axios.get(
            `${process.env.OTX_URL}/${domain}/url_list?limit=50&page=${pageIndex}`,
            {
              Authorization: `BASIC ${process.env.OTX_KEY}`,
            }
          )
        );
        pageIndex++;
        pages--;
      }
      const finalPromise = await Promise.allSettled(pagesPromises);
      // return only fullfiled promises
      const result = finalPromise.map((page) => {
        if (page.value && page.value.data && page.value.data.url_list) {
          return page.value.data.url_list;
        }
      });
      return result;
    }
  } catch (error) {
    throw error;
  }
};

getUrl("facebook.com").then((value) => console.log(value));

module.exports = getUrl;
