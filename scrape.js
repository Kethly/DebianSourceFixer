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
  //header('Access-Control-Allow-Origin: *');
  XMLReq.open("GET", "https://sources.debian.org/doc/api/#copyright");
  
  XMLReq.setRequestHeader('access-control-allow-origin', '*');
  XMLReq.setRequestHeader('access-control-request-method', 'GET');

  XMLReq.onreadystatechange = function() {
    console.log(XMLReq.responseText);
    if(XMLReq.readyState == 4 && XMLReq.status == 200) {
      console.log(XMLReq.responseText);
    }
  }

  XMLReq.send();
}

async function getData() {
  const response = await fetch('//sources.debian.org/api/search');
  const data = await response.json();
  console.log(data);
}
