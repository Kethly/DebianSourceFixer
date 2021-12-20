function GetData()  {
//   fetch("https://www.debian.org/distrib/packages", {Access-Control-Allow-Origin: '*'})
//   .then(response => {
//     // indicates whether the response is successful (status code 200-299) or not
//     if (!response.ok) {
//       throw new Error(`Request failed with status ${reponse.status}`)
//     }
//     return response
  var XMLReq = new XMLHttpRequest();
  //header('Access-Control-Allow-Origin: *');
  XMLReq.open("GET", "https://www.google.com/");
  
  //XMLReq.setRequestHeader('Access-Control-Allow-Origin', 'https://www.google.com/search?q=Details+of+package+bum+debian');
  

  XMLReq.onreadystatechange = function() {
    XMLReq.response.set('Access-Control-Allow-Origin', '*');
    console.log(XMLReq.responseText);
    if(XMLReq.readyState == 4 && XMLReq.status == 200) {
      console.log(XMLReq.responseText);
    }
  }

  XMLReq.send();
}

