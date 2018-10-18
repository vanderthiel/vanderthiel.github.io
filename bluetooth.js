button.addEventListener('pointerup', function(event) {
  console.log("zoek de blauwe tand");
  navigator.bluetooth.requestDevice({
    acceptAllDevices: true,
    optionalServices: ['battery_service']
  });
});