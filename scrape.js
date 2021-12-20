define(function (require) {
const request = require("request-promise");
const cheerio = require("cheerio");
function getWebsite(){
  request("https://www.bullion-rates.com/gold/INR/2007-1-history.htm", (error, response, html) => {
          if(!error && response.statusCode==200) {
                const $= cheerio.load(html);
                  }
          });
}
});
