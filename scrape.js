function GetData()  {
//   fetch("https://www.debian.org/distrib/packages")
//   .then(response => {
//     // indicates whether the response is successful (status code 200-299) or not
//     if (!response.ok) {
//       throw new Error(`Request failed with status ${reponse.status}`)
//     }
//     return response.json()
//   })
//   .then(data => {
//     console.log(data.count)
//     console.log(data.products)
//   })
//   .catch(error => console.log(error))
  var XMLReq = new XMLHttpRequest();
  //header('Access-Control-Allow-Origin: *');
  XMLReq.open("GET", "https://packages.debian.org/stretch/bum");
  
  //XMLReq.setRequestHeader('Access-Control-Allow-Origin', '*');
  

  XMLReq.onreadystatechange = function() {
    console.log(XMLReq.responseText);
    if(XMLReq.readyState == 4 && XMLReq.status == 200) {
      console.log(XMLReq.responseText);
    }
  }

  XMLReq.send();
}

