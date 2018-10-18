$(document).ready(function(){
  $("button").click(function(event) {
    console.log("zoek de blauwe tand");
    navigator.bluetooth.requestDevice({
      acceptAllDevices: true
    });
  });
});
