function GetData()  {
  var XMLReq = new XMLHttpRequest();
  XMLReq.setRequestHeader("Access-Control-Allow-Origin", "https://packages.debian.org/");
  XMLReq.open( "GET", "https://packages.debian.org/");
  

  XMLReq.onreadystatechange = function() {
    if(XMLReq.readyState == 4 && XMLReq.status == 200) {
      console.log(XMLReq.responseText);
    }
  }

  XMLReq.send();
}

