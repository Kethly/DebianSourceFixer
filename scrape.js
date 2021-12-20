function GetData()  {
  var XMLReq = new XMLHttpRequest();

  XMLReq.open( "GET", "https://packages.debian.org/")


  XMLReq.onreadystatechange = function() {
    if(XMLReq.readyState == 4 && XMLReq.status == 200) {
      console.log(XMLReq.responseText);
    }
  }

  XMLReq.send();
}

