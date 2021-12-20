function GetData()  {
  var XMLReq = new XMLHttpRequest();

  XMLReq.open( "GET", "https://edition.cnn.com/", true )


  XMLReq.onreadystatechange = function() {
    if(XMLReq.readyState == 4 && XMLReq.status == 200) {
      alert(XMLReq.responseText);
    }
  }

  XMLReq.send();
}

