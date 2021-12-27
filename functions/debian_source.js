  //const fetch = require("node-fetch");
  const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  const fetch = require('node-fetch');
  function findByElement(arr, elem, extra = ""){ //extra is an alternative end
  if(!arr){
    return "";
  }
  var found = []; 
  var a = 0;
  var b = 0;
  for (let index = 0; index < arr.length; index++) {

        if(arr[index].indexOf("<" + elem + ">") >= 0 || arr[index].indexOf("<" + elem) >= 0){
          a = index;
          //console.log(index);
        }
        if(arr[index].indexOf("</" + elem + ">") >= 0 || arr[index].indexOf("</" + extra + ">") >= 0){
          b = index;
          //console.log(index);
          found.push(arr.slice(a, b + 1));
          a = 0;
          b = 0;
        }
 
      }
  return found;
}
  function getInnerText(arr, initial = ">", end = "<"){ //initial is typically ">", and end is typically "<"
  var simple = arr.join('');
  var a = 0;
  var b = 0;
  var c = "";
  for (let index = 0; index < simple.length; index++) {
    if(simple.charAt(index) === initial && a === 0){
          a = index;
        }
        if(simple.charAt(index) === end && a != 0){
          b = index;
          c += (simple.slice(a + 1, b));
          a = 0;
          b = 0;
        }
  }
  
  return c;
}

  function loopSearchForPackageType(arr, suite="stable"){
  if(suite === null){
    suite = "stable";
  }
  if(arr === ""){
    console.log("nothing was found.  If you're reading this, maybe the package you were looking for isn't here or doesn't exist?  Check your search words again.");
    return "";
  }
  if (arr.length <= 1) { return arr[0]; }
  for (let index = 0; index < arr.length; index++){
    if(getInnerText(arr[index]).indexOf("(" + suite + ")") >= 0) {
      return arr[index];
    }
  }
  return arr[0];
}
function clean_up_html(data){
var htmlArray = data.split("\n"); //JSON.stringify(data).split("\n");
  for (let index = 0; index < htmlArray.length; index++) {
        htmlArray[index] = htmlArray[index].toString().trim();      
  }
  htmlArray = htmlArray.filter(n => n);
  return htmlArray
}
  exports.handler = async (event, context) => {
  const spackage = event.queryStringParameters.package;
  const ssuite = event.queryStringParameters.suite;
  var searchterm = spackage;
  var suite = ssuite;
  var response = await fetch("https://packages.debian.org/search?keywords=" + searchterm + "&searchon=names&section=all&exact=1");
  var data = await response.text();
  var htmlArray = clean_up_html(data);
  var searchResult = getInnerText(loopSearchForPackageType(findByElement(findByElement(htmlArray, "ul")[1], "li"), suite)).split(" ")[0] + "/" + searchterm;
  var test = ["hi", "there", "hello"];
  var packageDownload = await fetch("https://packages.debian.org/" + searchResult);
  data = await packageDownload.text();
  htmlArray = clean_up_html(data);
  searchResult = findByElement(htmlArray, 'div id=\"pdownload\"', 'div');
  return { statusCode: 200, body: JSON.stringify(searchResult), };
};
