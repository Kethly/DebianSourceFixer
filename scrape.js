var myHeaders = new Headers(); // Currently empty
myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.set('Access-Control-Allow-Origin', '*');
function GetData()  {
  var XMLReq = new XMLHttpRequest();
  //header('Access-Control-Allow-Origin: *');
  XMLReq.open( "GET", "https://www.debian.org/distrib/packages");
  
  XMLReq.setRequestHeader('origin', 'http://localhost:8000');
  

  XMLReq.onreadystatechange = function() {
    if(XMLReq.readyState == 4 && XMLReq.status == 200) {
      console.log(XMLReq.responseText);
    }
  }

  XMLReq.send();
}

