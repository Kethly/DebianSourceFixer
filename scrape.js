function GetData()  {
  var XMLReq = new XMLHttpRequest();

  XMLReq.open( "GET", "https://cors-anywhere.herokuapp.com/https://packages.debian.org/");
  XMLReq.setRequestHeader("Access-Control-Allow-Origin", "*");
  

  XMLReq.onreadystatechange = function() {
    if(XMLReq.readyState == 4 && XMLReq.status == 200) {
      console.log(XMLReq.responseText);
    }
  }

  XMLReq.send();
}

