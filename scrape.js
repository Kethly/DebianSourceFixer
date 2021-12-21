function GetData()  {
//   fetch("//sources.debian.org/api/search/query", {mode:"cors"})
//   .then(response => {
//     // indicates whether the response is successful (status code 200-299) or not
//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`)
//     }
//     return response.json();
//   });
  var XMLReq = new XMLHttpRequest();
  var htmlArray = [];
  //header('Access-Control-Allow-Origin: *');
  XMLReq.open("GET", "/api/search?keywords=bum&searchon=names&section=all&exact=1");
  
  //XMLReq.setRequestHeader('access-control-allow-origin', '*');
  //XMLReq.setRequestHeader('access-control-request-method', 'GET');

  XMLReq.onreadystatechange = function() {
    if(XMLReq.readyState == 4 && XMLReq.status == 200) {
      console.log(XMLReq.responseText);
      htmlArray = XMLReq.responseText.split("\n")
      document.getElementById("output").innerText = htmlArray[0]
      
    }
  }

  XMLReq.send();
}

async function getData() {
  const response = await fetch('/api/search?keywords=bum&searchon=names&suite=stable&section=all');
  const data = await response.json();
  console.log(data);
}
