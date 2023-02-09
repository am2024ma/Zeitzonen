
function startTime() {
    
    document.getElementById('clockCET').innerHTML = timeInBerlin();
    document.getElementById("clockBerlin").innerHTML= timeInBerlin();
     
    document.getElementById("clockNewYork").innerHTML = timeInNewYork()
    document.getElementById("clockPeking").innerHTML =    timeInShanghai();

    setTimeout(startTime, 1000);

  }

  function timeInBerlin(){   {
    function z(n){return (n<10?'0':'') + n}


    const date = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Berlin"}))
 
    return z(date.getHours()) + ':' + z(date.getMinutes()) + ':' + z(date.getSeconds());
  } 
}

  function timeInShanghai() {
    function z(n){return (n<10?'0':'') + n}
     
   
    const date = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"}))
    
    return   z(date.getHours()) + ':' + z(date.getMinutes()+ ':' + z(date.getSeconds()));
  }
  

  function timeInNewYork(){   {
        function z(n){return (n<10?'0':'') + n}
 

        const date = new Date(new Date().toLocaleString("en-US", {timeZone: "America/New_York"}))
        
        return z(date.getHours()) + ':' + z(date.getMinutes()) + ':' + z(date.getSeconds());
      } 
  }


  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  startTime();