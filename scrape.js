function GetData()  {
  var XMLReq = new XMLHttpRequest();
  //header('Access-Control-Allow-Origin: *');
  XMLReq.open( "GET", "https://www.debian.org/distrib/packages");
  
  XMLReq.setRequestHeader('Access-Control-Allow-Origin', '*');
  

  XMLReq.onreadystatechange = function() {
    if(XMLReq.readyState == 4 && XMLReq.status == 200) {
      console.log(XMLReq.responseText);
    }
  }

  XMLReq.send();
}

