function GetData()  {
  var XMLReq = new XMLHttpRequest();
  //header('Access-Control-Allow-Origin: *');
  XMLReq.open( "GET", "https://www.debian.org/distrib/packages");
  
  XMLReq.setRequestHeader('withCredentials', 'true');
  

  XMLReq.onreadystatechange = function() {
    console.log(XMLReq.responseText);
    if(XMLReq.readyState == 4 && XMLReq.status == 200) {
      console.log(XMLReq.responseText);
    }
  }

  XMLReq.send();
}

