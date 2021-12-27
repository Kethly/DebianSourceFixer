  //const fetch = require("node-fetch");
  const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  const fetch = require('node-fetch');
  function findByElement(arr, elem){
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
        if(arr[index].indexOf("</" + elem + ">") >= 0){
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
  //console.log(simple)
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
function getoneplustwo(){
const one = event.queryStringParameters.one;
const two = event.queryStringParameters.two;
return one + two;
}
  
  exports.handler = async (event, context) => {
  const spackage = event.queryStringParameters.package;
  const ssuite = event.queryStringParameters.suite;
  var searchterm = spackage;
  var suite = ssuite;
  var response = await fetch("https://packages.debian.org/search?keywords=" + searchterm + "&searchon=names&section=all&exact=1");
  var data = await response.text();
  var htmlArray = JSON.stringify(data).split("\n");
  for (let index = 0; index < htmlArray.length; index++) {
        htmlArray[index] = htmlArray[index].trim();      
  }
  htmlArray = htmlArray.filter(n => n);
  var searchResult = getInnerText(loopSearchForPackageType(findByElement(findByElement(htmlArray, "ul")[1], "li"), suite)).split(" ")[0] + "/" + searchterm;
  return { statusCode: 200, body: data, };
  var XMLReq = new XMLHttpRequest();
  var htmlArray = [];
  XMLReq.open("GET", "/api/search?keywords=" + searchterm + "&searchon=names&section=all&exact=1");
  XMLReq.onreadystatechange = function() {
    if(XMLReq.readyState == 4 && XMLReq.status == 200) {
      //console.log(XMLReq.responseText);
      htmlArray = XMLReq.responseText.split("\n")
      
      
      searchResult = getInnerText(loopSearchForPackageType(findByElement(findByElement(htmlArray, "ul")[1], "li"), suite)).split(" ")[0] + "/" + searchterm;
      console.log(searchResult);
      
    }
  }

  XMLReq.send();
  
};
